import React from 'react'
import { Card, CardBody, CardTitle, Col } from 'reactstrap'
import { GlobalVariable } from '../../constants/globleVariable'

export default function Movie({ movie}) {
    return (
        <Col md={6} sm={12} className="my-3">
            <Card className='w-100'>
                <img
                    alt="Card"
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
