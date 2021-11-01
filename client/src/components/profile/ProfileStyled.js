import styled from 'styled-components';
import { FaRegCheckSquare, FaRegEdit, FaTimes } from 'react-icons/fa';

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

export const ContentImg = styled.img`
  background: transparent;
  width: 100%;
  height: 300px;
  border-radius: 25px;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const BioContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  width: calc(100% - 48px);
  align-items: center;
  margin-inline: 24px;
  max-height: 330px;
  backdrop-filter: saturate(200%) blur(50px);
  /* position: absolute; */
  box-shadow: rgb(0 0 0 / 2%) 0px 2px 5.5px;
  border-width: 2px;
  border-style: solid;
  border-image: initial;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.8);
  padding: 24px;
  border-radius: 20px;
  margin-top: -100px;
`;

export const BioContent = styled.div`
  background: transparent;
  height: 82px;
  width: auto;
  align-items: center;
  display: flex;
`;

export const ProfileImg = styled.img`
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  margin-right: 20px;
`;

export const ProfileText = styled.div`
  background: transparent;
  height: 80px;
  display: grid;
  align-items: center;
  padding: 10px 0px;
`;

export const NameText = styled.p`
  background: transparent;
  color: rgb(40, 40, 40);
  font-size: 24px;
  font-weight: bold;
`;

export const EmailText = styled.p`
  background: transparent;
  color: rgb(90, 90, 90);
  font-size: 18px;
  font-weight: bold;
`;

export const ItemContainer = styled.div`
  background: transparent;
  width: 100%;
  height: 450px;
  display: flex;
  gap: 24px;
  margin-top: 20px;
`;

export const ItemCard = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: rgb(0 0 0 / 2%) 0px 3.5px 5.5px;
`;

export const CardTitle = styled.div`
  background: transparent;
  display: flex;
  width: 100%;
  padding: 12px 5px;
  margin-bottom: 12px;
`;

export const TitleText = styled.p`
  background: transparent;
  color: rgb(40, 40, 40);
  font-size: 1.3rem;
  font-weight: bold;
`;

export const CardItemContainer = styled.div`
  background: transparent;
  padding: 0px 5px;
  width: 100%;
  height: auto;
`;

export const CardItem = styled.div`
  background: transparent;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.div`
  background: transparent;
  width: auto;
  height: auto;
  display: grid;
`;

export const TextLabel = styled.p`
  background: transparent;
  color: rgb(140, 140, 140);
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

export const TextContent = styled.p`
  background: transparent;
  color: rgb(40, 40, 40);
  font-size: 1rem;
  font-weight: bold;
  max-width: 360px;
`;

export const InputContent = styled.input`
  background: transparent;
  color: rgb(40, 40, 40);
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 4px;
  height: 30px;
  width: 100%;
  border: 1px solid #9f9f9f;

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }

  &:focus {
    border: 1px solid rgb(249, 168, 37);
    transition: all 0.1s ease-in-out;
  }
`;

export const BtnContainer = styled.div`
  background: transparent;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemBtnEdit = styled.button`
  background: #fac267;
  width: auto;
  height: auto;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid #fac267;
  color: #fff;
  font-size: 0.8rem;
  align-items: center;
  cursor: pointer;
  margin-top: 22px;

  &:hover {
    color: #fac267;
    background: #fff;
  }
`;

export const EditIcon = styled(FaRegEdit)`
  background: transparent;
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

export const ItemBtnApply = styled.button`
  background: #50be7e;
  width: auto;
  height: auto;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid #50be7e;
  color: #fff;
  font-size: 0.8rem;
  align-items: center;
  cursor: pointer;
  margin-top: 22px;

  &:hover {
    color: #50be7e;
    background: #fff;
  }
`;

export const ApplyIcon = styled(FaRegCheckSquare)`
  background: transparent;
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

export const ItemBtnCancel = styled.button`
  background: #f56565;
  width: auto;
  height: auto;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid #f56565;
  color: #fff;
  font-size: 0.8rem;
  align-items: center;
  cursor: pointer;
  margin-top: 22px;

  &:hover {
    color: #f56565;
    background: #fff;
  }
`;

export const CancelIcon = styled(FaTimes)`
  background: transparent;
  width: 10px;
  height: 10px;
  margin-right: 5px;
`;

export const ValidateText = styled.p`
  background: transparent;
  color: red;
  font-size: 0.7rem;
`;