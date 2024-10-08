// app/page.js

import { fetchData } from "../../api/demo";
import DataDisplay from "../../../components/DisplayData";
import FormComponent from "../../../components/Formcompo";

export const revalidate = 0; // Ensure no caching

// Server-side function to fetch the data
const Page = async () => {
  let data = [];
  let errorMessage = "";

  // Fetch data on the server side
  try {
    data = await fetchData();
  } catch (error) {
    errorMessage = "Error fetching data";
  }

  return (
    <div>
      <h1>Server-Side Rendered Data</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <DataDisplay data={data} />

      
      <FormComponent />
    </div>
  );
};

export default Page;
