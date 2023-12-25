'use client';

import { createBorad } from '@/actions/create-borad';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBorad, initialState);
  return (
    <form action={dispatch}>
      <div className='flex flex-col space-y-2'>
        <input
          className='border-black border p-1'
          id='title'
          name='title'
          required
          placeholder='Enter a board title'
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((error) => (
              <p key={error} className='text-rose-500'>
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Button type='submit'>Submit</Button>
    </form>
  );
}
