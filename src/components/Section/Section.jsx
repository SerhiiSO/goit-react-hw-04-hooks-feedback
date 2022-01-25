import React from 'react';
import { SectionTitle } from './Section.styled';

export default function Section(props) {
  const { title, children } = props;
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}
