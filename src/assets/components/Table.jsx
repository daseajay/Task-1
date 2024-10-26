import React, { useState } from "react";
const Table = () => {
  const [data, setData] = useState([
    { id: 1, product: "Sony" },
    { id: 2, product: "Samsung" },
    { id: 3, product: "APPLE" },
    { id: 4, product: "MOTOROLA" },
    { id: 5, product: "BlackBerry" },
    { id: 6, product: "Karbonn" },
    { id: 7, product: "Micromax" },
    { id: 8, product: "HTC" },
    { id: 9, product: "Alcatel" },
  ]);

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setData(updatedData);
  };

  const handleSubmit = () => {
    console.log("Data ready to post:", data);
  };

  return (
    <div>
      <h2>Editable Product Table</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th className="fs-2">Product</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.product}
                  onChange={(e) =>
                    handleInputChange(item.id, "product", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={handleSubmit} className="btn btn-warning">
        Submit
      </button>
    </div>
  );
};

export default Table;
