import { Input } from '@/components/ui/input';
import { useFormStatus } from 'react-dom';

type FormInputProps = {
  errors?: {
    title?: string[];
  };
};

export default function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        className='border-black border p-1'
        id='title'
        name='title'
        required
        placeholder='Enter a board title'
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
