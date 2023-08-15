import {
  AboutBox,
  BarImg,
  BtnBox,
  BtnItem,
  CardBox,
  CardItem,
  CardListBox,
  CardText,
  CardTitle,
  BtnFlex,
  ImageBack,
  MintBtn,
  InviteBtn,
} from "@/style";
import { useTranslation } from "react-i18next";
import ur from "@/assets/images/ur.jpg";
import sr1 from "@/assets/images/sr1.png";
import sr2 from "@/assets/images/sr2.png";
import sr3 from "@/assets/images/sr3.png";
import sr4 from "@/assets/images/sr4.png";
import ssr1 from "@/assets/images/ssr1.png";
import ssr2 from "@/assets/images/ssr2.png";
import r1 from "@/assets/images/r1.png";
import r2 from "@/assets/images/r2.png";
import r3 from "@/assets/images/r3.png";
import r4 from "@/assets/images/r4.png";
import r5 from "@/assets/images/r5.png";
import r6 from "@/assets/images/r6.png";
import barImg from "@/assets/images/WechatIMG70.png";
import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";
import Slider from "@/components/Slider";
import Modal from "@/components/Modal";
import Myinput from "@/components/Myinput";

function About(props: {mint:any,synthesisHandle:any,mintAmount:any,synthesisAmount:any}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const [mintSliderShow, setMintSliderShow] = useState(false);
  const [synthesisSliderShow, setSynthesisSliderShow] = useState(false);
  const [mintValue, setMintValue] = useState(0);
  const [synthesisValue, setSynthesisValue] = useState(0);

  const [transferAddress, setTransferAddress] = useState("123");
  const [transferAmount, setTransferAmount] = useState("");
  const [fragmentAmount, setFragmentAmount] = useState("");
  const [invitationLink, setInvitationLink] = useState(
    "http://127.0.0.1:5173/#/NFT"
  );

  const [copyShow, setCopyShow] = useState(false);
  function copyToClipboard(value: string) {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert(`copy ${value} success`);
  }
  return (
    <AboutBox>
      <BarImg src={barImg} alt="" />

      <CardListBox>
        <CardBox>
          <ImageBack>
            {[ur, sr1, sr2, sr3, sr4, ssr1].map((item, i) => {
              return <img key={i} src={item} />;
            })}
          </ImageBack>
          <CardItem>
            <div className="left">{t("Circulation")}</div>
            <div className="right">{12000}</div>
          </CardItem>
          <CardItem>
            <div className="left">{t("Number of MINTs")}</div>
            <div className="right">{10000}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">{t("Fragment Synthesis Quantity")}</div>
            <div className="right">{2000}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">{t("Release Time")}</div>
            <div className="right">2023.8.30</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">{t("Blockchain")}</div>
            <div className="right">erc20</div>
          </CardItem>
        </CardBox>
        <CardBox>
          <ImageBack>
            {[ssr1, ssr2, r1, r2, r3, r4].map((item, i) => {
              return <img key={i} src={item} />;
            })}
          </ImageBack>
          <CardTitle>{t("number of mints")}</CardTitle>
          <CardItem>
            <div className="left">R</div>
            <div className="right">{6000}</div>
          </CardItem>
          <CardItem>
            <div className="left">SR</div>
            <div className="right">{3000}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">SSR</div>
            <div className="right">{800}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">UR</div>
            <div className="right">{200}</div>
          </CardItem>
        </CardBox>
        <CardBox>
          <ImageBack>
            {[r1, r2, r3, r4, r5, r6].map((item, i) => {
              return <img key={i} src={item} />;
            })}
          </ImageBack>
          <CardTitle>{t("Synthetic nft quantity")}</CardTitle>
          <CardItem>
            <div className="left">SR</div>
            <div className="right">{1500}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">SSR</div>
            <div className="right">{400}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">UR</div>
            <div className="right">{100}</div>
          </CardItem>
        </CardBox>
      </CardListBox>
      <BtnBox>
        <BtnItem>
          <ProgressBar value={props.mintAmount} maxValue={100}></ProgressBar>
          <BtnFlex>
            <MintBtn
              onClick={() => {
                if (!mintSliderShow) {
                  setMintSliderShow(true);
                }
              }}
            >
              Mint
            </MintBtn>
          </BtnFlex>
        </BtnItem>
        <BtnItem>
          <ProgressBar value={props.synthesisAmount} maxValue={100}></ProgressBar>
          <BtnFlex>
            <MintBtn
              onClick={() => {
                if (!synthesisSliderShow) {
                  setSynthesisSliderShow(true);
                }
              }}
            >
              {t("synthesis")}
            </MintBtn>
          </BtnFlex>
        </BtnItem>
      </BtnBox>
      <CardBox
        style={{
          margin: " 20px auto",
          background: "rgba(0,0,0,0)",
        }}
      >
        <CardTitle>{t("mint Notice")}</CardTitle>
        <CardText>{t("mint1")}</CardText>
      </CardBox>
      <CardBox
        style={{
          margin: " 20px auto",
          background: "rgba(0,0,0,0)",
        }}
      >
        <CardTitle>{t("Invitation Notice")}</CardTitle>
        <CardText>{t("InvitationText")}</CardText>
      </CardBox>
      <CardBox
        style={{
          margin: " 20px auto",
          background: "rgba(0,0,0,0)",
        }}
      >
        <CardTitle>{t("Possession Notice")}</CardTitle>
        <CardText>{t("Possession1")}</CardText>
        <CardText>{t("Possession2")}</CardText>
        <CardText>{t("Possession3")}</CardText>
        <CardText>{t("Possession4")}</CardText>
      </CardBox>
      <CardBox
        style={{
          margin: " 20px auto",
          background: "rgba(0,0,0,0)",
        }}
      >
        <CardTitle>{t("aboutSoul")}</CardTitle>
        <CardText>{t("aboutSoulText")}</CardText>
      </CardBox>
      <Modal
        title={mintSliderShow ? t("mint") : t("synthesis")}
        isOpen={mintSliderShow || synthesisSliderShow}
        onClose={function (): void {
          setMintSliderShow(false);
          setSynthesisSliderShow(false);
        }}
      >
        <div
          style={{
            textAlign: "left",
          }}
        >
          Number
        </div>
        {mintSliderShow && (
          <Slider
            min={1}
            max={50}
            step={1}
            initialValue={mintValue}
            onChange={(e) => {
              setMintValue(e);
            }}
          ></Slider>
        )}
        {synthesisSliderShow && (
          <Slider
            max={10}
            min={0}
            step={1}
            initialValue={synthesisValue}
            onChange={(e) => {
              setSynthesisValue(e);
            }}
          ></Slider>
        )}
        <MintBtn
          style={{
            marginTop: "20px",
          }}
          onClick={() => {
            if(mintSliderShow){
              props.mint(mintValue)
            }else{
              props.synthesisHandle(synthesisValue)
            }
          }}
        >
          NEXT
        </MintBtn>
      </Modal>
      <Modal
        width="60%"
        isOpen={copyShow}
        onClose={function (): void {
          setCopyShow(false);
        }}
      >
        <Myinput
          inputValue={transferAddress}
          setinputValue={(e) => {
            setTransferAddress(e);
          }}
          titleText={t("fragment_amount")}
          buttonText={""}
        ></Myinput>
        <Myinput
          inputOrText={true}
          inputValue={transferAmount}
          setinputValue={(e) => {
            setTransferAmount(e);
          }}
          titleText={t("transfer_address")}
          buttonText={""}
        ></Myinput>
        <Myinput
          inputOrText={true}
          inputValue={fragmentAmount}
          setinputValue={(e) => {
            setFragmentAmount(e);
          }}
          titleText={t("transfer_amount")}
        ></Myinput>
        <MintBtn
          style={{
            marginLeft: "300px",
          }}
          onClick={() => {}}
        >
          transfer
        </MintBtn>
        <Myinput
          inputValue={invitationLink}
          setinputValue={(e) => {
            setInvitationLink(e);
          }}
          titleText={t("invitation_link")}
          buttonText={"copy"}
        ></Myinput>
        <MintBtn
          style={{
            marginLeft: "300px",
          }}
          onClick={() => {
            copyToClipboard(invitationLink);
          }}
        >
          copy
        </MintBtn>
      </Modal>
      <InviteBtn
        onClick={() => {
          setCopyShow(true);
        }}
      >
        <ImageBack>
          {[r1].map((item, i) => {
            return <img key={i} src={item} />;
          })}
        </ImageBack>
        {t("invite")}
      </InviteBtn>
    </AboutBox>
  );
}

export default About;
