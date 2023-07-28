"use client";

import Card from '../Card/Card.component';

import { CardGroup } from 'reactstrap';

import './CardList.css';

const CardList = (props) => {
    const { items, childStyles } = props;

    return (
        <CardGroup>
            {
                items.map(item => {
                    return <Card key={item.id} item={item} childStyles={childStyles} />
                })
            }
        </CardGroup>
    );
};

export default CardList;