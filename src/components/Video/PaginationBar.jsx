

const PaginationBar = () => {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Previous
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">1</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">2</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">3</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Next
      </button>
    </div>
  );
};

export default PaginationBar;
