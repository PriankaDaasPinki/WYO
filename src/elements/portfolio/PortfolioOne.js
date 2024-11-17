import React, { useState, useEffect } from "react";
import axios from 'axios';
import PortfolioItem from "./PortfolioItem";
import { FaSpinner } from "react-icons/fa";

const PortfolioOne = ({ Column }) => {
    const [getAllItems, setAllItems] = useState([]);
    const [dataVisibleCount, setDataVisibleCount] = useState(6);
    const [dataIncrement] = useState(6);
    const [noMorePost, setNoMorePost] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");
    const [visibleItems, setVisibleItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const staticCategoryMap = {
        14: "eCommerce",
        15: "Education",
        18: "Personal",
        19: "Venus / Events",
    
       
        // Add other categories here as needed
    };

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get('https://new.whatson.agency/wp-json/wp/v2/portfolios?_fields=acf,id,title&acf_format=standard&per_page=100');
                const items = response.data;
                console.log("Fetched portfolios:", items); // Log fetched data
                setAllItems(items);
                setVisibleItems(items.slice(0, dataVisibleCount));

                const categorySet = new Set();
                items.forEach(item => {
                    item.acf.portfolio_category.forEach(category => {
                        categorySet.add(category);
                    });
                });

                const combinedCategories = { ...staticCategoryMap };
                categorySet.forEach(category => {
                    if (!combinedCategories[category]) {
                        combinedCategories[category] = `Category ${category}`;
                    }
                });

                setCategories(Object.entries(combinedCategories));
                console.log("Categories:", combinedCategories); // Log categories

            } catch (error) {
                console.error('Error fetching portfolios:', error);
                // Handle error here, e.g., set a flag or display an error message
            }
        };

        fetchPortfolios();
    }, [dataVisibleCount]);

    const handleChange = (category) => {
        setActiveFilter(category);
        let tempData;
        if (category === "all") {
            tempData = getAllItems.slice(0, dataVisibleCount);
        } else {
            tempData = getAllItems.filter(
                (item) => item.acf.portfolio_category.includes(parseInt(category)) // Ensure category is compared correctly
            ).slice(0, dataVisibleCount);
        }
        setVisibleItems(tempData);
        console.log("Filtered items for category", category, tempData); // Log filtered items
    };

    const handleLoadmore = () => {
        const tempCount = dataVisibleCount + dataIncrement;
        if (tempCount >= getAllItems.length) {
            setNoMorePost(true);
        } else {
            setDataVisibleCount(tempCount);
            const tempData = activeFilter === "all" ? 
                             getAllItems.slice(0, tempCount) : 
                             getAllItems.filter((item) => item.acf.portfolio_category.includes(parseInt(activeFilter))).slice(0, tempCount);
            setVisibleItems(tempData);
        }
    }

    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                        <li className="list-item">
                            <button
                                onClick={() => handleChange("all")}
                                className={activeFilter === "all" ? "current" : ""}
                            >
                                All
                            </button>
                        </li>
                        {categories.map(([categoryId, categoryName]) => (
                            <li className="list-item" key={categoryId}>
                                <button
                                    onClick={() => handleChange(categoryId)}
                                    className={activeFilter === categoryId ? "current" : ""}
                                >
                                    {categoryName}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row row--15">
                {visibleItems.map((item) => (
                    <div key={item.id} className={Column}>
                        <PortfolioItem portfolio={item} categoryMap={staticCategoryMap} />
                    </div>
                ))}
            </div>

            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rwt-load-more text-center mt--50">
                        <button
                            className="btn btn-default btn-large btn-icon"
                            onClick={handleLoadmore}
                            disabled={noMorePost}
                        >
                            {noMorePost ? (
                                "No Item Here"
                            ) : (
                                <span>
                                    Load More
                                    <span className="icon">
                                        <FaSpinner />
                                    </span>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioOne;
