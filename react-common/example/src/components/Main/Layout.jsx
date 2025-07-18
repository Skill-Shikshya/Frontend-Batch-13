import Footer from "../Footer";
import Header from "../Header";

function Layout(props) {
  const { children, page, setPage, count } = props;
  return (
    <>
      <Header count={count} onClick={setPage} />

      <main className=" bg-amber-200 flex">
        <aside className="bg-amber-400">this is sidebar</aside>
        {children}
      </main>
      <Footer currentPage={page} setPage={setPage} />
    </>
  );
}

export default Layout;
