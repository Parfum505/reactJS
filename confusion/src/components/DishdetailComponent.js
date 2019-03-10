import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({commentsArray}) {
    if (commentsArray.length > 0) {
        const comments = commentsArray.map( comment => {
            let date = new Date(comment.date).toLocaleDateString('en-US', {
                day : '2-digit',
                month : 'short',
                year : 'numeric'
            });
                return (
                    <li key={comment.id} className="mb-1">
                        <div className="mb-1">{comment.comment}</div>
                        <div>-- {comment.author}, {date}</div>
                    </li>
                );
            });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}
function RenderDish({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

    }
const DishDetails = props => {
    if (props.details) {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.details}/>
                    <RenderComments commentsArray={props.details.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};
export default DishDetails;