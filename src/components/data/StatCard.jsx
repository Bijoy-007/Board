const StartCard = (props) => {
  const cardStyle = {
    backgroundColor: props.bgColor,
  };
  return (
    <div style={cardStyle} className="p-6 rounded-3xl">
      <div className="">{props.icon}</div>
      <div className="text-sm">{props.label}</div>

      <div className="font-sans text-2xl font-bold">{props.data}</div>
    </div>
  );
};

export default StartCard;
