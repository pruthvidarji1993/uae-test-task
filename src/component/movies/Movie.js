import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Card, CardBody, CardTitle, Col } from 'reactstrap'
import { GlobalVariable } from '../../constants/globleVariable'

export default function Movie({ movie}) {
    return (
        <Col md={6} sm={12}>
            <Card className='blog-card'>
                <LazyLoadImage
                    alt="Card"
                    className="img-fluid"
                    src={`${GlobalVariable.imageUrl}${movie.poster_path}`}
                />
                <CardBody>
                    <CardTitle tag="h3">
                        {movie.title}
                    </CardTitle>
                </CardBody>
            </Card>
        </Col>
    )
}
