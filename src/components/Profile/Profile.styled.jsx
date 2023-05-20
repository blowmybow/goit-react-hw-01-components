import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;

  background: linear-gradient(
    180deg,
    transparent 50%,
    rgb(239 200 9 / 73%) 50%
  );
  border-radius: 18px;
`;
export const Description = styled.div`
  position: relative;
  text-align: center;

  width: 100%;
  padding: 24px;

  border-radius: 16px;
  background: #8fe2ef;
  box-shadow: 0px 5px 40px rgb(244 245 26 / 99%);
`;
export const ProfileImage = styled.img`
  position: absolute;
  transform: translate(-50px, -60px);

  max-height: 100px;
  border-radius: 30%;
  background: rgb(239 200 9 / 73%) 50%;
  border: 6px solid #d0d0d5;
`;
export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);
  margin-top: 60px;
  margin-bottom: 0;
  color: #000000;
`;
export const ProfileTag = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  margin-top: 8px;
  margin-bottom: 0;
  color: #969696;
`;
export const ProfileLocation = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);
  margin-top: 8px;
  margin-bottom: 0;
  color: #000000;
`;
export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 20px;
  margin: 0;
  li {
    display: grid;
    width: 80px;
    justify-items: center;
    :not(:last-child) {
      border-right: 1px solid #999999;
    }
    @media screen and (min-width: 768px) {
      width: 128px;
    }
  }
`;
export const StatsLabel = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(16 / 14);
  margin-bottom: 10px;
  color: #999999;
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(28 / 24);

  color: #000000;
`;
