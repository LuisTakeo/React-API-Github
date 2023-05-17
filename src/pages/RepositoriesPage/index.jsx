import React from 'react';

import Profile from './Profile';
import Filter from './Filter';

import { Container, Main, SideBar } from './styles';


// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => (
  <Container>
    <SideBar>
      <Profile />
      <Filter />
    </SideBar>
    <Main>
      Main
    </Main>
  </Container>
);

export default RepositoriesPage;
