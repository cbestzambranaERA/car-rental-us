import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog-item border border-solid border-[#7c8a972e]">
        <img src={imgUrl} alt="" className="w-full" />
        <div className="blog-info md:text-[0.7rem] md:leading-6 md:mt-2.5 p-3">
          <Link to={`/blogs/${title}`} className="blog-title md:text-[1.1rem] no-underline text-[#000d6b] text-[1.2rem] font-semibold transition-[0.3s] hover:text-[#f9a826]">
            {title}
          </Link>
          <p className="section-description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read-more md:text-[0.7rem] text-[#f9a826] font-semibold no-underline text-base hover:text-[#f9a826]">
            Read More
          </Link>

          <div className="blog-time md:pt-[5px] flex items-center mt-4 pt-4 border-t-[#7c8a972e] border-t border-solid">
            <span className="blog-author md:text-[0.7rem] text-[#000d6b] font-semibold">
              <i class="ri-user-line text-[#f9a826] font-medium"></i> {author}
            </span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 section-description">
                <i class="ri-calendar-line"></i> {date}
              </span>

              <span className="flex items-center gap-1 section-description">
                <i class="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
