import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import Button from '../../../../components/baseComponents/Button';
import Input from '../../../../components/baseComponents/Input';
import InputError from '../../../../components/baseComponents/InputError';
import VisuallyHidden from '../../../../components/baseComponents/VisuallyHidden';
import { ONLY_NUMBERS } from '../../../../constants/regexPatterns';
import { useChallengeApi } from '../../../../services/api/useChallengeApi';
import * as S from './styles';

interface Props {
  sessionId: number;
  closeModal: () => void;
}

const formErrors: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  associateCpf: {
    required: 'Informe o CPF!',
    min: 'CPF deve ter no minímo 11 digitos!',
    matches: 'CPF deve possuir apenas números!',
  },
};

const ModalVote: React.FC<Props> = ({ sessionId, closeModal }: Props) => {
  const { voteTopic } = useChallengeApi();
  const [apiError, setApiError] = useState(false);

  const voteSchema = object({
    associateCpf: string()
      .trim()
      .required()
      .matches(ONLY_NUMBERS)
      .min(11)
      .max(11),
    vote: string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ associateCpf: string; vote: string }>({
    resolver: yupResolver(voteSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await voteTopic(sessionId, data);
      closeModal();
    } catch (error) {
      setApiError(true);
    }
  };

  return (
    <S.Container>
      <h2>Votar Pauta</h2>
      {apiError && (
        <InputError>
          Erro: Verifique se a sessão ainda está aberta ou se o associado já
          votou!
        </InputError>
      )}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.Label htmlFor="associateCpf">CPF Associado</S.Label>
          <Input
            id="associateCpf"
            type="text"
            maxLength={11}
            placeholder={'Ex: 71255103027'}
            {...register('associateCpf')}
          />
          {errors.associateCpf?.type && (
            <InputError>
              {formErrors['associateCpf'][errors.associateCpf?.type]}
            </InputError>
          )}
        </div>

        <fieldset>
          <legend>Clique na opção desejada</legend>
          <S.InputContainer>
            <S.Label htmlFor="yes-vote">
              <VisuallyHidden>Votar</VisuallyHidden>Sim
            </S.Label>
            <input
              id="yes-vote"
              type="radio"
              value="sim"
              {...register('vote')}
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label htmlFor="no-vote">
              <VisuallyHidden>Votar</VisuallyHidden>Não
            </S.Label>
            <input
              id="no-vote"
              type="radio"
              value="nao"
              {...register('vote')}
            />
          </S.InputContainer>
        </fieldset>
        {errors.vote?.type && (
          <InputError>Escolha uma opção de voto!</InputError>
        )}
        <S.ButtonContainer>
          <Button type="submit" variant="danger">
            Votar
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Container>
  );
};

export default ModalVote;
