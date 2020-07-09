import React from 'react';

const Rainbow = (WrappedComponent) => {
    // le WrappedComponent est le component qui sera modifié / sur lequel notre hoc sera appliqué
    const colours = ['red', 'pink', 'yellow', 'blue', 'green'];
    const random = Math.floor(Math.random() * colours.length);
    // const randomColour = colours[Math.floor(Math.random() * 5)];
    let result = colours[random];
    
    const className = `${result}-text`;
    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        );
    };
};

export default Rainbow;