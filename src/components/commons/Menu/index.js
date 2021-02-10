import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
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
        <Logo/>
      </MenuWrapper.LeftSide>
      
      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>
                {link.texto}
              </a>
            </li>
          );
        })

        }
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}