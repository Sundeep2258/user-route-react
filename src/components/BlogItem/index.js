import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {publishedDate, description, title} = blogDetails

  return (
    <div>
      <li className="container">
        <li className="item-card">
          <h1 className="title">{title}</h1>
          <p className="date">{publishedDate}</p>
        </li>
        <p className="desc">{description}</p>
      </li>
      <hr className="hr" />
    </div>
  )
}

export default BlogItem
