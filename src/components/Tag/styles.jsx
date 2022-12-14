import styled from "styled-components";

const Container = styled.div`
  .tag span {
    position: relative;
    opacity: 0;
    transition: 0.7s;
  }

  .tag:hover span {
    opacity: 1;
    cursor: pointer;
  }

  .tag span:first-child {
    color: var(--color3);
    left: 0px;
  }

  .tag span:nth-child(2) {
    color: var(--color4);
    right: 0px;
  }

  .tag span:last-child {
    color: var(--color5);
    right: 0px;
  }

  .tag:hover span:first-child {
    left: -2px;
  }

  .tag:hover span:nth-child(2),
  .tag:hover span:last-child {
    right: -2px;
  }

  .tag.active span {
    opacity: 1;
  }

  @media screen and (max-width: 675px) {
    .tag span {
      display: none;
    }
  }
`;

export default Container;
