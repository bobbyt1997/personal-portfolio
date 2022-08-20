import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://linkedin.com/in/kenellorando/',
      name: 'Kenneth Ellorando',
      role: 'Cloud Engineer @ NextCapital',
      test: "I have known Bobby for the past five years. Since the day we met, Bobby has remained laser-focused on his ultimate career goal of becoming a Software Developer. He shared with me his growing fascination with code since he was first exposed to it in high school. In college, Bobby was one of the very few people I considered a reliable study partner. Bobby's strength is his self-drive; he always did as much as he could on his own before turning to me or a professor for help. When doing group projects, I enjoyed having Bobby on my team, because he would always go beyond doing his share of the work. One night, Bobby and I spent twelve hours studying for a final and finishing a final project. He understands that desirable results come from hard work. Today, Bobby still carries the same work ethic. Bobby expresses unhappiness to me when he is not achieving goals or doing productive activities. This recently culminated with him enrolling into a full-stack development boot camp, to be pushed into a challenging position where he can learn new engineering skills and pivot his life into a better position. He is driven, amicable, and dependable. I have zero doubt Bobby would be a great developer wherever he goes.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/jake-armijo/',
      name: 'Jake Armijo',
      role: 'Software Developer @ Charter Solutions',
      test: 'Bobby is an easy-going people person. He was always approachable and managed his time effectively. He excelled in back-end development. His knowledge of Node and Express allowed our project to take off fast. He is a great manger and was able to delegate tasks to everyone. He also handled many front end tasks including developing several React components. Bobby has a thorough understanding of Git and how to apply it to your project. He is a detailed oriented person and I would highly recommend him to anyone seeking a team member.',
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
