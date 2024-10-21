// import React, { useEffect } from "react";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import { useRouter } from "next/router"; // Import useRouter from next/router
// import {blogData} from "@/contants/appdata";
// import Link from "next/link"; // Import Link from next/link


// // import "../styles/blog-details.css";

// const BlogDetails = () => {
//   const router = useRouter(); // Create a router instance
//   const { slug } = router.query; // Access the slug from the router query

//   const blog = blogData.find((blog) => blog.title === slug); // Find the blog data by title

//   useEffect(() => {
//     if (blog) {
//       window.scrollTo(0, 0); // Scroll to top if blog is found
//     }
//   }, [blog]);

//   if (!blog) return <div>Loading...</div>; // Optional loading state while fetching blog

//   return (
//     <div title={blog.title}>
//       <h2>hi</h2>
//       <section>
//         <Container>
//           <Row className="mt-4">
//             <Col lg="8" md="8">
//               <div className="blog__details">
//                 <img src={blog.imgUrl} alt="" className="w-100" />
//                 <h2 className="section__title mt-4">{blog.title}</h2>

//                 <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
//                   <span className="blog__author">
//                     <i className="ri-user-line"></i> {blog.author}
//                   </span>

//                   <span className="d-flex align-items-center gap-1 section__desc">
//                     <i className="ri-calendar-line"></i> {blog.date}
//                   </span>

//                   <span className="d-flex align-items-center gap-1 section__desc">
//                     <i className="ri-time-line"></i> {blog.time}
//                   </span>
//                 </div>

//                 <p className="section__desc">{blog.description}</p>
//                 <h6 className="ps-5 fw-normal">
//                   <blockquote className="fs-4 blue">{blog.quote}</blockquote>
//                 </h6>
//                 <p className="section__desc">{blog.description}</p>
//               </div>

//               <div className="comment__list mt-5">
//                 <h4 className="mb-5">3 Comments</h4>

//                 <div className="single__comment d-flex gap-3">
//                   <img src={commentImg} alt="" />
//                   <div className="comment__content">
//                     <h6 className="fw-bold blue">David Visa</h6>
//                     <p className="section__desc mb-0">14 July, 2022</p>
//                     <p className="section__desc">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Eos nobis totam eius laborum molestias itaque minima
//                       distinctio, quae velit tempore!
//                     </p>

//                     <span className="replay d-flex align-items-center gap-1">
//                       <i className="ri-reply-line"></i> Reply
//                     </span>
//                   </div>
//                 </div>

//                 {/* =============== comment form ============ */}
//                 <div className="leave__comment-form mt-5 blue">
//                   <h4>Leave a Comment</h4>
//                   <p className="section__desc">
//                     You must sign in to make or comment on a post
//                   </p>

//                   <Form>
//                     <FormGroup className="d-flex gap-3">
//                       <Input type="text" placeholder="Full name" />
//                       <Input type="email" placeholder="Email" />
//                     </FormGroup>

//                     <FormGroup>
//                       <textarea
//                         rows="5"
//                         className="w-100 py-2 px-3"
//                         placeholder="Comment..."
//                       ></textarea>
//                     </FormGroup>

//                     <button className="btn comment__btn m-3">
//                       Post a Comment
//                     </button>
//                   </Form>
//                 </div>
//               </div>
//             </Col>

//             <Col lg="4" md="4">
//               <div className="recent__post mb-4">
//                 <h5 className="fw-bold">Recent Posts</h5>
//               </div>
//               {blogData.map((item) => (
//                 <div className="recent__blog-post mb-4" key={item.id}>
//                   <div className="recent__blog-item d-flex gap-3">
//                     <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
//                     <h6>
//                       <Link href={`/blogs/${item.title}`}>{item.title}</Link>
//                     </h6>
//                   </div>
//                 </div>
//               ))}
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default BlogDetails;
import React from 'react';
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import BlogList from '../components/UI/BlogList';

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList /> {/* Display the blog list only once */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
