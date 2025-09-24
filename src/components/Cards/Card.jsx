import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150}></TextLimit>
          </CardHeader>

          <CardFooter>
            <section>
              <span>{props.likes?.length}</span>
              <i className="bi bi-hand-thumbs-up"></i>
            </section>

            <section>
              <span>{props.comments?.length}</span>
              <i className="bi bi-chat-square"></i>
            </section>
          </CardFooter>
        </div>

        <img src={props.banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}
