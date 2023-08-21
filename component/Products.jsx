import Image from 'next/image'
import localFont from 'next/font/local'
const alga = localFont({
    src: '../font/Alga-Bold.ttf'
})
import style from '@/style/Products.module.scss'

const Products = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <h1 className={alga.className}>Our Products</h1>
                <div className={style.products}>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/brownies.jpg'} alt='TJ Bakers Products' width={1000} height={1000} layout='responsive' />
                        </div>
                        <p>Brownies</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/browny_cake.jpg'} alt='TJ Bakers Products' width={1000} height={1000} layout='responsive' />
                        </div>
                        <p>Brownie Cake</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/carrot_cake.jpg'} alt='TJ Bakers Products' width={1000} height={1000} layout='responsive' />
                        </div>
                        <p>Carrot Cake</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/cookies.jpg'} alt='TJ Bakers Products' width={1000} height={1000} layout='responsive' />
                        </div>
                        <p>Nankhatai</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/cookies2.jpg'} alt='TJ Bakers Products' width={1000} height={1000} layout='responsive' />
                        </div>
                        <p>Cookies</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/cakenew.jpg'} alt='TJ Bakers Products' width={1000} height={1000} layout='responsive' />
                        </div>
                        <p>Cake</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products