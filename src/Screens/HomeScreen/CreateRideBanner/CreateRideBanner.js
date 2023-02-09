import './CreateRideBanner.css'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import createRideBannerImg from '../../../Resources/driver-create-ride.svg'

function CreateRideBanner() {
  return (
    <div className='createridebanner-container'>
        <div className='div-info-left'>
            <h2>Why go alone<br></br>When you can carpool?</h2>
            <h3>Publish a ride now</h3>
            <a href="create-ride">
              <Button className="light" variant="outline-light me-3" size="md">Create Ride</Button>
            </a>
        </div>
        <div className='div-banner-right'>
            <Image
                src={createRideBannerImg}
                className="d-inline-block align-top ml-auto create-ride-banner-img"
                alt="Profile Image"
                roundedCircle
            />
        </div>
    </div>
  )
}

export default CreateRideBanner