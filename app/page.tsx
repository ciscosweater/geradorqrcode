import QRCodeGenerator from './pages/qrcode';
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <QRCodeGenerator />
    </div>
  )
}
