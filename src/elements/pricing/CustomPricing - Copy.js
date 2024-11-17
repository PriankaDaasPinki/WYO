import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiCheck } from 'react-icons/fi'; // Assuming you're using react-icons for the check icon

const PriceList = () => {
    const [priceList, setPriceList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all Price List items
                const priceListResponse = await axios.get('https://new.whatson.agency/wp-json/wp/v2/price-list?_fields=acf&acf_format=standard&_fields=id,title,acf');
                setPriceList(priceListResponse.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="row row--15">
            {priceList.map(price => (
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
                                    <span className="subtitle">USD Per Month</span>
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
                                <a className="btn-default btn-border" href={price.acf?.package_button_url || '#pricing'}>Purchase Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PriceList;
