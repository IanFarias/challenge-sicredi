import { number, object } from 'yup';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/baseComponents/Button';
import Input from '../../../../components/baseComponents/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useChallengeApi } from '../../../../services/api/useChallengeApi';
import { useParams } from 'react-router-dom';
import InputError from '../../../../components/baseComponents/InputError';
import * as S from './styles';

interface IFormData {
  duration: string;
}

interface Props {
  closeModal: () => void;
  onOpenSession: () => void;
}

const formErrors: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  duration: {
    typeError: 'O tempo precisa ser um número válido!',
    min: 'O tempo deve ser maior que zero',
  },
};

export const ModalOpenSession: React.FC<Props> = ({
  onOpenSession,
  closeModal,
}: Props) => {
  const { openVotingSession } = useChallengeApi();
  const { id } = useParams();

  const sessionSchema = object({
    duration: number().required().moreThan(0).round('floor'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(sessionSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await openVotingSession(Number(id), data.duration);
      onOpenSession();
      closeModal();
    } catch (error) {
      console.log('erro ao criar sessao');
    }
  };

  return (
    <S.Container>
      <h2>Abrir Sessão de Votação</h2>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.Label htmlFor="duration">Tempo de duração (em minutos)</S.Label>
          <Input
            id="duration"
            type="text"
            {...register('duration')}
            placeholder="Ex: 20"
          />
          {errors.duration?.type && (
            <InputError>
              {formErrors['duration'][errors.duration.type]}
            </InputError>
          )}
        </div>
        <Button type="submit" variant="secondary">
          Abrir sessão
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default ModalOpenSession;
