import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

export default function Admin () {
  return (
    <Container>
      <Header />
    </Container>
  )
}