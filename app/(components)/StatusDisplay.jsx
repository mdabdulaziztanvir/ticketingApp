const StatusDisplay = ({ status }) => {
  const statusBgColor = (status) => {
    if (status == "Started") {
      return "bg-yellow-300";
    } else if (status == "Not started") {
      return "bg-red-300";
    } else {
      return "bg-green-300";
    }
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs text-gray-700 ${statusBgColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
