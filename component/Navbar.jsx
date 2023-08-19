"use client"
import Image from 'next/image'
import { LuPhoneCall } from 'react-icons/lu'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { motion } from 'framer-motion'
import style from '@/style/Navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.picture}>
                    <Image src={'/logo_white.png'} alt='ts bakers logo' width={50} height={50} layout='responsive' />
                </div>
                <div className={style.menu}>
                    <motion.div
                        animate={{ rotate: [10, 0, -10] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={style.icon}>
                        <Link href={'tel:+918767646338'}>
                            <LuPhoneCall />
                        </Link>
                    </motion.div>
                    <div className={style.icon}>
                        <Link href={'https://www.instagram.com/tj_bake.s/'} target='_blank'>
                            <AiFillInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar