import { InputGroup, Input, Button } from "reactstrap";

const SearchBox = (props) => {

    const { type, placeholder } = props;

    return (
        <InputGroup>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={() => {}}
            />

            <Button color="primary" onClick={() => {}}>Search</Button>
        </InputGroup>
    );
};

export default SearchBox;