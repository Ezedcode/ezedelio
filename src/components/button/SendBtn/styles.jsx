import styled from "styled-components";

const Container = styled.div`
  .sendBtn {
    border: none;
    background: var(--color1);
    height: 20rem;
    width: 25rem;
    border-radius: 10px;
    font-family: "Play", sans-serif;
  }

  .sendBtn a:hover {
    background: #45dbe6;
    box-shadow: 0px 0px 0px 0px #f5f5dca6;
    transition: 0.5s;
  }

  .sendBtn a {
    margin-top: 20px;
    border-radius: 5px;
    width: 8rem;
    padding: 20px 15px;
    font-weight: bolder;
    align-self: end;
    cursor: pointer;
    transition: 0.5s;
    font-size: 16px;
    background: var(--color2);
    box-shadow: 5px 5px 0px 0px #f5f5dca6;
    text-decoration: none;
    color: var(--color1);
  }

  @media (max-width: 884px) {
    .sendBtn {
      height: 7rem;
      width: 21rem;
    }
  }
`;

export default Container;
