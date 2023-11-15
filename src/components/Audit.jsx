import React, { useState } from "react";
import { styles } from "../style";
import { logs } from "../data";
import link from "../assets/link.svg";
import filter from "../assets/filter.svg";

const Audit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Changed from 10 to 15

  const handleFilterClick = () => {
    console.log("Filter options displayed");
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the logs array to get only the items for the current page
  const currentLogs = logs.slice(indexOfFirstItem, indexOfLastItem);
  const totalLogs = logs.length;

  // Calculate the total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(logs.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [hoveredLogId, setHoveredLogId] = useState(null);

  return (
    <>
      <div
        className={`flex justify-center  items-start flex-col px-[4rem] w-full h-screen`}
      >
        <div className={`mt-[3rem]`}>
          <h1 className={`${styles.head1}`}>Audit Logs</h1>
          <p className={`${styles.head3} my-[1rem]`}>
            Monitor any changes to your project, schema, and content with audit
            logs.
          </p>
          <a
            href="#"
            className={`${styles.link} my-[1rem] w-fit ${styles.flexCenter}`}
          >
            Learn more
            <img src={link} href="#" className={`w-[1.5rem]`} alt="" />
          </a>
        </div>
        <div
          onClick={handleFilterClick}
          className={` px-[1rem] flex w-[65%] h-[5rem] my-[1rem] border-[#e6e6e6] border-[2px] rounded-[0.5rem]`}
        >
          <img src={filter} alt="filter" className={`w-[1.5rem]`} />
          <button className={`px-[1rem]`}>Filter</button>
        </div>
        <div
          className={`flex justify-start items-start flex-col w-full  h-full rounded-[0.5rem] border-[#e6e6e6] border-[2px] overflow-hidden`}
        >
          <div
            className={`flex justify-between items-center text-[#8a8a8a] font-semibold w-full h-[4rem]  border-b-[2px] border-[#e6e6e6] bg-greyShade  px-[3rem] flex-row`}
          >
            <div className={`w-full`}>User</div>
            <div className={`w-full`}>Entity ID</div>
            <div className={`w-full`}>Action</div>
            <div className={`w-full`}>Type</div>
            <div className={`w-full`}>Environment</div>
            <div className={`w-full`}>Timestamp</div>
          </div>
          {currentLogs.map((log, index) => (
            <>
              <div
                key={`${log.id}`}
                className={`${styles.text1} flex justify-between items-center w-full h-[6.75rem] px-[3rem] border-b-[2px] border-t-0 border-[#e6e6e6] flex-row hover:bg-greyShade `}
                onMouseEnter={() => setHoveredLogId(log.id)}
                onMouseLeave={() => setHoveredLogId(null)}
              >
                <div className="w-full">
                  <img
                    src={log.user}
                    alt=""
                    className={`w-[3rem] h-[3rem] rounded-full`}
                  />
                </div>
                <div className={` w-full`}>
                  {" "}
                  <span
                    className={`bg-greyShade rounded-[2px] py-[0.3rem] px-[0.7rem]`}
                  >
                    {" "}
                    {log.id}
                  </span>
                </div>
                <div
                  className={`w-full ${
                    log.action === "UPDATE"
                      ? "text-blue-500"
                      : log.action === "UNPUBLISH"
                      ? "text-red-500"
                      : log.action === "PUBLISH"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  {log.action}
                </div>

                <div className="w-full">{log.type}</div>
                <div className="w-full">{log.environment}</div>
                <div className="w-full transition duration-500 ease-in-out">
                  {hoveredLogId === log.id ? (
                    <a className={`text-blue-500 `}>View Details</a>
                  ) : (
                    log.timestamp
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={`flex justify-between items-center h-[7rem] w-full`}>
          <p>{totalLogs}</p>
          <div className={`${styles.flexCenter} w-full `}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className={`mx-[3rem]`}>Page {currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageNumbers.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audit;
