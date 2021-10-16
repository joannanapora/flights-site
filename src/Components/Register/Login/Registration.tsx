import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  // firstName and lastName will have correct type

  return (
    <div className="max-w-7xl mx-auto bg-yellow-500 rounded-lg ">
       <div className='w-1/3 rounded-l-lg p-4 bg-yellow-200 ' >
             <p>LOGO</p>
             <div className='w-full justify-center items-center flex flex-col'>
                    <h2 className='p-4' >Welcome Back!</h2>
                    <p className='p-2' >To keep connected with us please</p><p>login with your personal info.</p>
                    <button>ffddf</button>
             </div>
       </div>
  </div>
  );
}



{/* <form className='flex flex-col' onSubmit={onSubmit}>
<div className='p-4 text-sm rounded-3xl flex justify-between w-2/3  '> <label className='p-2' >Email</label>
 <input {...register("firstName")} /> </div>
 <div className='p-4 rounded-3xl flex justify-between w-2/3  '> <label className='p-2' >Password</label>
 <input {...register("firstName")} /> </div>
 <div className='p-4 rounded-3xl flex justify-between w-2/3  '> <label className='p-2' >Confirm Password</label>
 <input {...register("firstName")} /> </div>
</form> */}