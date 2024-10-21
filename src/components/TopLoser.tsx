import { useFetchData } from "../hooks/useFetchData";

const TopLoser = () => {
  const { data, loading, error } = useFetchData(
    "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=8RKZ6GT5RYZUASRM"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(data);
  return (
    <div>
      {/* {data.top_gainers.map((item) => {
        console.log(item);
        return <h4 key={item?.id}>{item?.title}</h4>;
      })} */}
    </div>
  );
};

export default TopLoser;
