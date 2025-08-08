import { useEffect } from "react";
import Logout from "../../component/Logout";

function About() {
  async function fetchAdminProduct() {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (res.status === 401) {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAdminProduct();
  }, []);

  return (
    <div>
      About <Logout />
    </div>
  );
}

export default About;
