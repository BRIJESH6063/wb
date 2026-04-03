
import { useForm } from "react-hook-form";


function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm() ;

  function submitForm(data) {
    console.log(data) ;
  }

  console.log('re-render') ;

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="name">
          <input id='first' {...register('name', {required: "Name can't be empty"})} />
          {errors.name && <span>{ errors.name.message }</span>}
          <label htmlFor="first">Name</label>
        </div>
        <div className="age">
          <input id='second' {...register('age', 
          {
            min: {
              value: 10,
              message: 'Minimum age should be 10' 
            },
            max: {
              value: 80,
              message: 'Maximum age should be 80' 
            }
          })} />
          {errors.age && <span>{ errors.age.message }</span>}
          <label htmlFor="second">Age</label>
        </div>
        <div className="password">
          <input type='password' id='third' {...register('password', 
          {
            minLength: {
              value: 5,
              message: 'Minimum Length of password should be 5' 
            },
            maxLength: {
              value: 20,
              message: 'Maximum Length of password should be 20' 
            }
          })} />
          {errors.password && <span>{ errors.password.message }</span>}
          <label htmlFor="third">Password</label>
        </div>
        <div className="submit">
          <button type='submit'>SUBMIT</button>
        </div>
      </form>

    </>
  )
}


export default Form ;