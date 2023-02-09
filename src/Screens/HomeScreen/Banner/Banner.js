import './Banner.css'
import bannerLocalImage from '../../../Resources/ride-share-banner.jpg'

function Banner() {

    return (
        <header className='main-banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(${bannerLocalImage})`,
            backgroundPosition: "center center",
        }}>
            {/* <h1 className='banner-h1'>Exclusive for University of Dayton Students!</h1> */}
        </header>
        // <div className='main-banner'>
        //     <img className='img-banner' src={bannerLocalImage} alt=""/>
        //     <h1 className='banner-h1'>Exclusive for University of Dayton Students!</h1>
        // </div>
    )
}

export default Banner