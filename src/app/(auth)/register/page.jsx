
import { registerService } from '@/service/auth/login.service'
import { redirect } from 'next/navigation'
import React from 'react'

const RegisterPage = () => {
  // const router = useRouter();
  async function handleRegister(userInfo) {
    'use server'
    const newUserinfo = {
      firstname: userInfo.get('firstname'),
      lastname: userInfo.get('lastname'),
      gender: userInfo.get('gender'),
      profile_url: "String",
      email: userInfo.get('email'),
      password: userInfo.get('password'),
    }
    const res = await registerService(newUserinfo);
    console.log("res", res)
    if(res.status === 200){
      redirect('/login')
    }
  }
  return (
    <div className='flex p-32'>
      <div className='w-screen h-[70vh] '>

        <div>
          <img src="/assets/icons/logo.svg" width={200} height={150} />
        </div>
        <form action={handleRegister} >
          <div className='flex w-full justify-between'>

            <div className='w-[430px] h-[80%] pt-24'>

              <h1 className='text-lg'>First Name :</h1>
              <label className="input input-bordered flex items-center gap-2 my-5">
                <input name='firstname' type="text" className="grow" placeholder="Enter your name.." />
              </label>

              <h1 className='text-lg pt-2'>Email :</h1>
              <label className="input input-bordered flex items-center gap-2 my-5">
                <input name='email' type="email" placeholder="info@gmail.com" className='w-full' />
              </label>

              <h1 className='text-lg pt-2'>Password :</h1>
              <label className="input input-bordered flex items-center gap-2 my-5">
                <input name='password' type="password" placeholder="xxxxxxxx" className='w-full' />
              </label>

              <button type='submit' className="btn border-none mb-3 bg-blue-600 text-white" >Sign Up</button>

            </div>

            <div className='w-[430px] h-[80%] pt-24 pl-10'>

              <h1 className='text-lg'>Last Name:</h1>
              <label className="input input-bordered flex items-center gap-2 my-5">
                <input name='lastname' type="text" className="grow" placeholder="Enter your name.." />
              </label>

              <h1 className='text-lg pt-2'>Gender :</h1>
              <select name='gender' className="select select-accent w-full max-w-xm my-5">
                <option disabled selected>--- choose ---</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>

              <h1 className='text-lg pt-2'>Confirm Password :</h1>
              <label className="input input-bordered flex items-center gap-2 my-5">
                <input name='ConfirmPassword' type="password" placeholder="xxxxxxxx" className='w-full' />
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className='w-full h-[70vh]'>
        <img src="/assets/icons/sign-up.svg" className='w-full h-[700px] mx-10' />
      </div>
    </div>
  )
}

export default RegisterPage