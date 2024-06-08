import React from "react";

const NewGroupModal = ({ createGroup, onSubmit, onClose }) => {
  if (!createGroup) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Group</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="groupName"
              className="block text-sm font-medium text-gray-700"
            >
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              name="groupName"
              className="mt-1 block w-full border border-gray-300 rounded py-2 px-3 shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-300 text-black rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewGroupModal;
