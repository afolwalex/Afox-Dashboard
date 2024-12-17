import {useState} from 'react';
import InputField from '../../../components/InputField';
import {Button} from '../../../styles/form.styles';

const NewUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    return (
        <div>
            <InputField
                type="text"
                value={name}
                setValue={setName}
                label="Full Name"
            />
            <InputField
                type="email"
                value={email}
                setValue={setEmail}
                label="Email"
            />
            <InputField
                type="tel"
                value={phone}
                setValue={setPhone}
                label="Phone Number"
            />
            <InputField
                type="select"
                value={name}
                setValue={setName}
                label="Gender"
                options={[
                    {id: 1, label: 'Male', value: 'male'},
                    {id: 2, label: 'Female', value: 'female'},
                ]}
            />
            <Button wide="true">
                <span>Create User</span>
            </Button>
        </div>
    );
};

export default NewUser;
