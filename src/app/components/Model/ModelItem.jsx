import { ListOfModels } from "@/app/data/model/ListofModels";

import YoutubeVideo from "../Youtube/YoutubeVideo";
import ImageGalleryDisplay from "../ImageGallery/ImageGallery";

const ModelItem = (props) => {
    const {model} = props;

    const modelData = ListOfModels.find(data => {
        return data.title.toLowerCase().replace('_', '').replace(' ', '') === model.toLowerCase().replace('_', '').replace(' ', '');
    });

    return (
        <section>
            <h1 className='text-primary'>{modelData.title}</h1>

            <img src={modelData.imageSlide} alt={modelData.title} style={{width: '100%'}} />

            <div className='mt-3'>
                <h5>{modelData.modelSubject}</h5>
                <p>
                    {
                        modelData.modelContent
                    }
                </p>

                {
                    modelData.modelContentUnit && (
                        <ul>
                            {
                                modelData.modelContentUnit.map(unit => (<li key={unit}>{unit}</li>))
                            }
                        </ul>
                    )
                }
            </div>
            
            {
                modelData.videoId && (
                    <div className='mt-3'>
                    <YoutubeVideo videoId={modelData.videoId} />
                </div>
                )
            }            
            
            {
                modelData.imageGalleries && (
                    <div className='mt-3'>
                        <ImageGalleryDisplay items={modelData.imageGalleries} />
                    </div>
                )
            }
            
        </section>
    );
};

export default ModelItem;