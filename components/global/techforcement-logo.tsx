export const TechforcementLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 50"
    width="100%"
    height="100%"
    {...props}
  >
    <style>
      {`
        .techforcement-text {
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 700;
          fill: #64FFDA;
        }
      `}
    </style>
    <text className="techforcement-text" x="0" y="40">
      {'Techforcement'.split('').map((char, index) => (
        <tspan key={index} className="logo-char" dy={index % 2 === 0 ? -5 : 5}>{char}</tspan>
      ))}
    </text>
  </svg>
); 