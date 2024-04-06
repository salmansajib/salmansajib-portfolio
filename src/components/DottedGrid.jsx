/* eslint-disable react/prop-types */
const DottedGrid = ({ width, height, dotSize, spacing, gradientColors }) => {
  const rows = Math.ceil(height / (dotSize + spacing));
  const cols = Math.ceil(width / (dotSize + spacing));

  const dots = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const gradient = `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`;
      const dotStyle = {
        left: x * (dotSize + spacing),
        top: y * (dotSize + spacing),
        width: dotSize,
        height: dotSize,
        background: gradient,
        borderRadius: '50%',
        position: 'absolute',
      };
      dots.push(<div key={`${x}-${y}`} style={dotStyle} />);
    }
  }

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
      }}
    >
      {dots}
    </div>
  );
};

export default DottedGrid;
