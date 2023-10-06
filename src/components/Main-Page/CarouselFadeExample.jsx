import React from 'react';
import M1 from '../../pic/M1.jpg'
import M2 from '../../pic/M2.jpg'
import M4 from '../../pic/M4.jpg'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const CarouselFadeExample= () =>{
  return (
    <MDBCarousel align='center'  fade>
      <MDBCarouselItem
        className=' rounded-pill w-100 img-fluid shadow  '
        itemId={1}
        src={M1}
        alt='drug'

      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='rounded-pill w-100 img-fluid shadow'
        itemId={2}
        src={M2}
        alt='diagnostics'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className=' rounded-pill w-100 img-fluid shadow'
        itemId={3}
        src={M4}
        justify-content='center'
        alt='health watch'
      >
      
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
export default CarouselFadeExample