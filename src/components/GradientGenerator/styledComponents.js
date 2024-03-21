import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(${props => props.gradient});
  height: 100vh;
  text-align: center;
  color: #fff;
`
export const Input = styled.input`
  border: 0px;
  padding: 0px;
  margin: 5px;
`
export const UL = styled.ul`
  list-style-type: none;
`
