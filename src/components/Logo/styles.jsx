import styled from "styled-components";

const Container = styled.div`
  .logo {
    font-size: 20px;
    font-weight: bolder;
    padding-right: 10px;
    border-radius: 100%;
    box-shadow: 2px 2px 0px 1px var(--color3);
    transition: 0.5s;
  }

  .logo:hover {
    box-shadow: 2px 2px 0px 1px var(--color4);
  }
`;

export default Container;
