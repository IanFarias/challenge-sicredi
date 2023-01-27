import Input from '../../components/baseComponents/Input';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../components/baseComponents/Button';
import { useChallengeApi } from '../../services/api/useChallengeApi';
import { useState } from 'react';
import { ONLY_NUMBERS } from '../../constants/regexPatterns';
import InputError from '../../components/baseComponents/InputError';
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

const formErrors: dataFormat = {
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
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const { registerAssociate } = useChallengeApi();

  const associateSchema = object({
    name: string().trim().required(),
    cpf: string().trim().required().matches(ONLY_NUMBERS).min(11).max(11),
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
    } catch (error: any) {
      if (error.response.data.message === 'Invalid CPF') {
        setErrorMessage('CPF inválido!');
      } else {
        setErrorMessage('');
      }
      setError(true);
    }
  };

  const clearMessages = () => {
    setSuccess(false);
    setError(false);
    setErrorMessage('');
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
            <InputError>{formErrors['name'][errors.name.type]}</InputError>
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
            <InputError>{formErrors['cpf'][errors.cpf?.type]}</InputError>
          )}
        </S.InputContainer>
        {success && (
          <S.SuccessOnSubmit role="alert">
            Cadastrado com sucesso!
          </S.SuccessOnSubmit>
        )}
        {error && (
          <InputError>
            {!!errorMessage
              ? errorMessage
              : 'Erro ao cadastrar o associado! Verifique se o CPF já foi cadastrado!'}
          </InputError>
        )}
        <Button type="submit" variant="primary">
          Cadastrar
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default Register;
