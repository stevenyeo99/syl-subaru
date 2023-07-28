"use client";

import Link from 'next/link';
import { Fragment } from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

import './Card.css';

const CardItem = (props) => {
    const { item, childStyles } = props;
    const {
        title,
        caption,
        imgSrc,
        visitUrl
    } = item;
    const {
        sm,
        md,
        lg
    } = childStyles;

    return (
        <Col lg={lg} md={md} sm={sm} className='p-1'>
            <Card className='card-card'>
                <CardImg
                    alt={title}
                    src={imgSrc}
                    top
                    width="100%"
                    className='card-image'
                />
                    <CardBody>
                        <CardTitle tag="h5">
                            {title}
                        </CardTitle>
                        {
                            caption && (
                                <Fragment>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        {caption.description}
                                    </CardText>
                                </Fragment>
                            )
                        }
                        
                    <Link href={visitUrl} className='btn btn-info text-white'>
                        Lihat
                    </Link>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardItem;