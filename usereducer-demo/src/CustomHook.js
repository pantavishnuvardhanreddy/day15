import useFetch from "./customHooks/UseFetch";

const Home = () => {
  //using custom hook 'useFetch'
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");


  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;