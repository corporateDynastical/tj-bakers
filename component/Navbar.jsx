"use client"
import Image from 'next/image'
import { LuPhoneCall } from 'react-icons/lu'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { motion } from 'framer-motion'
import style from '@/style/Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.picture}>
                    <Image src={'/logo.jpeg'} alt='ts bakers logo' fill />
                </div>
                <div className={style.menu}>
                    <motion.div 
                    animate={{rotate: [10,0,-10]}}
                    transition={{duration: 1, repeat: Infinity}}
                    className={style.icon}>
                        <LuPhoneCall />
                    </motion.div>
                    <div className={style.icon}>
                        <AiFillFacebook />
                    </div>
                    <div className={style.icon}>
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar