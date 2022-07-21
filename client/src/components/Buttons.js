import { Button } from "reactstrap";
import { Link, useParams } from "react-router-dom";

const EnrollButton = props => {
    return <Button onClick={props.onClick}>Enroll</Button>;
};

const DeleteButton = ({ onDelete }) => {
    return <Button onClick={onDelete}>Delete</Button>;
};

const GoToCourseButton = props => {
    return (
        <Button tag={Link} to={`/courses/${props.id}/assignments`}>
            Go To Course
        </Button>
    );
};

export { EnrollButton, GoToCourseButton, DeleteButton };
