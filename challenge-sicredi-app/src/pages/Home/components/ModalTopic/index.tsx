import Button from '../../../../components/baseComponents/Button';
import Input from '../../../../components/baseComponents/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useChallengeApi } from '../../../../services/api/useChallengeApi';
import InputError from '../../../../components/baseComponents/InputError';
import { useState } from 'react';
import * as S from './styles';

interface IFormData {
  title: string;
  description: string;
}

interface Props {
  onUpdate: () => void;
  closeModal: () => void;
}

const ModalTopic: React.FC<Props> = ({ onUpdate, closeModal }: Props) => {
  const [apiError, setApiErro] = useState(false);
  const { createTopic } = useChallengeApi();

  const topicSchema = object({
    title: string().required(),
    description: string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(topicSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await createTopic(data);
      onUpdate();
      closeModal();
    } catch (error) {
      setApiErro(true);
    }
  };

  return (
    <S.Container>
      <h2>Criar Pauta</h2>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        {apiError && (
          <InputError>
            Erro ao criar pauta. Tente novamente mais tarde.
          </InputError>
        )}
        <div>
          <S.Label htmlFor="title">Titulo da pauta</S.Label>
          <Input id="title" type="text" {...register('title')} />
          {errors.title?.type && <InputError>Informe o titulo!</InputError>}
        </div>
        <div>
          <S.Label htmlFor="description">Descrição da pauta</S.Label>
          <S.TextArea id="description" {...register('description')} />
          {errors.description?.type && (
            <InputError>Informe a descrição!</InputError>
          )}
        </div>
        <Button variant="danger" type="submit">
          Criar Pauta
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default ModalTopic;
