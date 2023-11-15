import styled , { keyframes} from "styled-components";

const moveAnimation = keyframes`
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }
    50%, 100% {
        opacity: 1;
        z-index: 5;
    }
`;
export const Container = styled.div`
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
`;
export const Form = styled.form`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
`;
export const ContainerP = styled.p`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
`;
export const ContainerSpan = styled.span`
    font-size: 12px;
`;
export const ContainerInput = styled.input`
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
`;
export const ContainerA = styled.a`
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;

    &:hover {
        color: #535bf2;
    }
`;
export const Button = styled.button`
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;

    &.hidden {
        background-color: transparent;
        border-color: #fff;
    }
`;
export const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;

  &.active {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
  }
`;
export const Toggle = styled.div `
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right, #5c6bc0, #512da8);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;

    &.active {
        transform: translateX(50%);
    }
`;
export const TogglePanel = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
`;
export const FormContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
`;
export const ToggleLeft = styled.div`
    transform: translateX(-200%);

    &.active {
        transform: translateX(0);
    }
`;
export const ToggleRight = styled.div`
    right: 0;
    transform: translateX(0);

    &.active {
        transform: translateX(200%);
    }
`;
