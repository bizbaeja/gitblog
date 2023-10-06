import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src="/58/day1.jpeg" alt="day1" />
      </div>
      <div>
        <Image src="/58/day2.jpeg" alt="day2" />
      </div>
      <div>
        <Image src="/58/day3.jpeg" alt="day3" />
      </div>
      <div>
        <Image src="/58/day4.jpeg" alt="day4" />
      </div>
      <div>
        <Image src="/58/day5.jpeg" alt="day5" />
      </div>
      <div>
        <Image src="/58/day6.jpeg" alt="day6" />
      </div>
      <div>
        <Image src="/58/day7.jpeg" alt="day7" />
      </div>
      <div>
        <Image src="/58/day8.jpeg" alt="day8" />
      </div>
      <div>
        <Image src="/58/day9.jpeg" alt="day9" />
      </div>
      <div>
        <Image src="/58/day10.jpeg" alt="day10" />
      </div>
      <div>
        <Image src="/58/day11.jpeg" alt="day11" />
      </div>
      <div>
        <Image src="/58/day12.jpeg" alt="day12" />
      </div>
      <div>
        <Image src="/58/day13.jpeg" alt="day13" />
      </div>
      <div>
        <Image src="/58/day14.jpeg" alt="day14" />
      </div>
      <div>
        <Image src="/58/day15.jpeg" alt="day15" />
      </div>
      <div>
        <Image src="/58/day16.jpeg" alt="day16" />
      </div>
      <div>
        <Image src="/58/day17.jpeg" alt="day17" />
      </div>
      <div>
        <Image src="/58/day18.jpeg" alt="day18" />
      </div>
      <div>
        <Image src="/58/day19.jpeg" alt="day19" />
      </div>
      <div>
        <Image src="/58/day20.jpeg" alt="day20" />
      </div>
      <div>
        <Image src="/58/day21.jpeg" alt="day21" />
      </div>
      <div>
        <Image src="/58/day22.jpeg" alt="day22" />
      </div>
      <div>
        <Image src="/58/day23.jpeg" alt="day23" />
      </div>
      <div>
        <img src="/58/day24.jpeg" alt="day24" />
      </div>
    </Slider>
  );
};

export default Slide;
