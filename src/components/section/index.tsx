import React from 'react';

import { Props } from './types';
import { Container } from './styles';

const Section: React.FC<Props> = ({
  sectionName,
  overlayNode,
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default Section;
