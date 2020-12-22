import React from 'react';

const statement = React.memo((props) => {
    console.log(`statement ~ props.text`, props.statement.text);
    return (
        <p>{props.statement.text}</p>
    );
}, (prevProps, nextProps) => prevProps.statement.text === nextProps.statement.text);
export default statement;
