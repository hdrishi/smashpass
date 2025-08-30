import Image from "next/image";
import styles from "./page.module.css";
import TestPage from "./TestPage";

export default function Home() {
  return <TestPage firstname="Hrishikesh" lastname="Das" />;
}
