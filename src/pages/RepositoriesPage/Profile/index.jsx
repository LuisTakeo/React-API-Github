import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/110575504?v=4' />
        <Login>LuisTakeo</Login>
        <Name>Luis Takeo</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          9&nbsp;<i>followers</i>&nbsp;&middot;&nbsp;24&nbsp;<i>following</i>
          </Data>
        <Data>
        <MdWork size={20} />
          LuisTakeo
          </Data>
        <Data>
        <MdLocationCity size={20} />
          São Paulo
          </Data>
        <Data>
        <MdLink size={20} />
          <a href="https://github.com/LuisTakeo">github.com/LuisTakeo</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
