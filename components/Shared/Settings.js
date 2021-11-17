import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Settings = ({ settingsIsOpen, closeSettingsModal }) => {
  return (
    <div className="bg-gray-300">
      <Transition appear show={settingsIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 -top-20 z-10 overflow-y-auto"
          onClose={closeSettingsModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 border-b border-gray-200 pb-4 text-gray-900"
                >
                  Setting
                </Dialog.Title>
                <div className="mt-2 border-b pb-8">
                  <p className="text-base text-gray-500">
                    O Kṛṣṇa, maintainer of the people, I have heard by disciplic
                    succession that those whose family traditions are destroyed
                    dwell always in hell.
                  </p>
                </div>

                <span className="relative mt-4 font-bold z-0 text-center w-full inline-flex shadow-sm rounded-md">
                  <button
                    type="button"
                    className="relative  w-1/2 items-center align-center px-2 py-6 text-center rounded-l-md border border-gray-300 bg-white text-sm font-bold text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                  >
                    <h2 className="text-center">-Aa</h2>
                  </button>
                  <button
                    type="button"
                    className="-ml-px relative w-1/2  items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-bold text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                  >
                    <h2 className="text-center text-xl">+Aa</h2>
                  </button>
                </span>

                <div className="mt-4">
                  <span className="relative z-0 w-full inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      className="relative text-center w-1/4 items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      Years
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative text-center w-1/4 items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      Months
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative text-center w-1/4 items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      Months
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative text-center w-1/4 items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      Days
                    </button>
                  </span>
                </div>
                <div className="mt-4">
                  <span className="relative z-0 w-full inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      className="relative text-center w-1/3 items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      <img src="text-narrow.svg" className="w-4 mx-auto" />
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative text-center w-1/3 items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      <img src="text-medium.png" className="w-4 mx-auto" />
                    </button>

                    <button
                      type="button"
                      className="-ml-px relative text-center w-1/3 items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-my-orange focus:border-my-orange"
                    >
                      <img src="text-wide.svg" className="w-4 mx-auto" />
                    </button>
                  </span>
                </div>

                <div className="mt-4 gap-6 flex">
                  <button
                    type="button"
                    className="inline-flex items-center p-5 border border-transparent rounded-full shadow-sm text-white bg-light-bg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  ></button>

                  <button
                    type="button"
                    className="inline-flex items-center p-5 border border-transparent rounded-full shadow-sm text-white bg-yellow-bg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  ></button>

                  <button
                    type="button"
                    className="inline-flex items-center p-5 border border-transparent rounded-full shadow-sm text-white bg-dark-bg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  ></button>
                </div>

                <div className="mt-4 w-full flex gap-5">
                  <button
                    type="button"
                    className="text-center w-1/2 items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-my-orange"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="text-center w-1/2 items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-my-orange hover:bg-my-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-my-orange"
                  >
                    Apply Settings
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Settings;
