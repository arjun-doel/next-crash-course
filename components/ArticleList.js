import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(ite => <ArticleItem key={ite.id} article={ite} />)}
    </div>
  )

}

export default ArticleList
