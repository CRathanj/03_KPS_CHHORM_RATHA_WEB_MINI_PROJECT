'use client'
import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react";
import { redirect } from 'next/navigation';

const LoginPage = async () => {
    async function handleLogin(userInfo) {
        const newUserinfo = {
            email: userInfo.get('email'),
            password: userInfo.get('password')
        }
        const res = await signIn("credentials", {
            redirect: false,
            ...newUserinfo,
          });
          if(res?.status === 200) {
            redirect('/todo-list')
          }
    }
    return (
        <div className='flex p-32'>
            <div className='w-screen h-[70vh] '>
                <div>
                    <img src="/assets/icons/logo.svg" width={200} height={150} />
                </div>
                <form action={handleLogin}>
                    <div className='h-[80%] px-48 pt-24'>
                        <h1 className='text-2xl'>Login</h1>
                        <label className="input input-bordered flex items-center gap-2 my-5 w-full">
                            <input type="text" placeholder="Email" name='email' className='w-full'/>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-5">
                            <input type="password" placeholder="Password" name='password' className='w-full'/>
                        </label>

                        <button type='submit' className="w-full btn border-none mb-3 bg-blue-600 hover:bg-blue-500 text-white">Login</button>

                        <div className='flex'>
                            <p className='text-sm text-slate-500'>Didn't have account yet?</p>
                            <Link className='text-blue-600 mx-2 text-sm underline' href='/register' >Register</Link>
                        </div>

                        <div className="my-5 border-b-2 text-center text-slate-300">
                            <div className="px-5 inline-block text-sm bg-white translate-y-3">
                                <p>Continue with</p>
                            </div>
                        </div>
                        

                        <button type='submit' className="w-full btn border-none mb-3 hover:bg-red-200 my-5">
                            <img className='w-5 h-5' src="https://freesvg.org/img/1534129544.png" alt="" />
                            Google
                        </button>
                    </div>
                </form>
                <div>
                    <p>&copy; 2024 My office.All Right Reserved.</p>
                </div>
            </div>
            <div className='w-full h-[70vh]'>
                <img src="/assets/icons/login.svg" className='w-full h-[750px] -mx-20' />
            </div>
        </div>
    )
}

export default LoginPage

