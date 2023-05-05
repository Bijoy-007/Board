import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sign_in");
  }, [navigate]);

  return <h1>Hello World!!!</h1>;
};

export default RootPage;
