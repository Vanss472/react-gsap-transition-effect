import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
`;

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children, className }: ContainerProps) => (
  <StyledContainer className={className}>
    {children}
  </StyledContainer>
);

export default Container;
