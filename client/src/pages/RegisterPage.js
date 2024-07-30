import React, {useState} from 'react'
import axios from 'axios'
const RegisterPage = () => {
    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: "",
    })
    const hangleOnChange = (e)=>{
        const {name, value} = e.target
        setData((preve)=>{
            return {
                ...preve,
                [name]: value
            }
            
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagetion()
        console.log(JSON.stringify(data))
        const URL = 'https://special-sniffle-5gvw5xp5xvwxf5wx-8080.app.github.dev8080/api/register'
        const response = axios.post(URL,data)
        console.log(JSON(response))

    }
    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
                <h3>회원 가입 페이지</h3>
                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex-col gap-1'>
                        <label htmlFor='name'>성명</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='name'
                            name='name'
                            onChange={hangleOnChange}
                        />
                    </div>
                    <div className='flex-col gap-1'>
                        <label htmlFor='email'>카카오계정</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='email'
                            name='email'
                            onChange={hangleOnChange}

                        />
                    </div>
                    <div className='flex-col gap-1'>
                        <label htmlFor='password'>비밀번호</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='password'
                            name='password'
                            onChange={hangleOnChange}
                        />
                    </div>
                    <div className='flex-col gap-1'>
                        <label htmlFor='profile_pic'>프로필사진</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='profile_pic'
                            name='profile_pic'
                            onChange={hangleOnChange}
                        />
                    </div>
                    <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary roundded mt-2 font-bold text-white leading-relaxed tracking-wide'>
                        가입하기
                    </button>
                </form>
            </div>
        </div>

    )
}

export default RegisterPage