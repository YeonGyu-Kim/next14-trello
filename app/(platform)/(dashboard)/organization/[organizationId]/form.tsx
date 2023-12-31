'use client';

import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board';

import { FormSubmit } from '@/components/form/form-submit';
import FormInput from '@/components/form/form-input';

export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'Success!');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className='flex flex-col space-y-2'>
        <FormInput id='title' label='Board Title' errors={fieldErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
}
