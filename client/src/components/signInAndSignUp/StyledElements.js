import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
  background: transparent;
  height: auto;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  padding: 18px 10px;
`;

export const ContentWrapper = styled.div`
  background: transparent;
  justify-content: center;
  display: flex;
  padding: 40px 0px;
  height: auto;
`;

export const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 15px #c2c9d1;
  width: 1000px;
  height: 600px;
  border-radius: 10px;
  position: relative;
  transition: 0.8s all ease;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1010px) {
    transition: 0.8s all ease;
    width: 500px;
    display: flex;
  }
`;

export const CardContentLeft = styled.div`
  background: linear-gradient(
    90deg,
    rgb(249, 168, 37) 0%,
    rgb(252, 205, 116) 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;

  @media screen and (max-width: 1010px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const CardImage = styled.img`
  background: transparent;
  opacity: 20%;
  width: 100%;
  border-radius: 10px 0 0 10px;
  filter: blur(1px);
  -webkit-filter: blur(1px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardImage2 = styled.img`
  background: transparent;
  width: 80%;
  height: 80%80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  /* background: linear-gradient(
    90deg, 
    rgb(40, 40, 40) 0%, 
    rgb(17, 17, 17) 100%
  ); */
  background: #fff;

  @media screen and (max-width: 1010px) {
    transition: 0.8s all ease;
    width: 100%;
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormH1 = styled.h1`
  background: transparent;
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: rgb(40, 40, 40);
`;

export const FormInputs = styled.div`
  background: transparent;
  margin-bottom: 0.5rem;
  width: 80%;

  p {
    background: transparent;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;

export const FormLabel = styled.label`
  background: transparent;
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: rgb(40, 40, 40);
`;

export const Input = styled.input`
  background: transparent;
  color: rgb(40, 40, 40);
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 4px;
  height: 40px;
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

export const Button = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(249, 168, 37) 0%,
    rgb(252, 205, 116) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgb(252, 205, 116) 0%,
      rgb(249, 168, 37) 100%
    );
    transition: all 0.4s ease-in-out;
  }
`;

export const SpanSignUp = styled.span`
  background: transparent;
  font-size: 0.8rem;
  margin-top: 10px;
  color: rgb(40, 40, 40);
  width: 80%;
  text-align: center;
`;

export const CardA = styled(LinkR)`
  background: transparent;
  text-decoration: none;
  color: rgb(249, 168, 37);
  font-weight: 600;
  cursor: pointer;
`;

export const Alert = styled.div`
  background-color: #FF5252;
  padding: 12px;
  border-radius: 5px;
  color: #fff;
  display: block;
  width: 100%;
  font-size: 13px;

  span {
    background: transparent;
    margin-left: 15px;
    color: #fff;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #000;
    }
  }

  strong {
    background: transparent;
  }
`;

export const SuccessH1 = styled.h1`
  background: transparent;
  margin: 10px;
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  color: rgb(40, 40, 40);
`;

export const SuccessImg = styled.img`
  background: transparent;
  margin: 30px 10px;
  width: 40%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Checkbox = styled.input`
  margin: 0px 5px 0px 0px;
`;