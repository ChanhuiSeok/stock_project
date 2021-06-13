import {FunctionComponent, MouseEventHandler, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import ThemeButton from '../components/ThemeButton';
import BackButton from '../components/BackButton';
import {BackgroundStyles} from '../common/styles/backgroundStyles';
import {lightTheme, darkTheme} from '../common/styles/themes';
import {useDarkMode} from '../components/hooks/useDarkMode';
import {BlockBox, InlineBlockBox} from '../common/styles/elements';
import {MenuProps} from './props/MenuProps';
import {ThemeProvider} from 'styled-components';
import {isNullishCoalesce} from 'typescript';

const Header = styled(BlockBox)`
  z-index: 1000;
  width: 100%;
  max-width: 1024px;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
  margin-top: 20px;
`;

const TabWrapper = styled.ul`
  display: inline-block;
  font-size: 27px;
  font-weight: 700;
`;

const List = styled.li<MenuProps>`
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
  transition: all ease 0.2s;
  color: ${(props) => (props.selected ? '#c74d90' : '#a5a5a5')};
  border-bottom: ${(props) => (props.selected ? '4px solid #c74d90' : 'none')};

  &:hover {
    color: #c74d90;
    transition: all ease 0.2s;
  }
`;

interface Props {
  main?: boolean;
  detail?: boolean;
}

const StockHeader: FunctionComponent<Props> = (props) => {
  const {main, detail} = props || {};
  const {theme, themeToggler} = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const history = useHistory();
  const onClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const targets = e.currentTarget.getAttribute('name');
    history.push('/' + targets);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <Header>
        <InlineBlockBox>
          <TabWrapper>
            <List name="" onClick={onClick}>
              📈
            </List>
            <List name="main" selected={main} onClick={onClick}>
              주식종합
            </List>
            <List name="detail" selected={detail} onClick={onClick}>
              상세정보
            </List>
          </TabWrapper>
        </InlineBlockBox>
        <ThemeButton theme={theme} toggleTheme={themeToggler} float={'right'} />
        <BackButton float={'right'} />
        <BackgroundStyles />
      </Header>
    </ThemeProvider>
  );
};

export default StockHeader;
