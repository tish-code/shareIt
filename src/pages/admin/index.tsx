import { Layout as AdminLayout } from "@/layout/layout";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Typography, TextField, Button, SvgIcon } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
function AdminRoot() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<any>([]);
  console.log(files);
  return (
    <div className="flex">
      <div className="flex flex-1 justify-center px-[2em] py-[1em]">
        <div className="w-full flex flex-col gap-4">
          <button
            onClick={() => setOpen(true)}
            disabled={open}
            className={`${
              open ? "bg-opacity-70" : "bg-opacity-80 hover:bg-opacity-100"
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
                className="w-full flex flex-col bg-white px-2 rounded-3xl overflow-hidden"
                initial={{ height: 0, paddingTop: 0 }}
                animate={{ height: "100%", paddingTop: "0.5rem" }}
                transition={{ duration: 0.1 }}
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
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    Enter Product Information
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <TextField
                      variant="filled"
                      label="Product Title"
                      sx={{ outline: "none" }}
                    />
                    <input
                      type="file"
                      id="file"
                      className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-[-1]"
                      onChange={(e) => {
                        const vary = e.target.value.split(`fakepath`).pop();
                        setFiles([...files, vary]);
                        // console.log()
                      }}
                    />
                    <label
                      htmlFor="file"
                      className="text-[1.25rem] font-semibold text-white bg-black inline-block hover:bg-red-700 focus:bg-red-700 cursor-pointer"
                    >
                      Add Product
                    </label>
                    {files.map((item: any, index: any) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div id="divider" className="border border-[#d9dbda]"></div>
      <div className="flex-1"></div>
    </div>
  );
}

const Admin = () => (
  <AdminLayout>
    <AdminRoot />
  </AdminLayout>
);

export default Admin;
