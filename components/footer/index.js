import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-footerBg text-white mt-auto ">
      <div className="flex flex-col md:flex-row px-[100px] py-10">
        <div className="flex flex-col  md:ml-[40px] ">
          <h2 className="text-xl mt-5 mb-5 font-bold">Terappin</h2>
          <Link href="/" className={styles.link}>
            Nasıl Çalışır?
          </Link>
          <Link href="/" className={styles.link}>
            Hakkımızda
          </Link>
          <Link href="/" className={styles.link}>
            Psikologlarımı
          </Link>
          <Link href="/" className={styles.link}>
            Kurumsal
          </Link>
          <Link href="/" className={styles.link}>
            S.S.S.
          </Link>
          <Link href="/" className={styles.link}>
            Testler
          </Link>
          <Link href="/" className={styles.link}>
            Blog
          </Link>
          <Link href="/" className={styles.link}>
            Terapist <br />
            Başvurusu
          </Link>
        </div>
        <div className="flex flex-col md:ml-10 ">
          <h2 className="text-xl mt-5 mb-5 font-bold">Testler</h2>
          <Link href="/" className={styles.link}>
            Schutte Duygusal Zeka Ölçeği
          </Link>
          <Link href="/" className={styles.link}>
            Beck Depresyon Testi
          </Link>
          <Link href="/" className={styles.link}>
            Empati Ölçeği
          </Link>
          <Link href="/" className={styles.link}>
            Beyaz Ayı Supresyon Envanteri
          </Link>
          <Link href="/" className={styles.link}>
            Warwick - Edinburgh Mental İyi Oluş Ölçeği
          </Link>
          <Link href="/" className={styles.link}>
            Yeme Tutumu Testi
          </Link>
          <Link href="/" className={styles.link}>
            Liebowitz Sosyal Fobi Belirtileri Ölçeği
          </Link>
          <Link href="/" className={styles.link}>
            Beck Anksiyete Ölçeği
          </Link>
        </div>
        <div className="flex flex-col md:ml-10 ">
          <h2 className="text-xl mt-5 mb-5 font-bold">Yasal</h2>
          <Link href="/" className={styles.link}>
            Kullanıcı Sözleşmesi
          </Link>
          <Link href="/" className={styles.link}>
            Çerez ve Gizlilik Politikaları
          </Link>
          <Link href="/" className={styles.link}>
            KVKK Aydınlatma Metni
          </Link>
        </div>
        <div className="flex flex-col md:ml-10">
          <h2 className="text-xl mt-5 mb-5 font-bold ">Uygulamayı İndir</h2>
          <div>
            <Image
              alt="appStore"
              src="/images/appStore.png"
              width={150}
              height={150}
              className="mb-2"
            />
          </div>
          <div>
            <Image
              alt="googlePlay"
              src="/images/googlePlay.png"
              width={150}
              height={150}
              className="mb-2"
            />
          </div>
          <div>
            <Image
              src="/images/appGallery.png"
              alt="appGallery"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="flex flex-col md:ml-10 ">
          <h1 className="text-[40px] mt-1 mb-5 font-bold">terappin</h1>
          <div className="flex flex-row space-x-3">
            <div className="bg-socialBg w-[40px] h-[40px] rounded-full items-center flex justify-center ">
              <GrInstagram className="text-black" />
            </div>
            <div className="bg-socialBg w-[40px] h-[40px] rounded-full items-center flex justify-center ">
              <FaTwitter className="text-black" />
            </div>
            <div className="bg-socialBg w-[40px] h-[40px] rounded-full items-center flex justify-center ">
              <FaFacebookF className="text-black" />
            </div>
            <div className="bg-socialBg w-[40px] h-[40px] rounded-full items-center flex justify-center ">
              <FaLinkedinIn className="text-black" />
            </div>
            <div className="bg-socialBg w-[40px] h-[40px] rounded-full items-center flex justify-center ">
              <FaYoutube className="text-black" />
            </div>
          </div>
          <div className="mt-10">
            <div>
              <Image
                src="/images/etbis.png"
                alt="etbis"
                width={80}
                height={80}
              />
            </div>
            <br />
            <div>Copyright @ 2023</div> <br />
            <div className="text-[13px]">
              Terappin Teknoloji A.Ş. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 pb-10">
        <div className="md:ml-[80px] ">
          <Image src="/images/ssl.png" alt="ssl" width={150} height={50} />
        </div>
        <div className="md:mr-[80px] m-[15px]">
          <Image
            src="/images/bitmap.png"
            alt="bitmap"
            width={500}
            height={500}
          />
        </div>
      </div>
    </footer>
  );
}
