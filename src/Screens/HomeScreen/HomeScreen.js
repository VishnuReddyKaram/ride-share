import './HomeScreen.css'
import NavBar from './NavBar/NavBar'
import Banner from './Banner/Banner'
import RideSearchBar from './RideSearchBar/RideSearchBar'
import InfoBoxOne from './InfoBoxOne/InfoBoxOne'
import CreateRideBanner from './CreateRideBanner/CreateRideBanner'
import FAQ from './FAQ/FAQ'
import Footer from './Footer/Footer'

function HomeScreen() {

    return (
        <div>
            <NavBar />
            <Banner />
            <RideSearchBar />
            <InfoBoxOne />
            <CreateRideBanner />
            <FAQ />
            <Footer />
        </div>
    )
}

export default HomeScreen