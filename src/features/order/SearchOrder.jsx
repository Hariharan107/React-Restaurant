import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchOrder = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    navigate(`order/${text}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Search your Order #'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
