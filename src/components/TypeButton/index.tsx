import React from 'react';
import { HighlightCardProps, HighlightIcon } from '../HighlightCard';
import { Icon } from '../HighlightCard/styles';
import { Text } from '../Text';
import { Container } from './styles';

export type TypeButtonProps = {
  type: HighlightCardProps['type'];
  title: 'Income' | 'Outcome';
  isActive?: boolean;
};

export function TypeButton({ type, title, isActive = false }: TypeButtonProps) {
  return (
    <Container isActive={isActive} type={type}>
      <Icon name={HighlightIcon[type]} size={26} />
      <Text size="sm">{title}</Text>
    </Container>
  );
}
