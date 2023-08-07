import { InputGroup, Input, Button } from "reactstrap";

const SearchBox = (props) => {

    const { type, placeholder, onChangeHandler } = props;

    return (
        <InputGroup>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </InputGroup>
    );
};

export default SearchBox;