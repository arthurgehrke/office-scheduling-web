import React from 'react';

import { Container } from './styles';

const DefaultOverlayContent: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultOverlayContent;
