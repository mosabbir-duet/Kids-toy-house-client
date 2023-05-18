import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Blog = () => {
  const { person } = useContext(AuthContext);
  return <div> This is a blog page {person.name}</div>;
};

export default Blog;
