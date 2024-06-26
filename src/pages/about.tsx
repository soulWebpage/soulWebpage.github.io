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

function About(props: {
  mint: any;
  synthesisHandle: any;
  mintAmount: any;
  synthesisAmount: any;
  currentFragmentAmount: any;
  getFragmentAmount: any;
  transfer: any;
  privateAddress: any;
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const [mintSliderShow, setMintSliderShow] = useState(false);
  const [synthesisSliderShow, setSynthesisSliderShow] = useState(false);
  const [mintValue, setMintValue] = useState(0);
  const [synthesisValue, setSynthesisValue] = useState(0);
  const isPhone = window.innerWidth < 768;

  const [transferAddress, setTransferAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [fragmentAmount, setFragmentAmount] = useState("");
  const [invitationLink, setInvitationLink] = useState(
    "https://soulappweb3.com/#/NFT"
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
        <CardBox
          style={{
            width: "49%",
            margin: "0%",
          }}
        >
          <ImageBack>
            {[ur, sr1, sr2, sr3, sr4, ssr1].map((item, i) => {
              return <img key={i} src={item} />;
            })}
          </ImageBack>
          <CardItem>
            <div className="left">{t("Circulation")}</div>
            <div className="right">{5000}</div>
          </CardItem>
          <CardItem>
            <div className="left">{t("Number of MINTs")}</div>
            <div className="right">{5000}</div>
          </CardItem>{" "}
          {/* <CardItem>
            <div className="left">{t("Fragment Synthesis Quantity")}</div>
            <div className="right">{1000}</div>
          </CardItem>{" "} */}
          <CardItem>
            <div className="left">{t("Release Time")}</div>
            <div className="right">2024.4.1 13:00UTC</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">{t("Blockchain")}</div>
            <div className="right">Solana</div>
          </CardItem>
        </CardBox>
        <CardBox
          style={{
            width: "49%",
            margin: "0%",
          }}
        >
          <ImageBack>
            {[ssr1, ssr2, r1, r2, r3, r4].map((item, i) => {
              return <img key={i} src={item} />;
            })}
          </ImageBack>
          <CardTitle>{t("number of mints")}</CardTitle>
          <CardItem>
            <div className="left">R</div>
            <div className="right">{3000}</div>
          </CardItem>
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
        {/* <CardBox>
          <ImageBack>
            {[r1, r2, r3, r4, r5, r6].map((item, i) => {
              return <img key={i} src={item} />;
            })}
          </ImageBack>
          <CardTitle>{t("Synthetic nft quantity")}</CardTitle>
          <CardItem>
            <div className="left">SR</div>
            <div className="right">{750}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">SSR</div>
            <div className="right">{200}</div>
          </CardItem>{" "}
          <CardItem>
            <div className="left">UR</div>
            <div className="right">{50}</div>
          </CardItem>
        </CardBox> */}
      </CardListBox>
      <BtnBox>
        <BtnItem>
          <ProgressBar value={0} maxValue={100}></ProgressBar>
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
        {/* <BtnItem>
          <ProgressBar
            value={props.synthesisAmount}
            maxValue={100}
          ></ProgressBar>
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
        </BtnItem> */}
      </BtnBox>
      <CardBox
        style={{
          margin: " 20px auto",
          background: "rgba(0,0,0,0)",
        }}
      >
        <CardTitle>{t("mint Notice")}</CardTitle>
        <CardText>Total amount of tokens: 100,000,000</CardText>
        <CardText>mint payment method: $Soul</CardText>{" "}
        <CardText>Notes on mint</CardText>{" "}
        <CardText>Mint unit price: 10000$Soul</CardText>{" "}
        <CardText>The maximum single quantity of mint is 10</CardText>
        <CardText>nft quantity: 5000</CardText>
        <CardText>The soul tokens obtained by mint will be destroyed.</CardText>
      </CardBox>
      {/* <CardBox
        style={{
          margin: " 20px auto",
          background: "rgba(0,0,0,0)",
        }}
      >
        <CardTitle>{t("Invitation Notice")}</CardTitle>
        <CardText>{t("InvitationText")}</CardText>
      </CardBox> */}
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
            max={20}
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
            display: "block",
            margin: "20px auto 0",
          }}
          onClick={() => {
            if (mintSliderShow) {
              props.mint(mintValue);
            } else {
              props.synthesisHandle(synthesisValue);
            }
          }}
        >
          NEXT
        </MintBtn>
      </Modal>
      <Modal
        width={isPhone ? "90%" : "60%"}
        isOpen={copyShow}
        onClose={function (): void {
          setCopyShow(false);
        }}
      >
        <Myinput
          inputValue={props.currentFragmentAmount}
          setinputValue={(e) => {
            setFragmentAmount(e);
          }}
          titleText={t("fragment_amount")}
          buttonText={""}
        ></Myinput>
        <Myinput
          inputOrText={true}
          inputValue={transferAddress}
          setinputValue={(e) => {
            setTransferAddress(e);
          }}
          titleText={t("transfer_address")}
          buttonText={""}
        ></Myinput>
        <Myinput
          inputOrText={true}
          inputValue={transferAmount}
          setinputValue={(e) => {
            setTransferAmount(e);
          }}
          titleText={t("transfer_amount")}
        ></Myinput>
        <MintBtn
          style={{
            marginLeft: isPhone ? "0" : "300px",
          }}
          onClick={() => {
            props.transfer(transferAddress, transferAmount);
          }}
        >
          transfer
        </MintBtn>
        <Myinput
          inputValue={invitationLink}
          setinputValue={(e) => {
            console.log(23242);
            setInvitationLink(e);
          }}
          titleText={t("invitation_link")}
          buttonText={"copy"}
        ></Myinput>
        <MintBtn
          style={{
            marginLeft: isPhone ? "0" : "300px",
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
          props.getFragmentAmount();
          setInvitationLink(
            "https://soulappweb3.com/#/NFT" + "#" + props.privateAddress
          );
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
