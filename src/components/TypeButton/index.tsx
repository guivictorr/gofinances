import React from 'react';
import { HighlightCardProps, HighlightIcon } from '../HighlightCard';
import { Icon } from '../HighlightCard/styles';
import { Text } from '../Text';
import { Container } from './styles';

type TypeButtonProps = {
  type: HighlightCardProps['type'];
};

export function TypeButton({ type }: TypeButtonProps) {
  return (
    <Container>
      <Icon name={HighlightIcon[type]} size={26} />
      <Text size="sm">Income</Text>
    </Container>
  );
}
