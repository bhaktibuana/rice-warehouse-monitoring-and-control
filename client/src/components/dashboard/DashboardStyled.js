import styled from 'styled-components';
import { FaTemperatureLow, FaPowerOff } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { MdOutlineAutorenew } from 'react-icons/md'

export const Page = styled.div`
  background: transparent;
  left: 276px;
  display: flex;
  position: relative;
  height: auto;
  min-height: 100vh;
  width: calc(100% - 276px);
  padding: 0 15px;
`;

export const Container = styled.div`
  background: transparent;
  display: flex;
  padding: 30px 15px;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  background: transparent;
  width: 100%;
  padding-top: 75px;
`;

export const ContentCointainer1 = styled.div`
  background: transparent;
  width: 100%;
  height: 95px;
  display: flex;
  gap: 24px;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: rgb(0 0 0 / 2%) 0px 3.5px 5.5px;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 22px;
  align-items: center;
`;

export const CardContainer1 = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardText = styled.div`
  background: transparent;
  width: auto;
  height: 100%;
  display: grid;
  align-items: center;
`;

export const TextLabel = styled.p`
  background: transparent;
  color: rgb(140, 140, 140);
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

export const TextValue = styled.p`
  background: transparent;
  color: rgb(40, 40, 40);
  font-weight: bold;
  font-size: 1.1rem;
`;

export const IconContainer1 = styled.div`
  background: #fac267;
  height: 51px;
  width: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 12px;
`;

export const TemperatureIcon = styled(FaTemperatureLow)`
  background: transparent;
  width: 24px;
  height: 24px;
`;

export const HumidityIcon = styled(WiHumidity)`
  background: transparent;
  width: 32px;
  height: 32px;
`;

export const ContentCointainer2 = styled.div`
  background: transparent;
  width: 100%;
  height: 290px;
  display: flex;
  gap: 24px;
  margin: 26px 0px;
`;

export const CardContainer2 = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

export const CardItem = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const IconContainer2Red = styled.div`
  background: #e53e3e;
  height: 78px;
  width: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 12px;
  border: 2px solid #e53e3e;
  cursor: pointer;

  &:active {
    background: #fff;
    color: #6dc993;
    border: 2px solid #6dc993;
  }
`;

export const IconContainer2Green = styled.div`
  background: #6dc993;
  height: 78px;
  width: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 12px;
  border: 2px solid #6dc993;
  cursor: pointer;

  &:active {
    background: #fff;
    color: #e53e3e;
    border: 2px solid #e53e3e;
  }
`;

export const IconContainer2Grey = styled.div`
  background: rgb(140, 140, 140);
  height: 78px;
  width: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 12px;
  border: 2px solid rgb(140, 140, 140);
`;

export const PowerIcon = styled(FaPowerOff)`
  background: transparent;
  width: 32px;
  height: 32px;
`;

export const CardItemMode = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0px;
`;

export const TextMode = styled.p`
  background: transparent;
  color: rgb(140, 140, 140);
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

export const TextModeValue = styled.p`
  background: transparent;
  margin-top: -20px;
  color: rgb(40, 40, 40);
  font-weight: bold;
  font-size: 1.3rem;
`;

export const IconContainer3 = styled.div`
  background: #fac267;
  height: 70px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;

  &:active {
    background: #e3ac52;
  }
`;

export const SyncIcon = styled(MdOutlineAutorenew)`
  background: transparent;
  width: 42px;
  height: 42px;
`;

export const ContentCointainer3 = styled.div`
  background: transparent;
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
  margin: 26px 0px;
`;

export const CardContainer3 = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTableTitle = styled.div`
  background: transparent;
  display: grid;
  width: 100%;
  padding: 12px 0px 28px;
  height: auto;
`;

export const TableTitle = styled.p`
  background: transparent;
  color: rgb(40, 40, 40);
  font-weight: bold;
  font-size: 1.2rem;
`;

export const TableDesc = styled.p`
  background: transparent;
  color: rgb(140, 140, 140);
  font-size: 0.9rem;
`;

export const TableContainer = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  height: auto;
`;

export const Table = styled.table`
  background: transparent;
  width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  background: transparent;
`;

export const Th = styled.th`
  background: transparent;
  text-align: center;
  padding: 10px;
  color: rgb(140, 140, 140);
  border-bottom: 1px solid #edf2f7;
`;

export const Td = styled.td`
  background: transparent;
  text-align: center;
  padding: 10px;
  color: rgb(40, 40, 40);
`;