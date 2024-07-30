import React from 'react'

const Checkpasswordpage = () => {
    return (
        <div className='mt-5'>
        <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
            <h3>비밀번호를 입력하세요</h3>
            <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
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
              
                
                <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary roundded mt-2 font-bold text-white leading-relaxed tracking-wide'>
                    가입하기
                </button>
            </form>
        </div>
    </div>

)
}
export default Checkpasswordpage