import Card from "./Card";

const GetallRentals = (props) => {
  return (
    <div className="rentalsImages">
      {props.data.map((data) => (
        <Card
          id={data.id}
          title={data.title}
          cover={data.cover}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default GetallRentals;
