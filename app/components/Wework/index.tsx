"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Backend Developer (.Net Framework)',
        name: 'Dablu Ali',
        imgSrc: '/images/wework/avtar.jpg',
    },
    {
        profession: 'Full stack developer',
        name: 'Anshuman Mishra',
        imgSrc: '/images/wework/avatar3.jpg',
    },
    {
        profession: 'Wrodpress Developer',
        name: 'Aakash Kumar Maurya',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Operations and Strategy Manager',
        name: 'Anju Shukla',
        imgSrc: '/images/wework/avatar.svg',
    },
    {
        profession: 'Backend Developer',
        name: 'Rishika Verma',
        imgSrc: '/images/wework/avtar4.jpg',
    },
    {
        profession: 'Frontend Developer',
        name: 'Shikha Mishra',
        imgSrc: '/images/wework/avtar5.jpg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-5xl font-bold text-black my-2">Driving innovation across every digital space.</h3>
                        {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Driving innovation across every digital space.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We work in several verticals.Driving innovation across every digital space.</h3> */}
                    </div>

                </div>

    <Slider {...settings}>
  {postData.map((items, i) => (
    <div key={i}>
      <div className="bg-white m-3 py-14 my-10 text-center h-[470px] shadow-xl rounded-3xl">
        <div className="relative w-[150px] h-[150px] rounded-full mx-auto overflow-hidden">
          {/* Profile Image */}
          <Image
            src={items.imgSrc}
            alt="profile"
            width={150}
            height={150}
            className="rounded-full object-cover w-full h-full"
          />

          {/* LinkedIn Logo at Bottom Center */}
         {/* LinkedIn Logo at Bottom Center */}

 

        </div>
         <Image
    src="/images/wework/linkedin.svg"
    alt="linkedin icon"
    width={80}
    height={80}
    className="drop-shadow-lg mx-auto -translate-y-6"
  />

        <h4 className="text-4xl font-bold pt-12">{items.name}</h4>
        <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">{items.profession}</h3>
      </div>
    </div>
  ))}
</Slider>


            </div>

        );
    }
}
