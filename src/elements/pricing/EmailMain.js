import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi';

const PriceList = () => {
  const [priceList, setPriceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'email-marketing'; // Hardcoded category name
  const categoryId = 34; // Hardcoded category ID

  useEffect(() => {
    const fetchAllItems = async () => {
      let allItems = [];
      let page = 1;
      let totalPages = 1; // Set initial value to enter the loop

      try {
        while (page <= totalPages) {
          // Fetch a page of data
          const url = `https://new.whatson.agency/wp-json/wp/v2/price-list?_fields=id,title,acf&acf_format=standard&per_page=100&page=${page}`;
          const response = await axios.get(url);

          // Append the current page's data to the full list
          allItems = [...allItems, ...response.data];

          // If the response includes pagination headers, update totalPages
          const totalItems = response.headers['x-wp-total']; // Total number of items
          const totalPagesInAPI = response.headers['x-wp-totalpages']; // Total pages
          totalPages = totalPagesInAPI ? parseInt(totalPagesInAPI) : Math.ceil(totalItems / 100);

          // Move to the next page
          page++;
        }

        // Filter the data based on your condition
        const filteredData = allItems.filter(item =>
          item.acf.package_category &&
          (item.acf.package_category.includes(category) || item.acf.package_category.includes(categoryId))
        );

        setPriceList(filteredData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAllItems();
  }, [category, categoryId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="row row--15">
      {priceList.length === 0 ? (
        <p>No price list items found for the selected category.</p>
      ) : (
        priceList.map(price => (
          <div key={price.id} className="col-lg-4 col-md-6 col-12">
            <div className="rn-pricing style-5">
              <div className="pricing-table-inner">
                <div className="pricing-header">
                  <h4 className="title">{price.title?.rendered || 'No Title'}</h4>
                  <div className="pricing">
                    <div className="price-wrapper">
                      <span className="currency">{price.acf?.currency_symbol || 'N/A'}</span>
                      <span className="price">{price.acf?.package_price || 'N/A'}</span>
                    </div>
                    <span className="subtitle">{price.acf?.price_recurring || 'N/A'}</span>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list-style--1">
                    {price.acf?.package_details ? (
                      price.acf.package_details.split('\r\n').map((detail, index) => (
                        <li key={index}>
                          <FiCheck /> {detail}
                        </li>
                      ))
                    ) : (
                      <li>No package details available</li>
                    )}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <a className="btn-default btn-border" href={price.acf?.package_button_url || '#pricing'} target="_blank">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PriceList;
