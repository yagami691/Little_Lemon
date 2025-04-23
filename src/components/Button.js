export default function Button({
  height = 25,
  width = 150,
  background = "#F4CE14",
  color = "#333333",
  border = "1px solid #F4CE14",
  borderRadius = 16,
  fontSize = 15,
  onClick,
  text,
}) {
  const buttonStyle = {
    height: height,
    width: width,
    backgroundColor: background,
    color: color,
    border: border,
    borderRadius: borderRadius,
    fontSize: fontSize,
  };
  return (
    <button style={buttonStyle} aria-label="On Click" onClick={onClick}>
      {text}
    </button>
  );
}
