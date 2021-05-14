import "../css/AddOrder.css";
import Header from "./Header";

function AddOrder() {
  return (
    <>
      <Header />
      <main id="addOrderMain">
        <h2 className="text-center">Add Order</h2>
        <form action="">
          <label className="form-label" for="addOrderQuantity">
            Quantity
          </label>
          <div className="mb-3">
            <input
              id="addOrderQuantity"
              className="form-control"
              type="number"
            />
          </div>
          <label className="form-label" for="addOrderTotalAmount">
            Total Amount
          </label>
          <div className="mb-3">
            <input
              id="addOrderTotalAmount"
              className="form-control"
              type="number"
              disabled
            />
          </div>
          <button className="btn btn-success float-end" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default AddOrder;
