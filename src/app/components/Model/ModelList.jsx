import CardList from "@/app/components/CardList/CardList.component";

import { ListOfModels } from "@/app/data/model/ListofModels";

const ModelList = () => {
    return (
        <CardList items={ListOfModels} childStyles={{sm: 1, md: 2, lg: 4}} />
    );
};

export default ModelList;