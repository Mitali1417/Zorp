import React from "react";
import { styles } from "../style";

const Setting = () => {
  return (
    <>
      <div
        className={`ml-[7rem] h-screen px-[3rem] py-[1rem] w-[24rem] border-r-2`}
      >
        <h1 className={`${styles.head1}`}>Settings</h1>
        <div>
          <h4
            className={`${styles.head2} ${styles.btn} p-[0.5rem] mt-[1.4rem]`}
          >
            Project
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            API Access
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            Billing
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            Environments
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            Content Stages
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            Locales
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            Audit Logs
          </h4>
          <h4 className={`${styles.head2} ${styles.btn} p-[0.5rem]`}>
            Team Members
          </h4>
        </div>
      </div>
    </>
  );
};

export default Setting;
