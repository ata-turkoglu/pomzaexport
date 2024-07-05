import React from "react";

function About() {
    return (
        <div
            className="flex flex-col justify-center items-center h-screen relative overflow-hidden"
            style={{
                backgroundImage: "url(/assets/common/pattern.jpg)",
            }}
        >
            <div
                className="absolute w-full h-full left-0 right-0"
                style={{
                    /* backgroundImage:
                        "linear-gradient(to bottom, #252525, #555555, #8a8a8a, #c3c3c3, #ffffff)", */
                    backgroundColor: "#252525",
                    opacity: ".7",
                }}
            ></div>
            <div className="md:w-2/3 w-full z-10 text-justify text-blue-gray-50 md:mt-32 md:mx-auto mt-24 px-5 pb-60 absolute left-0 right-0 top-0 h-full overflow-scroll">
                <p className="mb-2">
                    Şirketimiz, Erzincan da 1969 yılında perlit madeni
                    işletmesiyle başladığı endüstriyel hammadde üretimini bugün;
                    İzmir-Menderes, Manisa-Salihli-Sart, Hatay-Merkez, Erzincan
                    Refahiye olmak üzere sürdürmektedir.
                </p>
                <p className="mb-2">
                    Şirketimiz Perlit üretimine; Kuvars, Kuvarsit, Pomza,
                    Mikronize Pomza, Hematit, Rutil, Barit, Kurşun, Çinko,
                    Manyezit ve Altın maden üretimlerini de ilave ederek
                    madencilik sektöründe Türkiye'nin sayılı yerli üreticileri
                    arasında yerini almıştır.
                </p>
                <p className="mb-2">
                    Pomza Export A.Ş. Salihli Sart bölgesinde kurduğu plaser
                    madeni işletmesi %100 yerli sermaye ve teknoloji kullanılmak
                    suretiyle sektörde ilk altın üreten yerli firma olmuştur.
                    Madencilik sektöründe 40 yılı aşkın elde ettiği tecrübesini
                    inşaat sektörüne ileri teknoloji ve çevreci malzemeler
                    üretmekte kullanan POMZA EXPORT A.Ş. bu maksatla; PERSAN
                    markasıyla perlit beton kiremidi ve EILE POMEX markasıyla
                    ileri teknoloji yapı kimyasallarını inşaat sektörüne
                    kazandırmıştır. Şirketin hedefi; faaliyette bulunduğumuz
                    sektörlerde pazarın beklentilerine cevap verebilecek;
                    koşulsuz müşteri memnuniyeti veren, kaliteli, çevreci, ileri
                    teknoloji ürünler üretmek ve kendini sürekli yinelemektir.
                </p>
                <p className="mb-2">
                    Sart Plaser işletmemiz; Salihli-İzmir karayolu üzerinde
                    Salihli'den sonra 10 km mesafedeki Sart Kasabasının hemen
                    yakınında yer almıştır.
                </p>
                <p className="mb-2">
                    Şirketimiz Sart İşletmesinin bulunduğu bölgede Sardes Antik
                    Kenti MÖ 2000'lere Lidya devletine başkentlik yapmıştır.
                    Sardes tarihte ilk paranın basıldığı yer olarak
                    bilinmektedir.
                </p>
                <p className="mb-2">
                    Sardes aynı zamanda tarihteki ünlü Kral Yolunun başlangıcı
                    olarak da bilinmektedir. Uzun süre değerli taş olarak
                    kullanılmış turuncu kuvars taşının Batı dillerindeki ismi
                    olan ve "sard" kelimesi, taşın antik çağda çıkarıldığı Sart
                    bölgesinden gelmektedir.
                </p>
                <p className="mb-2">
                    Pomza Export firması Dünyada plaser yataklarda olduğu gibi
                    Sart Bölgesindeki plaser yatak içindeki ağır metallerin de
                    kazanılması gerektiği üzerinde durmuş, çalışmalarını bu
                    yönde yapmıştır. Yapılan analizlerden plaser yatakta altının
                    yanı sıra rutil, zirkon, kasiterit, liminit, ilmenit,
                    hemeatit, almandin gibi mineraller içerdiği bunların da
                    kazanılabileceğini belirlemiştir. Yapılmış çok sayıda
                    araştırmalar sonrası 2002 yılında şirketimiz tarafından
                    işletmede cevher hazırlama tesisi kurulmuştur. Bu tesiste
                    plaser yataktaki ağır mineraller ağır mineraller ekonomiye
                    kazandırılmaktadır.
                </p>
                <p className="mb-2">
                    Sart Cevher Zenginleştirme Tesisi; ülkemizde plaser bir
                    ocağın işletilmesine yönelik kurulu bulunan en önemli cevher
                    hazırlama tesislerinden biridir. Bu tesis Türkiye'de ve
                    Dünyada az benzeri olan sıfır deşarj olarak ifade edilen,
                    üretilen beton madenin değerlendirildiği, ülkemizin
                    Madencilik Vizyonu tanımı kapsamında ürettiklerinin tamamını
                    uç ürünlere dönüştürme gayreti içinde bir şirket anlayışı
                    ile çalışan{" "}
                    <strong>
                        Dünya madenciliği için de örnek olma yolunda bir
                        tesistir.
                    </strong>
                </p>
                <p className="mb-2">
                    Eile kimyasallarında Sart ve Menderes işletmelerimizde
                    üretilen ağır mineral, mikronize kuvars ve öğütülmüş pomza
                    kullanılmaktadır.
                </p>
                <p>
                    Sart tesisinde plaser yatak içindeki kuvars mineralleri
                    öğütülerek mikronize kuvars üretilmektedir. Plaser yatak
                    içindeki küçük boyutlu kuvars parçalarının da ayrılarak
                    mikronize kuvars üretimi için tesiste optik ayırıca
                    kurulmuştur.
                </p>
            </div>
        </div>
    );
}

export default About;
