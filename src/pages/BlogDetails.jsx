import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog-details text-[0.8rem] leading-[1.4rem]">
                <img src={blog.imgUrl} alt="" className="w-full" />
                <h2 className="section-title mt-4">{blog.title}</h2>

                <div className="blog-publisher flex items-center gap-4 mb-[1.5rem]">
                  <span className="blog-author">
                    <i class="ri-user-line text-[#f9a826]"></i> {blog.author}
                  </span>

                  <span className="flex items-center gap-1 section-description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className="flex items-center gap-1 section-description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section-description">{blog.description}</p>
                <h6 className="pl-12 font-semibold">
                  <blockquote className="leading-[35px] text-2xl">{blog.quote}</blockquote>
                </h6>
                <p className="section-description">{blog.description}</p>
              </div>

              <div className="comment-list mt-[3rem]">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single-comment flex gap-3">
                  <img className="w-[70px] h-[70px] object-cover rounded-[50%] border-2 border-solid border-[#000d6b] md:w-10 md:h-10" src={commentImg} alt="" />
                  <div className="comment-content">
                    <h6 className="font-bold">David Visa</h6>
                    <p className="section-description mb-0 text-[0.8rem] leading-[1.4rem]">14 July, 2022</p>
                    <p className="section-description text-[0.8rem] leading-[1.4rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay flex items-center gap-1 text-[#000d6b] font-semibold cursor-pointer">
                      <i class="ri-reply-line text-[#f9a826]"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave-comment-form mt-[3rem]">
                  <h4 className="text-[1.2rem]">Leave a Comment</h4>
                  <p className="section-description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className="flex gap-3">
                      <Input className='border border-solid border-[rgba(0,12,107,0.118)]text-[0.7rem]' type="text" placeholder="Full name" />
                      <Input className='border border-solid border-[rgba(0,12,107,0.118)]text-[0.7rem]' type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-full py-2 px-3 border border-solid border-[rgba(0,12,107,0.118)] text-[0.7rem]"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment-btn mt-[1rem] text-white bg-[#000d8b] text-[0.8rem] px-2.5 py-[5px]">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent-post mb-4 mt-[30px]">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent-blog-post mb-4" key={item.id}>
                  <div className="recent-blog-item flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-3/12 rounded-[0.25rem]" />
                    <h6>
                      <Link className="no-underline text-[#000d8b] font-semibold" to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
