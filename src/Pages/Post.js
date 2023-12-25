import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../index.css";
const Post = () => {
  const [postData, setPost] = useState();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <main>
        <section>
          <h1>Blog Post Page</h1>
          <h2>WellCome to my Page of blog post</h2>
          <div>
            {postData &&
              postData.map((post, index) => (
                <artical>
                  {/* <Link
                    to={"/post" + post.slug.current}
                    key={post.slug.current}
                  > */}
                  <span key={index}>
                    <img
                      style={{ width: "250px" }}
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.asset.alt}
                    />

                    <h3 className="text-3xl font-bold underline">
                      {post.title}
                    </h3>
                    <h4>{post.author}</h4>
                  </span>
                  {/* </Link> */}
                </artical>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Post;
