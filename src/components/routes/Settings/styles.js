import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.theme.fontColor};
`

export const Switch = styled.input.attrs({ type: 'radio' })`
  color: ${props => props.theme.fontColor};
`

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: -4px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: -4px;
  }
  & > * {
    flex: 1;
    margin: 4px;
  }
`

export const Label = styled.label`
  display: flex;
  color: #d8dbdf;
  flex-direction: column;
  &:hover {
    text-shadow: 0 0 50px #000;
  }
  & > span {
    position: relative;
    margin-left: ${props => props.theme.spacing - 2}px;
    margin-bottom: 4px;
    &::before {
      content: '';
      position: absolute;
      width: 2.5px;
      top: 4.2px;
      left: -10px;
      height: 60%;
      border-top-right-radius: 20px;
      background-color: #279ed1;
    }
  }
  & > input {
    background-color: #2e4357;
    color: #7c8a96;
    border: none;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 16px;
    &:hover {
      box-shadow: 0 0 20px 0px #000;
    }
    &::placeholder {
      color: #7c8a96;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #279ed1 inset;
    }
  }
`

export const FileInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
  visibility: hidden;
`

export const Button = styled.button.attrs({ type: 'button' })`
  background-color: #00a859;
  max-width: 120px;
  min-width: 100px;
  border-radius: 8px;
  color: white;
  border: none;
  height: 36px;
  align-self: flex-end;
  font-size: 16px;
  flex: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px 0px #000;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #279ed1 inset;
  }
`

export const AvatarImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ButtonLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00a859;
  max-width: 120px;
  min-width: 100px;
  border-radius: 8px;
  color: white;
  border: none;
  height: 36px;
  align-self: flex-end;
  font-size: 16px;
  flex: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px 0px #000;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #279ed1 inset;
  }
`

export const ProfileImage = styled.label`
  display: flex;
  color: #d8dbdf;
  flex-direction: column;
  &:hover {
    text-shadow: 0 0 50px #000;
    & > div > ${AvatarImage}, & > div > input,
    & > div > ${ButtonLabel} {
      box-shadow: 0 0 20px 0px #000;
    }
  }
  & > span {
    position: relative;
    margin-left: ${props => props.theme.spacing - 2}px;
    margin-bottom: 4px;
    &::before {
      content: '';
      position: absolute;
      width: 2.5px;
      top: 4.2px;
      left: -10px;
      height: 60%;
      border-top-right-radius: 20px;
      background-color: #279ed1;
    }
  }
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: -4px;
    & > * {
      margin: 4px;
      cursor: pointer;
    }
    & > ${AvatarImage} {
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }
    & > input {
      background-color: #2e4357;
      color: #7c8a96;
      border: none;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 16px;
      flex: 1;
      &::placeholder {
        color: #7c8a96;
      }
      &:focus {
        outline: none;
      }
    }

    & > ${ButtonLabel} {
      align-self: auto;
    }
  }
`
