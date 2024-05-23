import { Layout as AdminLayout } from "@/layout/layout";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { TextField, SvgIcon, FilledInput, InputAdornment } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function AdminRoot() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<any>("");
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex flex-1 justify-center px-[2em] py-[1em] max-w-[800px]">
        <div className="relative w-full flex flex-col gap-4">
          <button
            onClick={() => setOpen(true)}
            disabled={open}
            className={`${
              open ? " bg-opacity-70" : "bg-opacity-90 hover:bg-opacity-100"
            } bg-primary w-full text-white py-3 rounded-3xl transition duration-300 flex justify-center gap-1`}
          >
            <SvgIcon>
              <PlusIcon />
            </SvgIcon>
            Add Product
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute w-full flex flex-col bg-white px-2 rounded-[1.4rem] overflow-hidden"
                initial={{ height: 0, paddingTop: 0 }}
                animate={{ height: "100%", paddingTop: "0.5rem" }}
                transition={{ duration: 0.3 }}
                exit={{ height: 0, paddingTop: 0 }}
              >
                <button
                  className="hover:bg-gray-100 ml-auto p-2 rounded-full transtion duration-200"
                  onClick={() => setOpen(false)}
                >
                  <svg className="text-black h-6 w-6 cursor-pointer ">
                    <XMarkIcon />
                  </svg>
                </button>
                <div className="px-4 mb-4 w-full flex flex-col gap-4">
                  <h1 className="text-gray-600 font-medium text-[1.2rem]">
                    Enter Product Information
                  </h1>
                  <div className="flex flex-col gap-4">
                    <TextField
                      variant="filled"
                      label="Product Title"
                      sx={{ outline: "none" }}
                    />

                    <div className="flex gap-4 items-center">
                      <input
                        type="file"
                        id="file"
                        className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-[-1]"
                        onChange={(e) => {
                          console.log(e.target.value);
                          const vary = e.target.value.split("fakepath\\").pop();
                          setFile(vary);
                        }}
                      />
                      <label
                        htmlFor="file"
                        className=" font-semibold text-primary cursor-pointer"
                      >
                        Add Product
                      </label>
                      {file && (
                        <div className="flex gap-2 text-gray-600 font-semibold rounded-2xl items-center ">
                          <p className="text-[0.9em]">
                            {file.slice(0, 25) + "..."}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      console.log("submitted");
                      setOpen(false);
                    }}
                    className={`
                      bg-opacity-95 hover:bg-opacity-100 bg-primary w-full text-white py-3 rounded-3xl transition duration-300 flex justify-center gap-1`}
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const Admin = () => (
  <AdminLayout>
    <AdminRoot />
  </AdminLayout>
);

export default Admin;
