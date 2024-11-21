import React from "react";

export const clipText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)} ...`;
};

// {clipText(product.description, 50)}

export default function Card(props) {
  const item = props.item;
  const {
    Name: title,
    Image: image,
    Description: descripton,
    Link: link,
  } = item;
  //here Name, Description, Image is according to data.js object
  return (
    <div className="Card col-sm-6 col-md-4 pb-5">
      <div>
        <a href={link} target="_blank">
          <img
            className="img-fluid rounded"
            src={image}
            alt="cartImageOfProduct"
            style={{ height: "20rem", width: "100%" }}
          />
        </a>
      </div>
      <h4
        style={{ height: "8rem" }}
        className="text-white fs-1 pt-5 text-center"
      >
        {title}
      </h4>
      <div className="d-flex flex-column justify-content-between h-100">
        <p
          style={{ textAlign: "justify" }}
          className="fs-3 productDescription m-0"
        >
          {clipText(descripton, 95)}
        </p>
      </div>
    </div>
  );
}
