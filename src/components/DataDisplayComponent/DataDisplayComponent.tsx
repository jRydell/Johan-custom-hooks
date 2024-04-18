import { useFetch } from "../../hooks/useFetch";
import "./DataDisplayComponent.css";

type DataProps = {
  name: string;
  height: string;
  skin_color: string;
  birth_year: string;
  gender: string;
};

const DataDisplayComponent = ({ url }: { url: string }) => {
  const { data, loading, error } = useFetch<DataProps>(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data)
    return (
      <div className="DataDisplayComponent">
        <h3>{data.name}: </h3>
        <p>Height: {data.height}</p>
        <p>Skin color: {data.skin_color}</p>
        <p>Birth year: {data.birth_year}</p>
        <p>Gender: {data.gender}</p>
      </div>
    );
};

export default DataDisplayComponent;
