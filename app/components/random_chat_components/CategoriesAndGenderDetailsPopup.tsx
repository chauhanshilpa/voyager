import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import CategoriesDropdown from "@/app/components/reusable/CategoriesDropdown";

const CategoriesAndGenderDetailsPopup = () => {
  const [interestInputValue, setInterestInputValue] = useState<
    string | undefined
  >();
  const [interestValue, setInterestValue] = useState<string | undefined>();

  const handleInterestValue = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && interestInputValue !== undefined) {
      setInterestValue(interestInputValue);
      setInterestInputValue("");
    }
  };

  return (
    <div className="flex flex-col justify-between bg-[#222831] rounded p-4 w-[30%] h-[auto] m-auto">
      <MdOutlineCancel className="self-end text-2xl font-md text-gray-400 cursor-pointer hover:text-gray-50" />
      <div>
        <h6 className="font-md text-sm mb-4 text-[#7AA2E3] text-center">
          Choose gender
        </h6>
        <div className="flex justify-around gap-3">
          <Image
            src="/female.png"
            height={30}
            width={40}
            alt="profile-picture"
            className="hover:border-[#EE99C2] hover:border-2 cursor-pointer"
          />
          <Image
            src="/male.png"
            height={30}
            width={40}
            alt="profile-picture"
            className="hover:border-[#5755FE] hover:border-2 cursor-pointer"
          />
          <Image
            src="/both_gender.png"
            height={30}
            width={40}
            alt="profile-picture"
            className="hover:border-[#3AA6B9] hover:border-2 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-5">
        <h6 className="font-md text-sm mb-3 text-[#7AA2E3] text-center">
          Match with interests
        </h6>
        <div className="flex flex-wrap gap-2 bg-muted rounded-md p-2 py-4 bg-[#31363F] overflow-x-auto">
          {interestValue !== undefined && (
            <div className="inline-flex items-center justify-center px-2.5 py-1 text-sm font-medium rounded-full bg-gray-300">
              {interestValue}
              <button className="flex-shrink-0 ml-1.5 h-3.5 w-3.5 rounded-full inline-flex items-center justify-center text-card bg-card-foreground hover:bg-card-foreground/80 focus:bg-card-foreground-hover">
                <span className="sr-only">Remove</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="10"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}

          <input
            type="text"
            className="w-32 select-auto sm:text-sm text-sm rounded-md bg-popover dark:bg-placeholder p-1 focus-visible:outline-none inline-flex bg-gray-200"
            maxLength={32}
            placeholder="Add an interest..."
            onChange={(event) => {
              setInterestInputValue(event.target.value);
            }}
            onKeyDown={handleInterestValue}
            value={interestInputValue}
          />
        </div>
      </div>
      {/* <CategoriesDropdown category="interest" /> */}
      {/* <CategoriesDropdown category="Location" /> */}
    </div>
  );
};

export default CategoriesAndGenderDetailsPopup;
