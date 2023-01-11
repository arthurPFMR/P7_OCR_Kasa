import Card from "./Card";
/*
component used to list datas for cards on Home.js
 => uses 1 props:
                 -data
 => uses id for the key and 'map' data to create cards with
    an id, a title and a cover                 
*/
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
