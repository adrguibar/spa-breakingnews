import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 2rem;
`;

export const CardBody = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;
