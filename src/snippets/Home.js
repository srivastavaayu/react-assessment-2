import "../css/Home.css";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <main id="homeMain" className="text-center">
        <h3 className="text-center mt-5">Welcome, @</h3>
        <a href="/AddOrder">
          <button className="btn btn-primary float-start">Add Order</button>
        </a>
        <a href="/ViewReport">
          <button className="btn btn-primary float-end">View Report</button>
        </a>
      </main>
    </>
  );
}

export default Home;
