import React from 'react'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            Home
        {/* 아래는 잘못된 메세지*/}
            <section>
                <Outlet/>
            </section>
        </div>
    )
}

export default Home