import { cn } from '@/lib/utils';
import { ForwardedRef, forwardRef } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useFormStatus } from 'react-dom';
import FormErrors from './form-errors';

type FormInputProps = {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
};

export default function FormInput(
  {
    id,
    label,
    type,
    placeholder,
    required,
    disabled,
    errors,
    className,
    defaultValue = '',
    onBlur,
  }: FormInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { pending } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label
            htmlFor={id}
            className='text-xs font-semibold text-neutral-700'
          >
            {label}
          </Label>
        ) : null}
        <Input
          onBlur={onBlur}
          defaultValue={defaultValue}
          //ref={ref}
          required={required}
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          className={cn('text-sm px-2 py-1 h-7', className)}
          aria-describedby={`${id}-error`}
        />
      </div>
      <FormErrors id={id} errors={errors} />
    </div>
  );
}

FormInput.displayName = 'FormInput';
