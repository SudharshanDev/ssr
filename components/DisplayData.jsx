
const DataDisplay = ({ data }) => {
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Area:</strong> {item.area}
          </li>
        ))}
      </ul>
    );
  };
  
  export default DataDisplay;
  