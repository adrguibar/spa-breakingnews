import { CardBody, CardContainer, CardFooter } from "./CardStyled";

export function Card({ news }) {
  console.log(news);
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>
        <img src={news.image} alt="Imagem" />
      </CardBody>

      <CardFooter>
        <div>
          <span>{news.likes}</span>
          <i class="bi bi-hand-thumbs-up"></i>
        </div>

        <div>
          <span>{news.comments}</span>
          <i class="bi bi-chat-square"></i>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
