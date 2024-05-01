import { Layout as AdminLayout } from "@/layout/layout";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Typography, TextField, Button, SvgIcon } from "@mui/material";
import { useState } from "react";
function AdminRoot() {
  const [open, setOpen] = useState(false);
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
          {open && (
            <div className="w-full flex flex-col bg-white pt-2 px-2 rounded-3xl">
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
                <TextField
                  variant="filled"
                  label="Product Title"
                  sx={{ outline: "none" }}
                />
              </div>
            </div>
          )}
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
