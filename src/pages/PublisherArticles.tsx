import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Wrapper from '../components/Wrapper';
import Title from '../components/ui/Title';
import Skeletons from '../components/Skeletons';
import ArticleCard from '../components/ArticleCard';
import getArticlesByPublisherAction from '../store/actions/getArticlesByPublisher.action';
import useAppSelector from '../hooks/useAppSelector';
import useAppDispatch from '../hooks/useAppDispatch';
import Empty from '../components/ui/Empty';

function PublisherArticles() {
    const params = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {data, loading} = useAppSelector(state => state.articles.articlesByPublisher);
    const nameParam = new URLSearchParams(location.search).get('name');

    useEffect(() =>{
      dispatch(getArticlesByPublisherAction(params.id as string))
    }, [params]);

    useEffect(() =>{
      (() =>{
        if(!nameParam)  navigate('/', {replace: true})
      })()
    }, [nameParam])
    

  return (
    <Wrapper>
        <div className="mt-14 pb-14 mb-20">
            <Title text={nameParam as string} withBackIcon />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {
                    loading ?
                    <Skeletons count={9} />:
                    data.map((article, index) =><ArticleCard {...article} key={index} />)
                }
            </div>
            {
              !data.length && !loading && <Empty />
            }
        </div>
    </Wrapper>
  )
}

export default PublisherArticles