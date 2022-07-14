import { Link, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export default function AssignmentItem({ assignment }) {
    const { id } = useParams();
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{assignment.title}</CardTitle>
                <CardText>{assignment.description}</CardText>
                <Button
                    tag={Link}
                    to={`/courses/${id}/assignments/${assignment._id}`}
                >
                    Go To Assignment
                </Button>
            </CardBody>
        </Card>
    );
}
