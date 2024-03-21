// Write your code here
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {directionId, displayText} = details

  const onClickDirection = () => {
    changeDirection(directionId)
  }
  return (
    <li>
      <Button type="button" onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  )
}
export default GradientDirectionItem
