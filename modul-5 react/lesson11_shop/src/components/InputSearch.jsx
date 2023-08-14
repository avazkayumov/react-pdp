import styled from "styled-components";

function InputSearch(props) {
    return (
        <Wrapper>
            <p>Search Item</p>
            <Input type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." onKeyUp={props.searchProducts}/>
        </Wrapper> 
     );
}

export default InputSearch;

const Input = styled.input`
    height: 50px;
    width: 500px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
    border-radius: 13px;
    border: none;
    outline: none;
    color: rgba(26, 31, 22, 0.5);
    padding-left: 15px;
    display: block;
    margin: auto;
`

const Wrapper = styled.div `
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.02em;
        color: #60695C;

        position: relative;
        left: 183px;
        margin-bottom: 8px;
    }
`