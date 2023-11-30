import React from "react";

export function Input({ type, label, id, value, setValue, placeholder }) {
  return (
    <div className="form-group space-y-4 w-full">
      <label className="block font-semibold " htmlFor={type}>
        {label}
      </label>
      <input
        className="block border-gray-200 border bg-transparent  rounded-sm focus:outline-none w-full h-11 px-4"
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => {
          setValue(id, e.target.value);
        }}
      />
    </div>
  );
}
