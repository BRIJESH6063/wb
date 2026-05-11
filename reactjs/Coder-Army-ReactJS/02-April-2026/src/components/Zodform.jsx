
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod' ;

const formSchema = z.object({
  name: z.string().min(3, 'Minimum Length should be 3').max(20, 'Maximum Length should be 20') ,
  age: z.coerce.number().min(10, 'Minimum Age should be 10').max(80, 'Maximum Age should be 80') ,
  password: z.string().min(5, 'Minimum Length should be 3').max(20, 'Maximum Length should be 20'),
  confirm: z.string(),
  email: z.email('Email is Invalid')
}).refine((data) => data.password === data.confirm, {
  message: 'password does not match',
  path: ['confirm'], // path of error
})


function Zodform() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  }) ;

  function submitForm(data) {
    console.log(data) ;
  }

  console.log('re-render') ;

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="name">
          <input id='first' {...register('name')} />
          {errors.name && <span>{ errors.name.message }</span>}
          <label htmlFor="first">Name</label>
        </div>
        <div className="email">
          <input id='fourth' {...register('email')} />
          {errors.email && <span>{ errors.email.message }</span>}
          <label htmlFor="fourth">Email</label>
        </div>
        <div className="age">
          <input id='second' {...register('age')} />
          {errors.age && <span>{ errors.age.message }</span>}
          <label htmlFor="second">Age</label>
        </div>
        <div className="password">
          <input type='password' id='third' {...register('password')} />
          {errors.password && <span>{ errors.password.message }</span>}
          <label htmlFor="third">Password</label>
        </div>
        <div className="confirm">
          <input type='password' id='fifth' {...register('confirm')} />
          {errors.confirm && <span>{ errors.confirm.message }</span>}
          <label htmlFor="fifth">Confirm Password</label>
        </div>
        <div className="submit">
          <button type='submit'>SUBMIT</button>
        </div>
      </form>

    </>
  )
}


export default Zodform ;