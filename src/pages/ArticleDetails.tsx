import { Button } from '@mui/joy';
import moment from 'moment';
import { useLocation } from 'react-router-dom'
import Wrapper from '../components/Wrapper';

function ArticleDetails() {
    const location = useLocation();
    const d = new URLSearchParams(location.search)
    const data = Object.fromEntries(d.entries());    

  return (
    <Wrapper>
        <div className="mt-14 flex flex-col lg:flex-row gap-10 items-center pb-14 mb-20">
            <img src={data.urlToImage} alt={data.title} className="rounded-md lg:w-2/4" />
            <div className="flex flex-col gap-7">
                <div className="space-y-5">
                    <div className="text-gray-500">
                        <div>{moment(data.publishedAt).format("ll")}</div>
                        <div className="italic text-sm">Author: {data.author}</div>
                    </div>
                    <div className="text-3xl font-bold">{data.title}</div>
                </div>
                <div className="text-lg leading-7">{data.content}</div>
                <Button variant='soft' className='w-max' onClick={() =>window.open(data.url)}>Read More</Button>
            </div>
        </div>
    </Wrapper>
  )
}

export default ArticleDetails