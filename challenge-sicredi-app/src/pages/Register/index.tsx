import Input from '../../components/baseComponents/Input';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/baseComponents/Button';
import { useChallengeApi } from '../../services/api/useChallengeApi';
import { useState } from 'react';
import { onlyNumbers } from '../../constants/regexPatterns';
import * as S from './styles';

interface IFormData {
  name: string;
  cpf: string;
}

interface dataFormat {
  [key: string]: {
    [key: string]: string;
  };
}

export const formErrors: dataFormat = {
  name: {
    required: 'Informe o nome do associado!',
  },
  cpf: {
    required: 'Informe o CPF!',
    min: 'CPF deve ter no minímo 11 digitos!',
    matches: 'CPF deve possuir apenas números!',
  },
};

const Register: React.FC = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { registerAssociate } = useChallengeApi();

  const associateSchema = object({
    name: string().trim().required(),
    cpf: string().trim().required().matches(onlyNumbers).min(11).max(11),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(associateSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await registerAssociate(data);
      setSuccess(true);
      reset();
    } catch (error) {
      setError(true);
    }
  };

  const clearMessages = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <S.Container>
      <h1>Cadastro Associado</h1>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.Label htmlFor="name">Nome</S.Label>
          <Input
            id="name"
            type="text"
            {...register('name', {
              onChange: () => clearMessages(),
            })}
          />
          {errors.name?.type && (
            <S.ErrorMessage role="alert">
              {formErrors['name'][errors.name.type]}
            </S.ErrorMessage>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.Label htmlFor="cpf">CPF</S.Label>
          <Input
            id="cpf"
            type="text"
            maxLength={11}
            placeholder={'Ex: 71255103027'}
            {...register('cpf', { onChange: () => clearMessages() })}
          />
          {errors.cpf?.type && (
            <S.ErrorMessage role="alert">
              {formErrors['cpf'][errors.cpf?.type]}
            </S.ErrorMessage>
          )}
        </S.InputContainer>
        {success && (
          <S.SuccessOnSubmit role="alert">
            Cadastrado com sucesso!
          </S.SuccessOnSubmit>
        )}
        {error && (
          <S.ErrorMessage role="alert">
            Erro ao cadastrar o associado!
          </S.ErrorMessage>
        )}
        <Button type="submit">Cadastrar</Button>
      </S.Form>
    </S.Container>
  );
};

export default Register;
