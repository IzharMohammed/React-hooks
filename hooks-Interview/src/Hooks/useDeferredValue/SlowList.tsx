import React, { memo } from 'react';

const SlowItem = ({ text }: { text: string }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }
    return <li>Text: {text}</li>;
};

const SlowList = ({ text }: { text: string }) => {
    const items: JSX.Element[] = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }
    return <ul>{items}</ul>;
};

export default memo(SlowList);
