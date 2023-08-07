import styled from "styled-components";
import { DownloadBtnPorps } from "./mianstyle";
import dw from "@/assets/images/dw.png";
import up from "@/assets/images/up.png";

export interface DisplayContainerBoxPorps {
  top: string;
}
export const PhoneBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  background-image: radial-gradient(at 52% 98%, #1b1758 39%, #17162d 100%);
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const PCBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  background-image: radial-gradient(at 52% 98%, #1b1758 39%, #17162d 100%);
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const HeadBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 889px;
  height: 64px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ContainerBox = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 1137px;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerItem = styled.div<{ type: string }>`
  height: 600px;
  width: 833px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.type === "left" ? "row" : "row-reverse")};
`;
export const ImageCover = styled.div<DownloadBtnPorps>`
  background-repeat: no-repeat;
  background-size: 324.8px 600px;
  width: 324.8px;
  height: 600px;
  float: left;
  position: relative;
  background-image: url(${(props) => props.imgurl});
`;

export const ContaineTextBox = styled.div`
  width: 480px;
  display: flex;
  height: 600px;
  flex-direction: column;
  justify-content: center;
`;
export const ContaineTitle = styled.h3`
  font-size: 42px;
  color: #fff;
  line-height: 70px;
  letter-spacing: 0.1px;
  font-weight: 500;
  text-align: left;
`;
export const ContaineText = styled.h4`
  margin-bottom: 50px;
  margin-top: 10px;
  font-size: 40px;
  color: #25d4d0;
  line-height: 56px;
  letter-spacing: 0.34px;
  width: 550px;
  text-align: left;
`;
export const DisplayContainerBox = styled.div<DisplayContainerBoxPorps>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${(props) => props.top};
  transition: all 0.5s ease-in-out;
`;
export const LocatorBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  height: 185px;
  justify-content: space-between;
`;

export const LocatorItem = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #25d4d0;
  transform: ${(props) => (props.active ? "scale(2)" : "scale(1)")};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
export const HeadLeftBox = styled.div`
  display: flex;
  align-items: center;
`;
export const HeadRightBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 27px;
  padding-top: 31px;
  .link {
    opacity: 0.5;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    position: relative;
    margin: 0 9px;
    padding: 0 14px;
  }
  .activeLink {
    opacity: 1;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: -10px;
      left: 0;
      height: 2px;
      background: #fff;
    }
  }
`;

export const Logo = styled.img`
  width: 48px;
  height: 32px;
  margin: 20px 0 0 53px;
  text-indent: -9999px;
`;
export const SelectorBox = styled.div`
  margin-top: 22px;
  height: 28px;
  margin-left: 24px;
  line-height: 26px;
  float: left;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 2px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 6px;
  .dw {
    width: 16px;
    height: 16px;
    margin-left: 2px;
    background-image: url(${dw});
    background-repeat: no-repeat;
    background-size: 16px 16px;
  }
  &:hover {
    .dw {
      background-image: url(${up});
    }
  }
`;
export const SelectorItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgb(22, 43, 65);
    color: #25d4d0;
  }
`;
export const SelectorItemBox = styled.div`
  position: absolute;
  top: 54px;
  width: 90px;
  left: 22px;
  border-radius: 2px;
  overflow: hidden;
  background-color: rgb(18, 17, 46);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
`;
export const AboutBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: block;
  background-image: radial-gradient(at 52% 98%, #1b1758 39%, #17162d 100%);
  padding-top: 100px;
`;

export const CardListBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1130px;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

export const CardBox = styled.div`
  max-width: 1130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(22, 26, 38);
  padding: 10px;
  border-radius: 10px;
  position: relative;
  margin: 0 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .right {
    color: #25d4d0;
  }
`;
export const CardTitle = styled.div`
  font-size: 24px;
  color: #fff;
  width: 100%;
  text-align: left;
`;
export const CardText = styled.div`
  font-size: 16px;
  color: #fff;
  opacity: 0.6;
  width: 100%;
  text-align: left;
`;
export const ImageBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  img {
    height: 60px;
    margin: 10px;
    opacity: 0.2;
    /* mix-blend-mode: color; */
    transform: rotate(10deg);
  }
`;
export const MintBtn = styled.button`
  padding: 10px 60px;
  border-radius: 20px;
  background-image: radial-gradient(
    at 52% 98%,
    rgb(121, 63, 238) 39%,
    rgb(84, 205, 216) 100%
  );
  margin-top: 10px;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1130px;
  margin: 20px auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BtnItem = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    padding: 0 10px;
  }
`;