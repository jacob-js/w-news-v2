import { useEffect } from 'react';
import Wrapper from '../components/Wrapper'
import Title from '../components/ui/Title'
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import getArticles from '../store/actions/getArticles.action';
import ArticleCard from '../components/ArticleCard';
import Skeletons from '../components/Skeletons';

function Home() {
    const dispatch = useAppDispatch();
    const {data, loading} = useAppSelector(state => state.articles.articles);
    const {data: filtered} = useAppSelector(state => state.articles.filtered);
    const filterKeyword = useAppSelector(state => state.articles.filterKeyword);

    useEffect(() =>{
        dispatch(getArticles({pageSize: 12}))
    }, []);

  return (
    <Wrapper>
        <div className='mt-14'>
            <Title text={filterKeyword ? `Result for "${filterKeyword}" in articles`: "The world's latest news"} onBack={() =>{}} withBackIcon={Boolean(filterKeyword)} />
            <div className="grid sm:grid-cols-3 gap-10 mt-16">
                {
                    loading ?
                    <Skeletons count={9} />:
                    (filterKeyword ? filtered: data).map((article, index) =><ArticleCard {...article} key={index} />)
                }
            </div>
            {
                !loading && !(filterKeyword ? filtered.length: data.length)&&
                <div className='flex justify-center p-10 flex-col items-center gap-5'>
                    <img src="/empty.svg" alt="No data!" className="w-32 object-center" />
                    <div className="text-gray-600 ml-3">No Data Found!</div>
                </div>
            }
        </div>
    </Wrapper>
  )
}

export default Home