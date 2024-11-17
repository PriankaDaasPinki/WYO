import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogListTwo from './BlogListTwo';
import { FaSpinner } from "react-icons/fa";

const BlogPropTwo = ({ column, StyleVarProp }) => {
    const [allItems, setAllItems] = useState([]);
    const [dataVisibleCount, setDataVisibleCount] = useState(6);
    const [dataIncrement] = useState(3);
    const [noMorePost, setNoMorePost] = useState(false);
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        axios.get("https://new.whatson.agency/wp-json/wp/v2/website-articles?_fields=acf&acf_format=standard&_fields=id,title,acf")
            .then(response => {
                setAllItems(response.data);
                setVisibleItems(response.data.slice(0, dataVisibleCount));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [dataVisibleCount]);

    const handleLoadMore = (e) => {
        e.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;
        if (dataVisibleCount >= allItems.length) {
            setNoMorePost(true);
        } else {
            setDataVisibleCount(tempCount);
            setVisibleItems(allItems.slice(0, tempCount));
        }
    }

    return (
        <>
            <div className="col-lg-12">
                <div className="row row--15">
                    {visibleItems.map((item) => (
                        <div key={item.id} className={column}>
                            <BlogListTwo StyleVar={StyleVarProp} data={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-lg-12">
                <div className="rwt-load-more text-center mt--60">
                    <button
                        className="btn btn-default btn-icon"
                        onClick={handleLoadMore}
                        disabled={noMorePost}
                    >
                        {noMorePost ? (
                            "No Post Here"
                        ) : (
                            <span>
                                View More Posts
                                <span className="icon">
                                    <FaSpinner />
                                </span>
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}

export default BlogPropTwo;
