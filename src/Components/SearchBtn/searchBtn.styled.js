import styled from 'styled-components';
import closeBtn from '../../Assets/closed.svg';
export const SearchBarContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: ${props => (props.isOpen ? '80px' : '-100px')};
  height: 70px;
  // top: ${props => (props.isOpen ? '0px' : '-100px')};
  // height: 100px;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  background: white;
  overflow: hidden;
  transition:
    top 0.5s,
    opacity 0.5s;
  align-items: center;
  justify-content: center;
`;
export const SearchBarContent = styled.div`
  display: flex;
  height: 46px;
  width: 300px;
  padding: 10px 25px;
  // align-items: center;
  flex-shrink: 0;
  // border-radius: 50px;
  // background: #f2f1fa;
`;
export const SearchInput = styled.input`
  padding-left: 5px;
  border: none;
  outline: none;
  width: 320px;
  align-items: center;
  gap: 240px;
  background: #f2f1fa;
  flex-shrink: 0;
  background: none;
  font-size: 25px;
`;

export const SearchButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const CloseButton = styled.button`
  cursor: pointer;
  background-image: url(${closeBtn});
  background-size: cover;
  width: 30px;
  height: 30px;
  // position: absolute;
  // right: 30px;
`;
