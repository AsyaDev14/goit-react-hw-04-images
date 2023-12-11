import React from "react";
import { TailSpin } from 'react-loader-spinner';

export const Loader = ({isLoading}) => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      className={true}
      wrapperClass="loader"
      visible={isLoading}
    />
  )
}

