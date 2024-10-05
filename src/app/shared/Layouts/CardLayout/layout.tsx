import "./card-layout.css";

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-layout">{children}</div>;
};

export default CardLayout;
