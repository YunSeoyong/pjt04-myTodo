import styled from 'styled-components';
import Button from '../elements/Button';

const Header = () => {
    return (
        <HeaderWrap id="header">
            <div className="header_in">
                <h1>MY TODO</h1>
            </div>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.header`
    width: 100%;
    margin-bottom: 40px;

    .header_in {
        margin: 0 20px;

        h1 {
            padding-top: 28px;
            font-size: var(--font-lg);
            line-height: 1em;
            font-weight: 700;
            color: #fff;
            text-align: center;
            text-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .Button {
            position: absolute;
            right: 20px;

            margin-top: 1rem;
        }
    }
`;