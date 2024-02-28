import styled from "styled-components";

const Header = () => {
    return (
        <Headers>
            <HeaderIn>
                <h1>TODO LIST</h1>
                <p className="btnCreate">
                    <span className="hide">추가하기</span>
                </p>
            </HeaderIn>
        </Headers>
    );
};

export default Header;

const Headers = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
    background-color: #fff;

    @media screen and (min-width:768px) {
        height: 100px;
    }
`;
const HeaderIn = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    h1{
        padding-top: 28px;
        font-size: 28px;
        line-height: 1em;
        font-weight: 700;
        color: #90c1d9;
    }

    .btnCreate{
        position: relative;
        margin-top: 23px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    }
    .btnCreate::after, .btnCreate::before{
        content: "";
        display: block;
        position: absolute;
        top: 8px;
        left: 17px;
        width: 2px;
        height: 20px;
        background-color: #b1d1e1;
    }
    .btnCreate::before{
        transform: rotate(90deg);
    }
`;
