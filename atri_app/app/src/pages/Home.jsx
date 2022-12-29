import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Testimonial } from "@atrilabs/react-component-manifests/src/manifests/Testimonial/Testimonial.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { useFlex1Cb, useFlex2Cb, useNavCb, usedesign_containerCb, usedesignCb, usetext_containerCb, useFlex9Cb, useDiv5Cb, useintr_pCb, usebutton_divCb, useDiv78Cb, useDiv10Cb, useDiv11Cb, useDiv12Cb, useDiv13Cb, usefeature_containerCb, useFlex11Cb, useDiv24Cb, useDiv29Cb, useDiv30Cb, useprojectsCb, useDiv31Cb, useDiv33Cb, useDiv34Cb, useDiv32Cb, useFlex21Cb, useDiv35Cb, useDiv39Cb, useDiv40Cb, useDiv41Cb, useDiv42Cb, useDiv47Cb, useDiv46Cb, useDiv43Cb, useDiv44Cb, useDiv45Cb, useFlex25Cb, useDiv57Cb, useDiv58Cb, useDiv59Cb, useDiv60Cb, useFlex26Cb, useDiv61Cb, useDiv62Cb, useDiv75Cb, useDiv76Cb, useDiv77Cb, useDiv74Cb, useImage1Cb, useLink1Cb, useLink2Cb, useLink3Cb, useLink4Cb, useLink5Cb, useTextBox29Cb, useTextBox28Cb, useImage2Cb, useTextBox30Cb, useButton1Cb, useButton2Cb, useTextBox31Cb, useImage3Cb, useImage4Cb, useImage5Cb, useImage6Cb, useTextBox32Cb, useTextBox33Cb, useicon1Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useTextBox43Cb, useImage8Cb, useImage9Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useTextBox50Cb, useTextBox49Cb, useButton3Cb, useImage11Cb, useLink6Cb, useLink7Cb, useLink8Cb, useImage12Cb, useLink9Cb, useLink10Cb, useLink11Cb, useTextBox53Cb, useTextBox56Cb, useTestimonial3Cb, useTextBox58Cb, useTextBox59Cb, useAccordion2Cb, useAccordion15Cb, useAccordion16Cb, useAccordion17Cb, useAccordion3Cb, useAccordion18Cb, useAccordion19Cb, useAccordion20Cb, useTextBox60Cb, useTextBox61Cb, useImage17Cb, useTextBox62Cb, useTextBox63Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const NavProps = useStore((state)=>state["Home"]["Nav"]);
const NavIoProps = useIoStore((state)=>state["Home"]["Nav"]);
const NavCb = useNavCb()
const design_containerProps = useStore((state)=>state["Home"]["design_container"]);
const design_containerIoProps = useIoStore((state)=>state["Home"]["design_container"]);
const design_containerCb = usedesign_containerCb()
const designProps = useStore((state)=>state["Home"]["design"]);
const designIoProps = useIoStore((state)=>state["Home"]["design"]);
const designCb = usedesignCb()
const text_containerProps = useStore((state)=>state["Home"]["text_container"]);
const text_containerIoProps = useIoStore((state)=>state["Home"]["text_container"]);
const text_containerCb = usetext_containerCb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const intr_pProps = useStore((state)=>state["Home"]["intr_p"]);
const intr_pIoProps = useIoStore((state)=>state["Home"]["intr_p"]);
const intr_pCb = useintr_pCb()
const button_divProps = useStore((state)=>state["Home"]["button_div"]);
const button_divIoProps = useIoStore((state)=>state["Home"]["button_div"]);
const button_divCb = usebutton_divCb()
const Div78Props = useStore((state)=>state["Home"]["Div78"]);
const Div78IoProps = useIoStore((state)=>state["Home"]["Div78"]);
const Div78Cb = useDiv78Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const feature_containerProps = useStore((state)=>state["Home"]["feature_container"]);
const feature_containerIoProps = useIoStore((state)=>state["Home"]["feature_container"]);
const feature_containerCb = usefeature_containerCb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const projectsProps = useStore((state)=>state["Home"]["projects"]);
const projectsIoProps = useIoStore((state)=>state["Home"]["projects"]);
const projectsCb = useprojectsCb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div57Props = useStore((state)=>state["Home"]["Div57"]);
const Div57IoProps = useIoStore((state)=>state["Home"]["Div57"]);
const Div57Cb = useDiv57Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Div59Props = useStore((state)=>state["Home"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["Home"]["Div59"]);
const Div59Cb = useDiv59Cb()
const Div60Props = useStore((state)=>state["Home"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["Home"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const Div62Props = useStore((state)=>state["Home"]["Div62"]);
const Div62IoProps = useIoStore((state)=>state["Home"]["Div62"]);
const Div62Cb = useDiv62Cb()
const Div75Props = useStore((state)=>state["Home"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Div77Props = useStore((state)=>state["Home"]["Div77"]);
const Div77IoProps = useIoStore((state)=>state["Home"]["Div77"]);
const Div77Cb = useDiv77Cb()
const Div74Props = useStore((state)=>state["Home"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["Home"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Link2Props = useStore((state)=>state["Home"]["Link2"]);
const Link2IoProps = useIoStore((state)=>state["Home"]["Link2"]);
const Link2Cb = useLink2Cb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const Link4Props = useStore((state)=>state["Home"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["Home"]["Link4"]);
const Link4Cb = useLink4Cb()
const Link5Props = useStore((state)=>state["Home"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["Home"]["Link5"]);
const Link5Cb = useLink5Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const icon1Props = useStore((state)=>state["Home"]["icon1"]);
const icon1IoProps = useIoStore((state)=>state["Home"]["icon1"]);
const icon1Cb = useicon1Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Link6Props = useStore((state)=>state["Home"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["Home"]["Link6"]);
const Link6Cb = useLink6Cb()
const Link7Props = useStore((state)=>state["Home"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["Home"]["Link7"]);
const Link7Cb = useLink7Cb()
const Link8Props = useStore((state)=>state["Home"]["Link8"]);
const Link8IoProps = useIoStore((state)=>state["Home"]["Link8"]);
const Link8Cb = useLink8Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()
const Link10Props = useStore((state)=>state["Home"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["Home"]["Link10"]);
const Link10Cb = useLink10Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Testimonial3Props = useStore((state)=>state["Home"]["Testimonial3"]);
const Testimonial3IoProps = useIoStore((state)=>state["Home"]["Testimonial3"]);
const Testimonial3Cb = useTestimonial3Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Accordion2Props = useStore((state)=>state["Home"]["Accordion2"]);
const Accordion2IoProps = useIoStore((state)=>state["Home"]["Accordion2"]);
const Accordion2Cb = useAccordion2Cb()
const Accordion15Props = useStore((state)=>state["Home"]["Accordion15"]);
const Accordion15IoProps = useIoStore((state)=>state["Home"]["Accordion15"]);
const Accordion15Cb = useAccordion15Cb()
const Accordion16Props = useStore((state)=>state["Home"]["Accordion16"]);
const Accordion16IoProps = useIoStore((state)=>state["Home"]["Accordion16"]);
const Accordion16Cb = useAccordion16Cb()
const Accordion17Props = useStore((state)=>state["Home"]["Accordion17"]);
const Accordion17IoProps = useIoStore((state)=>state["Home"]["Accordion17"]);
const Accordion17Cb = useAccordion17Cb()
const Accordion3Props = useStore((state)=>state["Home"]["Accordion3"]);
const Accordion3IoProps = useIoStore((state)=>state["Home"]["Accordion3"]);
const Accordion3Cb = useAccordion3Cb()
const Accordion18Props = useStore((state)=>state["Home"]["Accordion18"]);
const Accordion18IoProps = useIoStore((state)=>state["Home"]["Accordion18"]);
const Accordion18Cb = useAccordion18Cb()
const Accordion19Props = useStore((state)=>state["Home"]["Accordion19"]);
const Accordion19IoProps = useIoStore((state)=>state["Home"]["Accordion19"]);
const Accordion19Cb = useAccordion19Cb()
const Accordion20Props = useStore((state)=>state["Home"]["Accordion20"]);
const Accordion20IoProps = useIoStore((state)=>state["Home"]["Accordion20"]);
const Accordion20Cb = useAccordion20Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()

  return (<>
  <Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex>
<Div className="p-Home Nav bpt" {...NavProps} {...NavCb} {...NavIoProps}>
<Link className="p-Home Link1 bpt" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
<Link className="p-Home Link2 bpt" {...Link2Props} {...Link2Cb} {...Link2IoProps}/>
<Link className="p-Home Link3 bpt" {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
<Link className="p-Home Link4 bpt" {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
<Link className="p-Home Link5 bpt" {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
</Div>
</Flex>
<Div className="p-Home design_container bpt" {...design_containerProps} {...design_containerCb} {...design_containerIoProps}>
<Flex className="p-Home design bpt" {...designProps} {...designCb} {...designIoProps}>
<Div className="p-Home text_container bpt" {...text_containerProps} {...text_containerCb} {...text_containerIoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Div>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home intr_p bpt" {...intr_pProps} {...intr_pCb} {...intr_pIoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Div>
<Div className="p-Home button_div bpt" {...button_divProps} {...button_divCb} {...button_divIoProps}>
<Div className="p-Home Div78 bpt" {...Div78Props} {...Div78Cb} {...Div78IoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Div>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Div>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Div>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Div>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Div>
<Div className="p-Home feature_container bpt" {...feature_containerProps} {...feature_containerCb} {...feature_containerIoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<Image className="p-Home icon1 bpt" {...icon1Props} {...icon1Cb} {...icon1IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Div>
</Flex>
</Div>
<Flex className="p-Home projects bpt" {...projectsProps} {...projectsCb} {...projectsIoProps}>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Div>
</Div>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Div className="p-Home Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Link className="p-Home Link6 bpt" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
</Div>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<Link className="p-Home Link7 bpt" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
</Div>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<Link className="p-Home Link8 bpt" {...Link8Props} {...Link8Cb} {...Link8IoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Div className="p-Home Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<Link className="p-Home Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
</Div>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<Link className="p-Home Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Div>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<Link className="p-Home Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
</Div>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Div className="p-Home Div57 bpt" {...Div57Props} {...Div57Cb} {...Div57IoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<Testimonial className="p-Home Testimonial3 bpt" {...Testimonial3Props} {...Testimonial3Cb} {...Testimonial3IoProps}/>
</Div>
<Div className="p-Home Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Div>
<Div className="p-Home Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<Accordion className="p-Home Accordion2 bpt" {...Accordion2Props} {...Accordion2Cb} {...Accordion2IoProps}/>
<Accordion className="p-Home Accordion15 bpt" {...Accordion15Props} {...Accordion15Cb} {...Accordion15IoProps}/>
<Accordion className="p-Home Accordion16 bpt" {...Accordion16Props} {...Accordion16Cb} {...Accordion16IoProps}/>
<Accordion className="p-Home Accordion17 bpt" {...Accordion17Props} {...Accordion17Cb} {...Accordion17IoProps}/>
</Div>
<Div className="p-Home Div62 bpt" {...Div62Props} {...Div62Cb} {...Div62IoProps}>
<Accordion className="p-Home Accordion3 bpt" {...Accordion3Props} {...Accordion3Cb} {...Accordion3IoProps}/>
<Accordion className="p-Home Accordion18 bpt" {...Accordion18Props} {...Accordion18Cb} {...Accordion18IoProps}/>
<Accordion className="p-Home Accordion19 bpt" {...Accordion19Props} {...Accordion19Cb} {...Accordion19IoProps}/>
<Accordion className="p-Home Accordion20 bpt" {...Accordion20Props} {...Accordion20Cb} {...Accordion20IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}/>
<Div className="p-Home Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Div>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Div>
<Div className="p-Home Div77 bpt" {...Div77Props} {...Div77Cb} {...Div77IoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Div>
  </>);
}
