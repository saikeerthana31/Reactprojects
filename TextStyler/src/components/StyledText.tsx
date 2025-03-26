import React from 'react';

interface Props {
    text: string;
    style: string;
}

const StyledText: React.FC<Props> = ({text, style}) => {
    return <p className={`styled-text ${style}`}> {text || "Your styled text will appear here!!!" }</p>;
};

export default StyledText;