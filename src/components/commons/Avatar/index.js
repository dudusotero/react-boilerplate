import styled from 'styled-components'

const sizes = [
  {
    key: 'small',
    size: 24,
  },
  { key: 'medium', size: 48 },
  { key: 'large', size: 96 },
  {
    key: 'largest',
    size: 128,
  },
]

const Avatar = styled.div`
  width: ${props => `${sizes.find(type => type.key === props.size).size}px`};
  height: ${props => `${sizes.find(type => type.key === props.size).size}px`};
  border-radius: 50%;
  background-color: ${props => props.theme.bgColorAlt};
  box-sizing: border-box;
  position: relative;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`

export default Avatar
