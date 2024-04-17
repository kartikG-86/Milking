import React, { useEffect, useState } from "react";

const History = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let localData = localStorage.getItem("milk_data");
    localData = JSON.parse(localData);
    console.log(localData);
    setData(localData == null ? [] : localData);
  }, [data]);

  return (
    <div className="History">
      {data.length !== 0 ? (
        <div class="row my-3 mx-3">
          {data.slice().reverse().map((item) => (
            <div class=" col-lg-4 col-xs-12 my-3">
              <div class="card">
                <div class="card-header fs-6 text-start">{item.storeDate}</div>
                <div class="card-body">
                  <h5 class="card-title text-start">{item.quantity} Kg of milk</h5>
                  <div class="d-flex justify-content-between mt-3" >
                    <div class="text"> <b> Start: </b> {item.startTime}</div>
                    <div><b> End: </b> {item.endTime}</div>
                  </div>

                </div>
                  <div class="card-footer text-body-secondary fs-6 text-center"><b>Total : </b>{item.totalTime}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No History</p>
      )}
    </div>
  );
};

export default History;
