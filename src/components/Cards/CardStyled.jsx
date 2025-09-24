import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  flex-direction: column;
  gap: 1rem;
  /* max-width: 100%; */

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 0.3rem;
  background-color: #fff;
`;

export const CardBody = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;  
  }

  h2 {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  img {
    width: 40%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 .3rem .3rem 0;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${(props) => (props.top ? "1.5rem" : ".9rem")};

  h2 {
    margin-bottom: 1rem;
    font-size: ${(props) => (props.top ? "3rem" : "1rem")};
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;
