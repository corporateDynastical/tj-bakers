"use client"
import Image from 'next/image'
import { LuPhoneCall } from 'react-icons/lu'
import { FaLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import style from '@/style/Footer.module.scss'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.picture}>
                    <Image src={'/logo_white.png'} alt='tj bakers' fill />
                </div>
                <div className={style.address}>
                    <span><FaLocationDot /></span>
                    <p>
                        20 A Shiv Shakti co-op housing society, near Metrocity Health Club, Mayur Colony, Kothrud
                    </p>
                </div>
                <div className={style.address}>
                    <motion.span
                        animate={{ rotate: [10, 0, -10] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    ><LuPhoneCall /></motion.span>
                    <p>
                        +91 87676 46338
                    </p>
                    <p>Delivery & Takeaway from 11am-9pm, Pune</p>
                </div>
            </div>
        </div>
    )
}

export default Footer