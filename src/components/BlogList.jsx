import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "../styles/blog-item.css";
import Link from 'next/link';
import { blogData } from "@/contants/appdata";

const BlogList = () => {
    return (
        <>
        <Container>
          <Row>
            <Col lg="12" className="mt-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>
          </Row>
        </Container>
        <Row className='mx-5'>
            {blogData.map((item) => (
                <BlogItem item={item} key={item.id} />
            ))}
            </Row>
        </>
    );
};

const BlogItem = ({ item }) => {
    // const { imgUrl, title, author, date, description, time } = item;
    return (

        
        <Col className="mb-5 md:mb-6 lg:mb-8">
            <div className="blog__item">
                <img src={item.imgUrl} alt={item.title} className="w-100" />
                <div className="blog__info p-3">
                    <Link href={`/blogs/${item.title}`} className="blog__title">
                        {item.title}
                    </Link>
                    <p className="text-[#7c8a97] text-[0.9rem] leading-[30px]">
                        {item.description.length > 100
                            ? item.description.substr(0, 100)
                            : item.description}
                    </p>

                    <Link href={`/blogs/${item.title}`} className="read__more">
                        Read More
                    </Link>

                    <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                        <span className="blog__author">
                            <i class="ri-user-line"></i> {item.author}
                        </span>

                        <div className=" d-flex align-items-center gap-3">
                            <span className=" d-flex align-items-center gap-1 text-[#7c8a97] text-[0.9rem] leading-[30px]">
                                <i class="ri-calendar-line"></i> {item.date}
                            </span>

                            <span className=" d-flex align-items-center gap-1 text-[#7c8a97] text-[0.9rem] leading-[30px]">
                                <i class="ri-time-line"></i> {item.time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
        
    )
}

export default BlogList
