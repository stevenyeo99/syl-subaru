import { ListOfModels } from "@/app/data/model/ListofModels";

import YoutubeVideo from "../Youtube/YoutubeVideo";

const ModelItem = (props) => {
    const {model} = props;

    const modelData = ListOfModels.find(data => {
        return data.title.toLowerCase() === model;
    });

    return (
        <section>
            <h1 className='text-primary'>{modelData.title}</h1>

            <h4>Designed for Fun. Built for Action.</h4>
            <p>
                Memperkenalkan Crosstrek baru. Mulai dari kendaraan yang seru di kota hingga petualangan aktif di alam bebas, Crosstrek menambahkan lebih banyak kesenangan di setiap perjalanan, setiap saat. Desain tajam dan dinamis dengan muka depan yang bertenaga dan fender yang menjorok sangat menyenangkan — bahkan ketika hanya melihatnya. Dilengkapi dengan teknologi keselamatan Subaru terbaru untuk ketenangan pikiran di jalan manapun,Dinamika berkendara Crosstrek yang ditingkatkan
                memberikan kenyamanan tanpa kompromi dari hari ke hari.
            </p>

            <YoutubeVideo videoId={modelData.videoId} />
        </section>
    );
};

export default ModelItem;