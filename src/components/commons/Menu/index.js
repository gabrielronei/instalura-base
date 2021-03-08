import React, { useState } from 'react';
import { Logo } from '../../../theme/Logo';
import Text from '../../foundation/Text';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const [isModalOpen, setModalState] = useState(false);
  const links = [
    {
      texto: 'Home',
      url: '/',
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/',
    },
    {
      texto: 'Sobre',
      url: '/',
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.texto}
              </Text>
            </li>
          );
        })

        }
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">Entrar</Button>
        <Button variant="primary.main">
          Cadastrar
          </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}