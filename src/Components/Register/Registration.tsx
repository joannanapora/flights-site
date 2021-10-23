import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Email, User, Password, SpinnerButton, Facebook,Google,Twitter } from '../../assets/svg';
import { Transition } from '@headlessui/react'
import {ButtonClassLight, ButtonClassDark, ButtonSocial} from "../../assets/classNames";
import giveaway from "../../assets/giveaway.png";


interface IRegisteration {
  username: string;
  email: string;
  password: string;
  history:any;
}

const Registration = ({history}:IRegisteration) => {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IRegisteration>();
  const [loading, setLoading] = useState<boolean>(false);
  const [wantLogin, setWantLogin] = useState<boolean>(false);

  const handleRegister: SubmitHandler<IRegisteration> = data =>{ 
    console.log(data);
    history.push('/')
  }

  const handleLoginSocial = (social:string) => {
    console.log(social);
    history.push('/');
  }

  return (
    <div className="max-w-7xl min-h-screen mx-auto flex-col md:flex-row p-4 flex">
      <div className='md:w-2/5 w-full md:rounded-l-lg bg-gray-200 p-4' >
        <div className='w-full min-h-full justify-center items-center flex flex-col'>
        <img id='logo' alt='' src={giveaway} />
          <h1 className='py-12 text-4xl' >Welcome Back!</h1>
          <div className='w-full text-center justify-center flex py-2 text-sm' >To keep connected with us please login with your personal info.</div>
          <Transition
            show={wantLogin}
            enter="transition ease duration-700 transform"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-1000 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg mt-8">
              <Email />
              <input className="bg-gray-100 outline-none text-sm" type="text" placeholder="Email" />
            </div>
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg mt-2">
              <Password />
              <input className="bg-gray-100 outline-none text-sm" type="text" placeholder="Password" />
            </div>
            <div className='w-full flex justify-center py-8' >
              <button onClick={() => setWantLogin(true)} className={ButtonClassDark}>
                LOGIN
              </button>
            </div>
          </Transition>
          {!wantLogin &&
            <div className='py-8' >
              <button onClick={() => setWantLogin(true)} className={ButtonClassDark}>
                SIGN IN
              </button>
            </div>
          }
        </div>
      </div>
      <div className='md:w-3/5 w-full md:rounded-r-lg bg-gray-900 p-4' >
        <div className='w-full min-h-full justify-center items-center flex flex-col'>
          <h1 className='p-4 py-12 text-4xl text-white' >Create Account</h1>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={()=>handleLoginSocial('facebook')} className={`${ButtonSocial} hover:bg-blue-500`}>
                <Facebook/>
              </button>
                 <button onClick={()=>handleLoginSocial('google')} className={`${ButtonSocial} hover:bg-red-500`}>
               <Google/>
              </button>
                 <button onClick={()=>handleLoginSocial('twitter')} className={`${ButtonSocial} hover:bg-blue-400`}>
               <Twitter/>
              </button>
            </div>
          </div>
          <p className='pt-8 text-sm text-white' >or use email address to register</p>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className='py-8 ' >
              <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                <User />
                <input required {...register("username")} className="bg-gray-100 outline-none text-sm" type="text" placeholder="Username" />
              </div>
              <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg mt-2">
                <Email />
                <input required {...register("email")} className="bg-gray-100 outline-none text-sm" type="email" placeholder="Email" />
              </div>
              <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg mt-2">
                <Password />
                <input minLength={8}  type='password' required {...register("password")} className="bg-gray-100 outline-none text-sm" placeholder="Password" />
              
             </div>
              <div className='py-8 w-full flex justify-center' >
                <button type='submit' disabled={loading} className={ButtonClassLight}>
                  {loading && <SpinnerButton />}
                  REGISTER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;