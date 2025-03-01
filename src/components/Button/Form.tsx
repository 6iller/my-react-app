import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button.tsx";
import './Form.css';

interface InputValues {
    name: string;
    email: string;
    password: string;
}

export default function FormPractice() {
    const { register, handleSubmit, formState: { errors } } = useForm<InputValues>(); // useForm с InputValues

    const onSubmit: SubmitHandler<InputValues> = (data) => {
        console.log("Форма отправлена!", data); 
    };

    return (
        <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Введите имя</label>
                <input className="input" type="text" {...register("name", { required: true })} />
                {errors.name && <p className="error">Поле Имя обязательное</p>}
            </div>
            <div>
                <label>Введите email</label>
                <input className="input" type="email" {...register("email", { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ })} />
                {errors.email && <p className="error">Поле Email обязательне и должно быть email адресом</p>}
            </div>
            <div>
                <label>Введите пароль</label>
                <input className="input" type="password" {...register("password", { required: true, minLength: 4 })} />
                {errors.password && <p className="error">Поле Пароль обязательное и должно содержать не менее 4 символов</p>}
            </div>
            <Button type="submit">Отправить</Button>
        </form>
    );
}
