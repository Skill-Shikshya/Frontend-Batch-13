import { useQuery } from "@tanstack/react-query";

function Contact() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    staleTime: 60 * 1000,
    queryFn: () =>
      fetch("https://fakestoreapi.com/producasdasdasdasdts").then(
        async (raw) => await raw.json()
      ),
  });

  console.log(isError, isLoading, data, error);

  return <div> logged out</div>;
}

export default Contact;
