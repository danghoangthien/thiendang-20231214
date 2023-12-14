import { useState } from "react";
import Chart from "./Chart/index";
import Search from "./Search/index";
import Trending from "./Trending/index";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Explore = styled.div``;

const TrendingContainer = styled.div`
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.7s ease, visibility 0.3s ease;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Token = () => {
  const [isTrendingVisible, setIsTrendingVisible] = useState(false);
  const activeCoin = useSelector((state: any) => state.activeCoin);
  return (
    <>
      <h2>Token inspector</h2>
      <Explore
        onMouseEnter={() => setIsTrendingVisible(true)}
        onMouseLeave={() => setIsTrendingVisible(false)}
        className="mb-5"
      >
        <Search />
        {
          <TrendingContainer isVisible={isTrendingVisible} className="mt-5">
            <Trending />
          </TrendingContainer>
        }
      </Explore>
      {activeCoin && <h3>Now exloring {activeCoin}</h3>}
      <Chart />
    </>
  );
};

export default Token;
