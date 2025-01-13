import { useDebounce } from '@/hook/use-debounce';
import { Input } from '../input';

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const IconInput = ({ onChange, value, placeholder }: IconInputProps) => {
  const debounceValue = useDebounce(value);
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5 ">
        {!!debounceValue && (
          <img
            src={`https://cdn.simpleicons.org/${debounceValue}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
