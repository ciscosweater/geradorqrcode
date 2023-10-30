// pages/QRCode.js
'use client';
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styles from "@/app/styles/qrcode.module.css"

function QRCodeGenerator() {
  const [text, setText] = useState(''); // O texto que você deseja codificar no QR code

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu texto ou URL aqui."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles.qrcode}>
        { text ?
        <QRCode
        value={text}
        size={512} // Tamanho do QR Code
        level={'H'} // Nível de correção de erro (L, M, Q, H)
        />
        :
        <p>Insira um texto ou link para gerar.</p>
        }
        {/* {text && (
          <QRCode
            value={text}
            size={512} // Tamanho do QR Code
            level={'H'} // Nível de correção de erro (L, M, Q, H)
          />
        )} */}
      </div>
    </div>
  );
}

export default QRCodeGenerator;