import React, { useState, useEffect } from 'react';

import { Container, List, CardList, Title } from './styles';

import Header from '../../components/Header';
import GroupCard from '../../components/GroupCard';

import api from '../../services/api';

export default function Requests () {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    api.get('requests')
      .then(response => {
        setRequests(response.data)
      })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Title>Requerimentos Pendentes</Title>
        <List>
          <CardList>
            { requests.map(request =>(
              <GroupCard
                noButtons={true}
                key={request.id}
                name={request.name}
                category={request.category}
                description={request.description}
                qttMin={request.qtt_min_students}
                qttMax={request.qtt_max_students}
                qttMeetings={request.qtt_meetings}
              />
            ))}
          </CardList>
        </List>
      </Container>
    </>
  )
}