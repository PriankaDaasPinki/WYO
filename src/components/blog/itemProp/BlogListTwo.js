import React from 'react';
import PropTypes from "prop-types";

const BlogListTwo = ({ data, StyleVar }) => {
    const { title, acf } = data;
    const { article_image, article_link, article_conent } = acf;

    return (
        <div className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    <a href={article_link} target="_blank" rel="noopener noreferrer" className="image">
                        <img src={article_image} alt="Blog Image" />
                    </a>
                </div>
                <div className="content">
                    <h4 className="title">
                        <a href={article_link} target="_blank" rel="noopener noreferrer">
                            {title.rendered}
                        </a>
                    </h4>
                    <p className="description" dangerouslySetInnerHTML={{ __html: article_conent }} />
                </div>
            </div>
        </div>
    );
}

BlogListTwo.propTypes = {
    data: PropTypes.object.isRequired,
    StyleVar: PropTypes.string.isRequired,
};

export default BlogListTwo;
