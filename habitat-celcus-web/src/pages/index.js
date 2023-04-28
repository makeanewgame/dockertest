import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "@/components/carousel";
import Button from "@/components/button";
import Link from "next/link";
import ServiceCarousel from "@/components/serviceCarousel";

const inter = Inter({ subsets: ["latin"] });

const ListItem = (props) => {
  const { value } = props;

  return (
    <div className="flex">
      <Image src={"/checkmark.svg"} width={24} height={24} alt="checkmark" />
      <span>{value}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between mt-8 mb-8">
        <Carousel />
        <div className="p-8">
          <div className="flex">
            <span className="text-gray-600 text-4xl">İhtiyacın olan</span>
            &nbsp;
            <span className="text-gray-300  text-4xl font-extralight ">
              her şey
            </span>
          </div>
          <span className="font-serif text-6xl text-gray-700">
            Habitat Celsus&apos;da
          </span>
          <div className="flex mt-4">
            <span className="font-extralight text-gray-400 text-base ">
              Habitat;
            </span>
            &nbsp;
            <span className="font-thin text-gray-300 text-base">
              Paylaşımlı Ofis & Yaşam Alanı
            </span>
          </div>

          <div className="flex gap-2 mt-8">
            <Button apperance={"primary"}>Ofis Turu Planla</Button>
            <Button apperance={"line"}>Seni Arayalım</Button>
          </div>
        </div>
        <div className="flex">
          <Image
            src={"/social-seperator.png"}
            width={5}
            height={50}
            style={{
              objectFit: "contain",
            }}
            alt="custom prop"
          />

          <div className="flex flex-col gap-4 justify-center mt-8 m-8">
            <Link href={"#"} target="_blank">
              <Image
                className="fill-gray-600"
                src={"/facebook-or.svg"}
                alt="facebook icon"
                width={24}
                height={24}
              />
            </Link>

            <Link href={"#"} target="_blank">
              <Image
                src={"/instagram-or.svg"}
                alt="facebook icon"
                width={24}
                height={24}
              />
            </Link>

            <Link href={"#"} target="_blank">
              <Image
                src={"/linkedin-or.svg"}
                alt="facebook icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 bg-gray-300 p-16 text-center">Sabit Masa</div>
        <div className="flex-1 bg-gray-300 p-16 text-center">Hazır Ofis</div>
        <div className="flex-1 bg-gray-300 p-16 text-center">Gezgin Üye</div>
        <div className="flex-1 bg-gray-300 p-16 text-center">Sanal Ofis</div>
      </div>

      <div className="flex container mt-16">
        <div className="flex-1 p-8">
          <span className="font-serif text-gray-400 text-lg">
            Habitat Celsus
          </span>
          <h2 className="font-serif text-black text-4xl">
            Yeni Nesil Paylaşımlı Ofis & <br /> Yaşam Alanı
          </h2>
          <Image src={"/dot.svg"} alt="dot" width={24} height={24} />
          <p className="text-gray-400 font-light">
            Celsus ismi Antik Çağ’ın en büyük üçüncü kütüphanesinden gelir.
            Vizyonumuz, kütüphanenin ruhundan ve manifestosundan da hareketle;
            “bilgelik, bilgi, erdem, zekâ” kavramları ışığında sürekli gelişme,
            geliştirme, paylaşma, öğrenme ve sürdürülebilirlik temeline dayanır.
            Biz de bu vizyon ile yola çıkıp bu yaşam alanını tasarladık.
          </p>
          <div className="flex mt-4 gap-4">
            <div className="flex flex-col gap-2">
              <ListItem value={"Networking Fırsatları"} />
              <ListItem value={"Modern Tasarım"} />
              <ListItem value={"Toplantı Alanları"} />
            </div>
            <div className="flex flex-col gap-2">
              <ListItem value={"Maksimum Verimlilik"} />
              <ListItem value={"Erişilebilirlik"} />
              <ListItem value={"Sürdürebilirlik"} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={"/habitat/meetingroom/meetingroom.jpg"}
            alt="video"
            width={589}
            height={400}
          />
        </div>
      </div>

      {/* Size Özel Ayrıcalıklar */}

      <div className="flex flex-col bg-gray-100 mt-16">
        <div className="container block">
          <div className="mt-4 mb-4">
            <h2
              className="font-serif text-3xl text-gray-600 inline-block"
              style={{ height: 32 }}
            >
              Size Özel <span className="text-gray-400">Ayrıcalıklar</span>
            </h2>
            <Image
              src={"/dot-gray.svg"}
              width={24}
              height={24}
              alt="gray-dot"
              className="inline-block"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex">
            <div className="basis-1/2">
              <Image
                src={"/habitat/office-001.jpg"}
                width={590}
                height={345}
                alt="office"
                style={{
                  marginBottom: -50,
                }}
              />
            </div>

            <div className="flex flex-col p-8 basis-1/2">
              <h3 className="font-serif text-3xl mb-4">Habitat Celsus</h3>
              <p className="text-gray-400 font-light">
                Ankaranın en prestijli konumunda, yeni nesil kolektif çalışma
                düzeninde, ister tek başınıza, ister ekibinizle Celsus
                Habitat’ın bütün ayrıcalıklarından yararlanabilirsiniz. Çalışma
                hayatında ihtiyaç duyduklarınıza ‘’maksimum verimlilik’’
                ilkesiyle yanıt veriyor, sizler için kurduğumuz bu düzende
                keyifle çalışmanızı sağlıyoruz.
              </p>

              <Button apperance={"default"} className="p-0 mt-4">
                <div className="flex text-sm">
                  Daha fazlası
                  <Image
                    src={"/arrow-right.svg"}
                    width={24}
                    height={24}
                    alt="arrow right"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20">
        <div className="container block mt-10">
          <div className="flex flex-row-reverse">
            <div className="basis-1/2">
              <Image
                src={"/habitat/office-001.jpg"}
                width={590}
                height={345}
                alt="office"
              />
            </div>

            <div className="flex flex-col p-8 basis-1/2 text-end">
              <h3 className="font-serif text-3xl mb-4">Habitat Celsus</h3>
              <p className="text-gray-400 font-light">
                Çalışma hayatının tüm ihtiyaçlarına “maksimum verimlilik”
                ilkesiyle yanıt veren Celsus Habitat, üyelerine ayrıcalıklı bir
                iş/yaşam deneyimi sunmaktadır. Çalışma hayatının tüm
                ihtiyaçlarına “maksimum verimlilik” ilkesiyle yanıt veren Celsus
                Habitat, üyelerine ayrıcalıklı bir iş/yaşam deneyimi sunmaktadır
                hayatının tüm ihtiyaçlarına “maksimum verimlilik” ilkesiyle
                yanıt veren
              </p>

              <Button apperance={"default"} className="p-0 mt-4 self-end">
                <div className="flex text-sm">
                  Daha fazlası
                  <Image
                    src={"/arrow-right.svg"}
                    width={24}
                    height={24}
                    alt="arrow right"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ServiceCarousel />

      {/* Etlinlikler */}

      <div className="flex flex-col mt-16">
        <div className="container block">
          <div className="mt-4 mb-4">
            <h2
              className="font-serif text-3xl text-gray-800 inline-block mb-14"
              style={{ height: 32 }}
            >
              Etkinlikler
            </h2>
            <Image
              src={"/dot.svg"}
              width={24}
              height={24}
              alt="gray-dot"
              className="inline-block"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex">
            <div className="basis-1/2">
              <Image
                src={"/habitat/office-001.jpg"}
                width={590}
                height={345}
                alt="office"
                style={{
                  marginTop: -40,
                  marginBottom: 30,
                }}
              />
            </div>

            <div
              className="bg-white drop-shadow basis-3/5 rounded-md"
              style={{ marginLeft: -40 }}
            >
              <div className="flex flex-col p-8  ">
                <h3 className="font-serif text-3xl mb-4">
                  Networking Buluşmaları
                </h3>
                <p className="text-gray-400 font-light">
                  Çalışma hayatının tüm ihtiyaçlarına “maksimum verimlilik”
                  ilkesiyle yanıt veren Celsus Habitat, üyelerine ayrıcalıklı
                  bir iş/yaşam deneyimi sunmaktadır. Çalışma hayatının tüm
                  ihtiyaçlarına “maksimum verimlilik” ilkesiyle yanıt veren
                  Celsus Habitat, üyelerine ayrıcalıklı bir iş/yaşam deneyimi
                  sunmaktadır
                </p>

                <div className="flex gap-4">
                  <Button apperance={"primary"} className="p-0 mt-4">
                    Etkinlik Düzenle
                  </Button>
                  <Button apperance={"line"} className="p-0 mt-4">
                    Seni Arayalım
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-20 gap-4">
            <div className="basis-1/2 flex-col">
              <div className="relative h-80">
                <Image
                  src={"/habitat/office-001.jpg"}
                  className="absolute z-10"
                  fill
                  alt="office"
                  style={{
                    objectFit: "fill",
                  }}
                />
              </div>

              <div className="">
                <h3 className="bg-gray-200 font-serif text-gray-700 text-3xl pb-3 px-2">
                  Seminer & Söyleşi
                </h3>
                <p className="p-4 bg-white font-light text-gray-500 rounded-sm drop-shadow-sm">
                  Çalışma hayatının tüm ihtiyaçlarına “maksimum verimlilik”
                  ilkesiyle yanıt veren Celsus Habitat, üyelerine ayrıcalıklı
                  bir iş/yaşam deneyimi sunmaktadır. Çalışma hayatının tüm
                  ihtiyaçlarına “maksimum verimlilik” ilkesiyle yanıt veren
                  Celsus Habitat, üyelerine ayrıcalıklı bir iş/yaşam deneyimi
                  sunmaktadır
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex-col">
              <div className="relative h-80">
                <Image
                  src={"/habitat/office-001.jpg"}
                  className="absolute z-10"
                  fill
                  alt="office"
                  style={{
                    objectFit: "fill",
                  }}
                />
              </div>

              <div className="">
                <h3 className="bg-gray-200 font-serif text-gray-700 text-3xl pb-3 px-2">
                  Workshop & Eğitimler
                </h3>
                <p className="p-4 bg-white font-light text-gray-500 rounded-sm drop-shadow-sm">
                  Çalışma hayatının tüm ihtiyaçlarına “maksimum verimlilik”
                  ilkesiyle yanıt veren Celsus Habitat, üyelerine ayrıcalıklı
                  bir iş/yaşam deneyimi sunmaktadır. Çalışma hayatının tüm
                  ihtiyaçlarına “maksimum verimlilik” ilkesiyle yanıt veren
                  Celsus Habitat, üyelerine ayrıcalıklı bir iş/yaşam deneyimi
                  sunmaktadır
                </p>
              </div>
            </div>
          </div>
          <div className="flex self-center justify-center mt-10 mb-10">
            <Button apperance={"primary"}>Etkinlik Düzenle</Button>
          </div>
        </div>
      </div>

      {/* Faydalar */}

      <div className="flex flex-col bg-gray-100 mt-16">
        <div className="container block">
          <div className="mt-4 mb-4">
            <h2
              className="font-serif text-3xl text-gray-600 inline-block"
              style={{ height: 32 }}
            >
              Faydalar
            </h2>
            <Image
              src={"/dot-gray.svg"}
              width={24}
              height={24}
              alt="gray-dot"
              className="inline-block"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex">
            <div className="basis-1/2">
              <Image
                src={"/habitat/office-001.jpg"}
                width={590}
                height={345}
                alt="office"
                style={{
                  marginBottom: -50,
                }}
              />
            </div>

            <div className="flex flex-col p-8 basis-1/2">
              <h3 className="font-serif text-3xl mb-4">Habitat Celsus</h3>
              <p className="text-gray-400 font-light">
                Ankaranın en prestijli konumunda, yeni nesil kolektif çalışma
                düzeninde, ister tek başınıza, ister ekibinizle Celsus
                Habitat’ın bütün ayrıcalıklarından yararlanabilirsiniz. Çalışma
                hayatında ihtiyaç duyduklarınıza ‘’maksimum verimlilik’’
                ilkesiyle yanıt veriyor, sizler için kurduğumuz bu düzende
                keyifle çalışmanızı sağlıyoruz.
              </p>

              <Button apperance={"default"} className="p-0 mt-4">
                <div className="flex text-sm">
                  Daha fazlası
                  <Image
                    src={"/arrow-right.svg"}
                    width={24}
                    height={24}
                    alt="arrow right"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20">
        <div className="container block mt-10">
          <div className="flex flex-row-reverse">
            <div className="basis-1/2">
              <Image
                src={"/habitat/office-001.jpg"}
                width={590}
                height={345}
                alt="office"
              />
            </div>

            <div className="flex flex-col p-8 basis-1/2 text-end">
              <h3 className="font-serif text-3xl mb-4">Habitat Celsus</h3>
              <p className="text-gray-400 font-light">
                Çalışma hayatının tüm ihtiyaçlarına “maksimum verimlilik”
                ilkesiyle yanıt veren Celsus Habitat, üyelerine ayrıcalıklı bir
                iş/yaşam deneyimi sunmaktadır. Çalışma hayatının tüm
                ihtiyaçlarına “maksimum verimlilik” ilkesiyle yanıt veren Celsus
                Habitat, üyelerine ayrıcalıklı bir iş/yaşam deneyimi sunmaktadır
                hayatının tüm ihtiyaçlarına “maksimum verimlilik” ilkesiyle
                yanıt veren
              </p>

              <Button apperance={"default"} className="p-0 mt-4 self-end">
                <div className="flex text-sm">
                  Daha fazlası
                  <Image
                    src={"/arrow-right.svg"}
                    width={24}
                    height={24}
                    alt="arrow right"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Lokasyonlar */}

      {/* Bizi Tercih Edenler */}

      {/* Markalar */}

      {/* Blog */}
    </div>
  );
}
