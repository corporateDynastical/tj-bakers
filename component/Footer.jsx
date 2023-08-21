"use client"
import Image from 'next/image'
import { LuPhoneCall } from 'react-icons/lu'
import { FaLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import style from '@/style/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.picture}>
                    <Image src={'/logo_white.png'} alt='tj bakers' width={50} height={50} layout='responsive' />
                </div>
                <div className={style.address}>
                    <span
                        className={style.icon}
                    ><FaLocationDot /></span>
                    <p>
                        20 A Shiv Shakti co-op housing society, near Metrocity Health Club, Mayur Colony, Kothrud
                    </p>
                </div>
                <div className={style.address}>
                    <motion.span
                        animate={{ rotate: [10, 0, -10] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={style.icon}
                    >
                        <Link href={'tel:+918767646338'}>
                            <LuPhoneCall />
                        </Link>
                    </motion.span>
                    <p>
                        <Link href={'tel:+918767646338'}>
                            +91 87676 46338
                        </Link>
                    </p>
                </div>
                <div className={style.address}>
                    <p> <span>Delivery & Takeaway from: </span> <br /> 11am-9pm, Pune</p>
                </div>
            </div>
        </div>
    )
}

export default Footer