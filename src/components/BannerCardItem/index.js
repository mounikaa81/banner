// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerInfo} = props
  const {headerText, description, className} = bannerInfo
  return (
    <li className={className}>
      <div>
        <h1 className="headding">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="card-btn">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
