import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin: 30px auto;
  padding: 18px;
  background: rgb(34 88 239 / 65%);
  box-shadow: 0px 5px 40px rgb(244 245 26 / 99%);
  border-radius: 18px;
  @media screen and (max-width: 767.98px) {
    width: fit-content;
  }
`;
export const StatisticsTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const StatItem = styled.li`
  display: grid;
  justify-items: center;

  padding: 6px;
  :first-of-type {
    border-radius: 10px 0 0 10px;
  }
  :last-child {
    border-radius: 0 10px 10px 0;
  }
  @media screen and (min-width: 768px) {
    width: 128px;
  }
`;
export const ItemLabel = styled.span`
  font-size: 12px;
  color: #dcdcd5;
`;
export const ItemPercentage = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin-top: 4px;
`;
