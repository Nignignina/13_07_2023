import styles from "./locations.module.scss";
import { locationList } from "@/Components/mock/location";
import { useRouter } from "next/router";

export default function () {
  // const [products, setProducts] = useState([]);
  const router = useRouter();

  const onHandleclick = (id) => {
    console.log(id);
    router.push(`/locations/${id}`);
  };
  const onProductsRender = () => {
    return locationList.map((data) => (
      <div key={data.id} className={styles.product}>
        <img
          src={data.imageLocation}
          alt={data.name}
          onClick={() => onHandleclick(data.id)}
        />
        <div className={styles.text}>
          <h2> {data.name}</h2>
          <p>{data.location} </p>
        </div>
      </div>
    ));
  };

  return (
    <div className={`${styles.WrapperProduct}`}>
      {locationList.length ? onProductsRender() : <p>attesa</p>}
    </div>
  );
}
