"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import './Slideshow.css';

const items = [
  {
    src: '/slidebar/1.jpg',
    altText: 'SUBARU CROSSTREK',
    caption: 'SUBARU CROSSTREK',
    key: 1,
  },
  {
    src: '/slidebar/2.jpg',
    altText: 'SUBARU FORESTER',
    caption: 'SUBARU FORESTER',
    key: 2,
  },
  {
    src: '/slidebar/3.jpg',
    altText: 'SUBARU BRZ',
    caption: 'SUBARU BRZ',
    key: 3,
  },
  {
    src: '/slidebar/4.jpg',
    altText: 'SUBARU WRX',
    caption: 'SUBARU WRX',
    key: 4,
  },
  {
    src: '/slidebar/5.jpg',
    altText: 'WRX WAGON',
    caption: 'WRX WAGON',
    key: 5,
  },
];

const Slideshow = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Link href={`/model/${item.altText}`}>
            <img src={item.src} alt={item.altText} />
        </Link>
        
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slideshow;