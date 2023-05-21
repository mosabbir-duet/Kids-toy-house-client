import "aos/dist/aos.css";
import React from "react";
const Blog = () => {
  return (
    <div className="bg-yellow-300 p-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 my-10 p-8">
        <div
          className="text-2xl text-justify "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="mb-4">
            <strong>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </strong>
          </h1>
          <p>
            {" "}
            Refresh tokens allow you to balance your users' access needs with
            your organization's security practices. Access tokens help users get
            the resources they need to complete their tasks, but such tokens can
            also expose your organization to data compromise or other malicious
            actions. If we think a passport card. Passport number is a access
            token and NID number is Refresh token. When Access token expired
            then we use Refresh token to get acess again access token..
            <br />
            Token can store in local storage and HTTP only cookies but we store
            on local storage then it's get everybody..So it's better to store
            http cookies than local storage.
          </p>
        </div>
        <div
          className="text-2xl text-justify"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="mb-4">
            <strong>Compare SQL and NoSQL databases?</strong>
          </h1>
          <p>
            SQl is a structured Relational database which contain many table and
            each table consists of record. Its stored data in tabular form and
            make relationship using many table. Four types of relationship has
            such one to one, one to many, many to many and many to one. MySQl is
            a SQL database
            <br />
            One the other hand NoSQl database is a Unstructured database which
            content data using collection and document in json format. NoSQL
            databases are databases designed to be used across large distrusted
            systems. They are notably much more scalable and much faster.
          </p>
        </div>

        <div
          className="text-2xl text-justify"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="mb-4">
            <strong>What is express js? What is Nest JS ?</strong>
          </h1>
          <p>
            <strong>Express JS: </strong>
            ExpressJS is still among the most widely used web frameworks, and it
            is considered a very rational choice to build large-scale
            applications with. Express is a JavaScript framework, so both the
            frontend and the backend can be built using the same (extremely
            popular) language. One of the biggest strengths of Express is its
            strong community and the number of available plugins. For example,
            storing sessions, cookies, parsing a payload, and so on, are
            available out-of-the-box, and it takes much less time and lines of
            code to build an application with this framework. Another big
            advantage of Express is that it is supported with the Google V8
            engine, which ensures high performance without lags or errors in the
            processing.
            <strong>NEST JS: </strong>
            NestJS is a rapidly growing NodeJS framework, and it seems the
            growing number of developers prefers it over ExpressJS. It serves
            the same purpose – to build efficient, reliable and scalable
            server-side applications – but it does it in a very different way.
            NestJS is inspired by Angular, which is a big advantage for
            developers who are already familiar with it. At the same time,
            everything supported in Express, for example Express functions, is
            also supported in Nest, which makes switching from one framework to
            another easier.
          </p>
        </div>
        <div
          className="text-2xl text-justify"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="mb-4">
            <strong>What is MongoDB aggregate and how does it work?</strong>
          </h1>
          <p>
            When working with data in MongoDB, it may quickly have to run
            complex operations, with multiple stages of operations to gather
            metrics for project. Generating reports and displaying useful
            metadata are just two major use cases where MongoDB aggregation
            operations can prove incredibly useful, powerful, and flexible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
