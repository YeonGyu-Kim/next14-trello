'use client';

import { createBorad } from '@/actions/create-borad';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import FormInput from './form-input';
import FormButton from './form-button';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBorad, initialState);
  return (
    <form action={dispatch}>
      <div className='flex flex-col space-y-2'>
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
}
