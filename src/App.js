import Form from "./form";
const movies = [
  {
    name: "Avenger",
    avaliable: 5
  },
  {
    name: "Iron Man",
    avaliable: 5
  }
];

export default function App() {
  return (
    <div>
      {" "}
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
