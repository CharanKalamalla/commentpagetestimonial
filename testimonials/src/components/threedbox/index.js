import React from 'react';



import { MainContainers } from "./styledComponents"

import {Button} from "./styledComponents"

import {Name} from "./styledComponents"

import {Role} from "./styledComponents"

import {Discription} from "./styledComponents"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import "./index.css"


// import required modules
import { EffectCreative } from 'swiper/modules';

const slider = () => {
    return (
        <>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlide>
        <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>
                <Button>
                   View All </Button>      
            </MainContainers>
        </SwiperSlide>
        <SwiperSlide>
        <MainContainers className='comment-box'>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>   
                <Button>
                   View All </Button>
                  
            </MainContainers>
        </SwiperSlide>
        <SwiperSlide>
        <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>
                <Button>
                   View All </Button>        
            </MainContainers>
        </SwiperSlide>
        <SwiperSlide>
        <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>
                <Button>
                   View All </Button>        
            </MainContainers>
        </SwiperSlide>
      </Swiper>
        </>
    )

}

export default slider