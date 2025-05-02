import { Link } from 'react-router-dom';
import logo from '../../assets/WebCarros.svg';
import { Container } from '../../components/container';
import { Input } from '../../components/imput';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .nonempty('Campo obrigatório'),
  email: z
    .string()
    .email('Insira um email válido')
    .nonempty('Campo obrigatório'),
  password: z
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .nonempty('Campo obrigatório'),
});

export type FormData = z.infer<typeof schema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  function onsubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm">
          <img src={logo} alt="BlueStash" className="w-full" />
        </Link>

        <form
          className="bg-white max-w-xl rounded-lg w-full p-4 "
          onSubmit={handleSubmit(onsubmit)}
        >
          <div className="mb-3">
            <Input
              type="text"
              placeholder="Nome completo"
              name="name"
              error={errors.name?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            type="submit"
            className=" w-full rounded-md text-white bg-zinc-900 h-10 font-medium"
          >
            Acessar
          </button>
        </form>

        <Link to="/login" className="text-zinc-500 mt-4">
          Já tem uma conta? Faça login
        </Link>
      </div>
    </Container>
  );
}
