import styled from "@emotion/styled"

const Divider = styled.hr`
  margin: ${({ theme }) => theme.spacing[7]} 0;
  background: ${({ theme }) => theme.colors.accent};
  height: 1px;
  border: 0;
`

export default Divider
