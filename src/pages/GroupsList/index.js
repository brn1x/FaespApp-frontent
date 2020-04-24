import React, { useEffect, useState } from 'react';

import { Container, List, CardList } from './styles';

import Header from '../../components/Header';
import GroupCard from '../../components/GroupCard';

import api from '../../services/api';

export default function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api.get('groups')
      .then(response => {
        setGroups(response.data)
      })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div>
          <List>
            <CardList>
              { groups.map(group => (
                <GroupCard
                  noButtons={false}
                  key={group.id}
                  name={group.name} 
                  category={group.category}
                  description={group.description}
                  qttMin={group.qtt_min_students}
                  qttMax={group.qtt_max_students}
                  qttMeetings={group.qtt_meetings}
                />
              ))}
            </CardList>
            <button></button>
          </List>
        </div>
      </Container>
    </>
  );
}