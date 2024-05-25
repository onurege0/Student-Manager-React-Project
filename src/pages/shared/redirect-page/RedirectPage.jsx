import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../not-found-page/NotFoundPage";
import { useState } from "react";

const RedirectPage = () => {
  //ana sayfaya yönlendirmesi için useNavigate hookunu kullanıyoruz
  const navigate = useNavigate();
  // 5'ten 0'a sayması için useState
  const [count, setCount] = useState(5);

  useEffect(() => {
    //setInterval verilen milisaniyede bir fonksiyon çalıştırıyor, burada count - 1 çalışıyor
    const timer = setInterval(() => {
      //her saniyede count - 1 olması için:
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    //count 0 olduğunda ana sayfaya yönlendirme fonksiyonu yani navigate çalışıyor
    if (count === 0) {
      navigate("/");
    }
    //timer'ı sıfırlamak için clearInterval kullanıyoruz
    return () => clearInterval(timer);
    //dependency olarak count değişkeni veriyoruz çünkü count her değiştiğinde useEffect'in çalışmasını istiyoruz
  }, [count]);

  return (
    <div>
      <NotFoundPage />{" "}
      <p>You will be redirected to Home Page in {count} seconds....</p>
    </div>
  );
};

export default RedirectPage;
