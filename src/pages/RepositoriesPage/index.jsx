import React, {useState} from 'react';

import Profile from './Profile';
import Filter from './Filter';

import { Container, Main, SideBar } from './styles';
import Repositories from './Repositories';
import { getLangsFrom } from '../../services/api';


// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => {

  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    login: "LuisTakeo",
    name: "Takeo",
    avatar_url: "https://avatars.githubusercontent.com/u/110575504?v=4",
    followers: 9,
    following: 24,
    company: null,
    blog: "https://www.linkedin.com/in/luis-henrique-takeo-paim-yuahasi-84986a180/",
    location: "São Paulo - SP - Brazil",
  };

  const repositories = [
    { id: '1',
      name: 'repo1',
      description: 'descrição',
      html_url: 'https://github.com/LuisTakeo',
      language: 'Javascript',
    },
    { id: '2',
      name: 'repo2',
      description: 'descrição',
      html_url: 'https://github.com/LuisTakeo',
      language: 'Java',
    },
    { id: '3',
      name: 'repo3',
      description: 'descrição',
      html_url: 'https://github.com/LuisTakeo',
      language: 'Python',
    },
    { id: '4',
      name: 'repo4',
      description: 'descrição',
      html_url: 'https://github.com/LuisTakeo',
      language: 'Typescript',
    },
    { id: '5',
      name: 'repo5',
      description: 'descrição',
      html_url: 'https://github.com/LuisTakeo',
      language: 'Javascript',
    },
  ];
  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }

  return (
  <Container>
    <SideBar>
      <Profile user={user} />
      <Filter languages={languages} currentLanguage={currentLanguage}
      onClick={onFilterClick} />
    </SideBar>
    <Main>
      <Repositories
        repositories={repositories}
        currentLanguage={currentLanguage}
       />
    </Main>
  </Container>
)};

export default RepositoriesPage;
