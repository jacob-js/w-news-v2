import AtricleInterface from "../interfaces/Article.interface"
import CommonStateInterface from "../interfaces/CommonState.interface";

interface ArticlesStateInterface  extends CommonStateInterface {
    data:AtricleInterface[];
}

const articles : {
    articles: ArticlesStateInterface, 
    articlesByPublisher: ArticlesStateInterface, 
    filtered: ArticlesStateInterface, 
    filterKeyword: string
} = {
    articles: {data: [], loading: false, error: null},
    articlesByPublisher: {data: [], loading: false, error: null},
    filtered: {data: [], loading: false, error: null},
    filterKeyword: ""
};

export default articles