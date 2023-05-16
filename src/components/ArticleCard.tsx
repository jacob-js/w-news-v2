import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import AtricleInterface from '../store/interfaces/Article.interface';
import changeRoute from '../helpers/changeRoute';

function ArticleCard({publishedAt, title, content, urlToImage, author, id, url}: AtricleInterface) {
  const navigate = useNavigate();
  urlToImage = urlToImage || '/img-vector.svg';

  return (
    <div 
      className='space-y-5 border p-5 rounded-md hover:shadow-md transition-all duration-500 cursor-pointer' 
      onClick={() =>changeRoute(navigate, `/article?title=${title}&content=${content}&urlToImage=${urlToImage}&author=${author}&url=${url}&id=${id}`)}
    >
        <img src={urlToImage} alt={title} className="rounded-md" />
        <div className="text-gray-500">{moment(publishedAt).format("ll")}</div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-gray-500">{content?.length > 128 ? content.substring(0, 128) + "...": content}</div>
    </div>
  )
}

export default ArticleCard