import React from 'react'
import "./Testimonial.css"
import { Swiper,SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { profile3, profile4, profile5, profile6 } from '../../images'
const data = [
  {
    avatar:profile3,
    name: 'Samuel Eze',
    review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet velit, quam consequatur id facere error ipsa recusandae reprehenderit! Consectetur, totam? Corrupti nihil error molestias vel voluptatum dicta culpa amet in dolorem deserunt, architecto facilis perferendis, veniam laudantium maxime accusantium eveniet.`
  },
  {
    avatar:profile4,
    name: 'Emmanuel Josep',
    review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet velit, quam consequatur id facere error ipsa recusandae reprehenderit! Consectetur, totam? Corrupti nihil error molestias vel voluptatum dicta culpa amet in dolorem deserunt, architecto facilis perferendis, veniam laudantium maxime accusantium eveniet.`
  },
  {
    avatar:profile5,
    name: 'Gloria Chiwendu',
    review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet velit, quam consequatur id facere error ipsa recusandae reprehenderit! Consectetur, totam? Corrupti nihil error molestias vel voluptatum dicta culpa amet in dolorem deserunt, architecto facilis perferendis, veniam laudantium maxime accusantium eveniet.`
  },
  {
    avatar:profile6,
    name: 'Preciou Stone',
    review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet velit, quam consequatur id facere error ipsa recusandae reprehenderit! Consectetur, totam? Corrupti nihil error molestias vel voluptatum dicta culpa amet in dolorem deserunt, architecto facilis perferendis, veniam laudantium maxime accusantium eveniet.`
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">Testimonial</h2>
          <p className="text__muted description">
          Discover what clients are saying about their experiences working with me as their trusted web developer. From startups to established businesses, my dedication to crafting exceptional online experiences shines through in their words.
          </p>
        </div>
        <Swiper 
          className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          pagination={{clickable:true}}
          breackpoints={{
            700:{
              slidePerView:2,
            }
          }}
        >
          {
            data.map(({avatar,name,review}, index) => (
              <SwiperSlide className='testimonial' key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={review} />
                </div>
                <h3 className="client__name">{name}</h3>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>
    </section>
  )
}

export default Testimonial