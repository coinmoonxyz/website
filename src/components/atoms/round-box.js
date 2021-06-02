import styled from "@emotion/styled"

/**
 * generic box container.
 * used in 
 * - post list item
 * - collection list item
 * - etc.
 */

const RoundBox = styled.div`
  margin-bottom: ${props => props.theme.spacing[5]};
  border-radius: ${({ theme }) => theme.spacing[3]};

  background: ${({bg})=> bg};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s, background 0.3s;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: ${({ bgHover }) => bgHover};
  }

  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  header {
    /* margin-bottom: ${props => props.theme.spacing[4]}; */
    padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[7]};
  }

  h2 {
    margin-bottom: ${props => props.theme.spacing[1]};
    margin-top: ${props => props.theme.spacing[0]};
    font-size: ${props => props.theme.fontSizes[3]};
    font-weight: ${props => props.theme.fontWeights.regular};
    color: ${props => props.theme.colors.black};
  }

  p {
    margin: ${props => props.theme.spacing[0]};
  }
`

export default RoundBox