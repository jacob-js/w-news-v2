import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Wrapper from '../components/Wrapper';
import Title from '../components/ui/Title';
import Skeletons from '../components/Skeletons';
import ArticleCard from '../components/ArticleCard';
import getArticlesByPublisherAction from '../store/actions/getArticlesByPublisher.action';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';

function PublisherArticles() {
    const params = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {data, loading} = useAppSelector(state => state.articles.articlesByPublisher);

    useEffect(() =>{
      dispatch(getArticlesByPublisherAction(params.id as string))
    }, [])

  return (
    <Wrapper>
        <div className="mt-14 pb-14">
            <Title text={location.state?.name} withBackIcon />
            <div className="grid sm:grid-cols-3 gap-10 mt-16">
                {
                    loading ?
                    <Skeletons count={9} />:
                    data.map((article, index) =><ArticleCard {...article} key={index} />)
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default PublisherArticles