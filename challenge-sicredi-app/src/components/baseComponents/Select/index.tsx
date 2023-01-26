import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  id: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}

const Select: React.FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ options, id, width, height, disabled = false, ...props }, ref) => {
  return (
    <S.Select
      width={width}
      height={height}
      disabled={disabled}
      defaultValue=""
      id={id}
      ref={ref}
      {...props}
    >
      <option value="" disabled>
        Selecione...
      </option>
      {options.map(({ label, value }, index) => (
        <option key={`${id}-option-${index}`} value={value}>
          {label}
        </option>
      ))}
    </S.Select>
  );
});

export default Select;
