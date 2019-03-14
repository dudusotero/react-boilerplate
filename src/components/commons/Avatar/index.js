import styled from 'styled-components'
import { oneOf, bool, string } from 'prop-types'

import { avatarDefault } from '../../../assets'

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
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;

  &::before {
    content: '';
    width: ${props => `${sizes.find(type => type.key === props.size).size / 4}px`};
    height: ${props => `${sizes.find(type => type.key === props.size).size / 4}px`};
    background-color: ${props => (props.online ? '#2aad3e' : '#666')};
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    display: ${props => (props.showStatus ? 'block' : 'none')};
  }
`

Avatar.propTypes = {
  size: oneOf(['small', 'medium', 'large', 'largest']),
  showStatus: bool,
  src: string,
  online: bool,
}

Avatar.defaultProps = {
  size: 'medium',
  showStatus: false,
  src: avatarDefault,
  online: false,
}

export default Avatar
