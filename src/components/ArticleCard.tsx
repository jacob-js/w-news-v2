import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import AtricleInterface from '../store/interfaces/Article.interface';
import changeRoute from '../helpers/changeRoute';

function ArticleCard({publishedAt, title, content, urlToImage, id}: AtricleInterface) {
  const navigate = useNavigate();

  return (
    <div className='space-y-5 border p-5 rounded-md hover:shadow-md transition-all duration-500 cursor-pointer' onClick={() =>changeRoute(navigate, `/article/${id}`)}>
        <img src={urlToImage || '/img-vector.svg'} alt={title} className="rounded-md" />
        <div className="text-gray-500">{moment(publishedAt).format("ll")}</div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-gray-500">{content?.length > 128 ? content.substring(0, 128) + "...": content}</div>
    </div>
  )
}

export default ArticleCard