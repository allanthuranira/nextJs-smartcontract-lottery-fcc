import Head from "next/head"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader.jsx"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart contract Lottery</title>
                <meta name="description" content="smart contract lottery app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </>
    )
}
