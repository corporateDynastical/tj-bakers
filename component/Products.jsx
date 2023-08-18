import Image from 'next/image'
import style from '@/style/Products.module.scss'

const Products = () => {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <h1>Our Products</h1>
                <div className={style.products}>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/brownies.jpg'} alt='' fill />
                        </div>
                        <p>Brownies</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/browny_cake.jpg'} alt='' fill />
                        </div>
                        <p>Brownie Cake</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/carrot_cake.jpg'} alt='' fill />
                        </div>
                        <p>Carrot Cake</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/cookies.jpg'} alt='' fill />
                        </div>
                        <p>Nankhatai</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/cookies2.jpg'} alt='' fill />
                        </div>
                        <p>Cookies</p>
                    </div>
                    <div className={style.product}>
                        <div className={style.picture}>
                            <Image src={'/cakenew.jpg'} alt='' fill />
                        </div>
                        <p>Cake</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products