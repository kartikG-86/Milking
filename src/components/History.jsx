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
          {data
            .slice()
            .reverse()
            .map((item) => (
              <div class=" col-lg-4 col-md-6 col-xs-12 my-3">
                <div class="card">
                  <div class="card-header fs-6 text-start">
                    <div class="d-flex justify-content-between"> 
                     <div> {item.storeDate}</div>
                     <div><img src="https://cdn-icons-png.flaticon.com/512/869/869655.png" style={{width:'2rem'}} /></div>

                    </div>
                   
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-start mb-3">
                      {item.quantity} litre of milk
                    </h5>
                    <div className="d-lg-flex d-md-flex d-sm-flex justify-content-between mt-3">
                      <div className="my-lg-0 my-2 text-start">
                        <b> Start: </b> {item.startTime}
                      </div>
                      <div className="my-lg-0 my-2 text-start">
                        <b> End: </b> {item.endTime}
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-body-secondary fs-6 text-center">
                    <b>Total : </b>
                    {item.totalTime}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div class="container-fluid fs-4 my-5 py-5 text-center">No History :( </div>
      )}
    </div>
  );
};

export default History;
