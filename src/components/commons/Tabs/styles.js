import styled from 'styled-components'

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const TabsHeadings = styled.div`
  display: flex;
  user-select: none;
  overflow: hidden;
`

export const TabHeading = styled.div`
  text-transform: capitalize;
  background-color: ${props => (props.activeTab ? '#071829' : '#0f2437')};
  color: ${props => (props.activeTab ? '#fff' : '#4d5b69')};
  min-width: 150px;
  text-align: center;
  border-radius: 30px 30px 0 0;
  padding: 0.6em 0;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
  z-index: 1;
  &:first-child {
    border-radius: 0 30px 0 0;
  }
`

export const TabContent = styled.div`
  min-height: 60px;
  color: #fff;
  background-color: #0c2033;
  border-top: 50px solid #071829;
  border-bottom: 25px solid #071829;
  box-shadow: 0 0 60px 0px #000000;
  padding: 2em;
`
