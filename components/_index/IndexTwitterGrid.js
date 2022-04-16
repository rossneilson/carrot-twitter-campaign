import styled from 'styled-components'
import Box from './../Box/Box'
import Leaders from './../../data/twitter_leaders.json'

const IndexTwitterGrid = () => {
    return (
        <StyledTwitterGrid size="full">
            <ul>
                {Leaders.users.map((leader, i) => (
                    <li key={leader}>
                        <a href={`https://twitter.com/${leader}`} target="_blank" rel="noreferrer">
                            {i + 1}_ @{leader}
                        </a>
                    </li>
                ))}
            </ul>
        </StyledTwitterGrid>
    )
}

const listElementHeight = '66px';
const listElementLineHeight = '40px';

const StyledTwitterGrid = styled(Box)`
    margin-bottom: 125px !important;
    ul {
        max-width: 1136px;
        margin: 0 auto;
        display: block;
        height: calc(${listElementHeight} * 10);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        li {
            width: calc(100% / 5);
            height: ${listElementHeight};
            display: flex;
            align-items: center;
            padding-left: 22px;
            border-top: 1px solid ${props => props.theme.colors.orange};
            font-size: 13px;
            position: relative;
            a {
                display: flex;
                width: 100%;
                height: 100%;
                align-items: inherit;
            }
            &:after,
            &:before {
                position: absolute;
                content: '';
                background: ${props => props.theme.colors.orange};
                width: 1px;
                height: 40px;
            }
            &:before {
                left: 0;
            }
            &:after {
                right: 0;
                top: calc((${listElementHeight} / 2) - (${listElementLineHeight} / 2));
                display: none;
            }
            &:nth-child(-n+10) {
                &:before {
                    display: none;
                }
            }
            &:nth-child(10n) {
                border-bottom: 1px solid ${props => props.theme.colors.orange};
            }
        }
    }
`;

export default IndexTwitterGrid;