import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from 'swiper';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import useAppSelector from '../hooks/useAppSelector.js';
import useAppDispatch from '../hooks/useAppDispatch.js';
import getPublishersAction from '../store/actions/getPublishers.action.js';
import Title from './ui/Title';
import changeRoute from '../helpers/changeRoute.js';
import { useNavigate } from 'react-router-dom';

function Publishers() {
    const {data} = useAppSelector(state => state.publishers.publishers);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const swiper = useRef<SwiperRef>(null);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const [isNextDisabled, setIsNextDisabled] = useState(true);

    useEffect(() =>{
        dispatch(getPublishersAction())
    }, []);

    useEffect(() =>{
        (() =>{
            if(swiper.current){
                setIsPrevDisabled(swiper.current?.swiper.isBeginning);
                setIsNextDisabled(data.length < 6)
            }
        })()
    }, [swiper.current, data]);

    const handleSlideChange = (isBeginning: boolean, isEnd: boolean) =>{
        setIsPrevDisabled(isBeginning);
        setIsNextDisabled(isEnd)
    };

    return (
        <div className='mt-14 mb-28 overflow-hidden'>
            <div className="flex justify-between items-center mb-10">
                <Title text="Publishers" />
                <div className="flex gap-5">
                    <button disabled={isPrevDisabled} className={`cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 text-black`} onClick={() =>swiper.current?.swiper.slidePrev()}>
                        <AiOutlineLeft />
                    </button>
                    <button disabled={isNextDisabled} className={`cursor-pointer disabled:cursor-not-allowed disabled:text-gray-400 text-black`} onClick={() =>swiper.current?.swiper.slideNext()}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
            <Swiper
                slidesPerView={2}
                breakpoints={{
                    600: {slidesPerView: 4},
                    1024: {slidesPerView: 6},
                }}
                grid={{
                  rows: 1,
                }}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Navigation]}
                ref={swiper}
                onReachBeginning={() =>{}}
                onReachEnd={() =>{}}
                className="grow"
                onSlideChange={slide =>handleSlideChange(slide.isBeginning, slide.isEnd)}
            >
                {data.slice(10).map(({id, name}) =><SwiperSlide key={id}>
                    <div className="py-3 border rounded-md group transition-all h-full flex flex-col items-center justify-center cursor-pointer" onClick={() =>changeRoute(navigate, `/publisher/${id}`, {state: {name}})}>{name}</div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Publishers