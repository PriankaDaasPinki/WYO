import React from 'react';

const PortfolioItem = ({ portfolio, categoryMap }) => {
    return (
        <div className="rwt-card">
            <div className="inner">
                <div className="thumbnail">
                    <figure className="card-image">
                        <a href={portfolio.acf.portfolio_link} target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src={portfolio.acf.portfolio_image} alt={portfolio.title.rendered} />
                        </a>
                    </figure>
                    <a href={portfolio.acf.portfolio_link} target="_blank" rel="noopener noreferrer" className="rwt-overlay"></a>
                </div>
                <div className="content">
                    <h5 className="title mb--10">
                        <a href={portfolio.acf.portfolio_link} target="_blank" rel="noopener noreferrer">
                            {portfolio.title.rendered}
                        </a>
                    </h5>
                    
                    {/* Displaying the portfolio category names */}
                    {/* <span>{portfolio.acf.portfolio_category.map((category) => categoryMap[category]).join(', ')}</span> */}
                </div>
            </div>
        </div>
    ); 
}; 

export default PortfolioItem;
