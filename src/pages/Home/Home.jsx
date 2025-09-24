import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllPosts, getTopPosts } from "../../services/postsService";
import { HomeBody, HomeHeader } from "./HomeStyled";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [topPost, setTopPost] = useState({});

    async function findPosts(){
        // Chamar o serviço que busca as notícias
        const postsResponse = await getAllPosts();
        setPosts(postsResponse.data.results);

        const topPostResponse = await getTopPosts()
        setTopPost(topPostResponse.data.post)
    }
    
    useEffect(() => {
        findPosts();
    }, []);
    
  return (
    <>
      <Navbar />
      <HomeHeader>
        <Card
            top={true}
            title={topPost.title}
            text={topPost.text}
            banner={topPost.banner}
            likes={topPost.likes}
            comments={topPost.comments}
        />
      </HomeHeader>
      <HomeBody>
        {posts.map((item) => (
          <Card 
          key={item.id} 
          title={item.title} 
          text={item.text}
          banner={item.banner}
          likes={item.likes}
          comments={item.comments}  
          />
        ))}
      </HomeBody>
    </>
  );
}
