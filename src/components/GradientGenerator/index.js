import {Component} from 'react'
import {Container, UL, Input} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    directionColor1: '#8ae323',
    directionColor2: '#014f7b',
    gradient: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
    isActive: false,
  }

  changeDirection = id => {
    const data = gradientDirectionsList.filter(each => each.directionId === id)
    console.log(data)
    this.setState({
      direction: data[0].value,
      isActive: true,
    })
  }

  onChangeColor1 = event => {
    this.setState({
      directionColor1: event.target.value,
    })
  }

  onChangeColor2 = event => {
    this.setState({
      directionColor2: event.target.value,
    })
  }

  onGenerate = () => {
    const {direction, directionColor1, directionColor2} = this.state

    this.setState({
      gradient: `to ${direction},${directionColor1},${directionColor2}`,
    })
  }

  render() {
    const {gradient, isActive, directionColor1, directionColor2} = this.state
    return (
      <Container data-testid="gradientGenerator" gradient={gradient}>
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <UL>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              details={each}
              key={each.directionId}
              changeDirection={this.changeDirection}
              isActive={isActive}
            />
          ))}
        </UL>
        <p>Pick the colors</p>
        <p>{directionColor1}</p>
        <p>{directionColor2}</p>
        <Input
          type="color"
          value={directionColor1}
          onChange={this.onChangeColor1}
        />
        <Input
          type="color"
          value={directionColor2}
          onChange={this.onChangeColor2}
        />
        <button type="button" onClick={this.onGenerate}>
          Generate
        </button>
      </Container>
    )
  }
}
export default GradientGenerator
