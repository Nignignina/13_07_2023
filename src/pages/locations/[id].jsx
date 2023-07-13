import { useRouter } from "next/router";
import Link from "next/link";
import location from "../../Components/mock/location";
import { useParams } from "next/navigation";

const Product = () => {
  // const params = useParams();
  // const product = location.find(
  //   (product) => product.id === parseInt(params.id)
  // );

  // const productRender = () => {
  //   if (!product) {
  //     return <p>Prodotto non trovato</p>;
  //   }

  //   return (
  //     <div className="Product">
  //       <h2>{product.name}</h2>
  //       {/* Aggiungi il resto dei dettagli del prodotto */}
  //     </div>
  //   );
  // };

  // console.log(params);
  // console.log(product);

  return (
    <div className="Product">
      {" "}
      {/* {productRender()} */}
      <Link href="/locations">
        <button>Back</button>
      </Link>{" "}
      <h1>ciao</h1>
    </div>
  );
};

export default Product;
