import {Input, Label, Select} from '../styles/form.styles';

const InputField = ({
    type,
    options,
    label,
    value,
    setValue,
    noBottom,
    required,
}: {
    type?: 'text' | 'email' | 'tel' | 'select' | 'password';
    options?: any;
    label?: string;
    value: string;
    setValue: (arg: string) => void;
    noBottom?: boolean;
    required?: boolean;
}) => {
    return (
        <div className={noBottom ? '' : 'mb-3'}>
            {label && <Label>{label}</Label>}
            {type === 'select' && Array.isArray(options) ? (
                <Select
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required={required || false}>
                    <option value="">Select One</option>
                    {options.map((o: any) => (
                        <option key={o.id} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </Select>
            ) : (
                <Input
                    type={type || 'text'}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required={required || false}
                />
            )}
        </div>
    );
};

export default InputField;
