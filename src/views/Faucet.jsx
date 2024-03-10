import { useState } from 'react';
import FaucetForm from '../components/FaucetForm';
import FaucetAd from '../components/FaucetAd';

const Faucet = () => {
    return (
        <>
          <div className = "container mt-4">
            <div className = "row">
              <div className = "col-lg-2 d-flex justify-content-center">
                <FaucetAd width = "120" height = "600"></FaucetAd>
              </div>
              <div className = "col-lg-8 d-flex flex-row">
                <div className = "row w-100">
                  <div className = "col-mb-6 d-flex flex-column justify-content-end">
                    <FaucetForm></FaucetForm>
                  </div>
                  <div className = "col-mb-6 d-flex d-flex flex-column justify-content-end align-items-center">
                    <FaucetAd width = "720" height = "90"></FaucetAd>
                  </div>
                </div>
              </div>
              <div className = "col-lg-2 d-flex justify-content-center">
                <FaucetAd width = "120" height = "600"></FaucetAd>
              </div>
            </div>
          </div>
        </>
    );
}

export default Faucet;