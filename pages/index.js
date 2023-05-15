import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Common/Layout";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div style={{ height: "1000px", color: "#000" }}>Hoome page</div>
    </Layout>
  );
}
