import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="containerPost">
      <div className="title__containerPost">
        <h1 className="title__textPost">White People Are Broken </h1>
      </div>
      <div className="datas__containerPost">
        <p>Katherine Fugate</p>
        <p>Aug 22, 2018 · 7 min read</p>
      </div>
      <div>
        <img
          className="imgCardPost"
          src="https://miro.medium.com/max/700/1*f-9V2pyj6WVknmgoUx23MA.jpeg"
        />
      </div>
      <div className="text__containerPost">
        <p className="paragraphPost">
          “Can I call you ‘sis’?” I asked. My friend laughed, smiled. “Oh, hell
          no.” A white woman calling a black woman “sis” is out of bounds. I
          admit, I was hurt. Surely, she knows how much I love her? She knows
          how angry and disappointed I have been with white women playing it
          safe and staying silent because they can. But she was telling me that,
          no matter how “woke” or evolved I may think I am, I walk this world as
          a white woman, which means I’ll never truly understand what it is to
          walk this world as a black woman. It was hard to hear. I wanted to
          call her “sis” because I deeply wanted that feeling of sisterhood and
          kinship. But I also knew she wasn’t trying to hurt me. She was loving
          me enough to tell me the truth. I wanted to defend myself. I wanted to
          hand her my bio of marches and rallies. I’ve had a black male lover.
          I’ve had female lovers. I know what discrimination feels like. I’ve
          been told I’m going to Hell from family members and from my own
          religion. Hell, I am a woman… That qualifies me, surely? Nope. Still
          doesn’t make me black. No oppression, no misogyny, no religious
          persecution will ever make me a black woman. I can empathize but, as
          someone who is not black in America, I’ll never know.
        </p>
      </div>
    </div>
  );
}

export default Post;
