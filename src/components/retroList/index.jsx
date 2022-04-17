import styled from 'styled-components'

const retroList = {
    List: styled.ul`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        list-style: none;
        flex-direction: column;
    `,
    ListItem: styled.li`
        margin: 10px;
        padding: 2px;
        width: 90%;
        border: 2px solid #007337;
    `,
    ListItemField: styled.div`
        display: flex;
        padding: 4px;
        justify-content: space-between;
        flex-direction: row;
        font-size: 22px;
        text-transform: uppercase;
        font-family: 'Retro';
        color: #007337;
        text-decoration: none;

        &:hover {
            color: #ffffffe3;
            background-color: #007337;
        }
    `
}

export { retroList }