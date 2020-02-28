import React from "react";

class Table extends React.Component {
  setTable = ({ name, description }) => {
    if (this.props.name === null) return;
    return (
      <tbody>
        <tr className="Table">
          <td className="Table">{name}</td>
          <td className="Table">{description}</td>
        </tr>
      </tbody>
    );
  };

  render() {
    const data = this.props.data;
    return (
      <div>
        Items in Category: ({this.props.name})
        <table className="Table">
          <tbody>
            <tr className="Table">
              <th className="Table">Name</th>
              <th className="Table"> Description</th>
            </tr>
          </tbody>
          {data && data.map(this.setTable)}
        </table>
      </div>
    );
  }
}

export default Table;
