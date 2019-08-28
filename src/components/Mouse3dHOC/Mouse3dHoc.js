import React from 'react';

const Mouse3DHoc = (Components) => (props) => {

    const onStart3d = (e) => {
        const {nativeEvent: {offsetX, offsetY}, currentTarget: {offsetWidth, offsetHeight, style}} = e;
        const eCard = {
            perspective: 1000,
            scale: 1.05,
            scope(oS) {
                let s = null;
                switch (oS) {
                    case 'X': {
                        s = -(offsetX - (offsetWidth / 2));
                        break;
                    }
                    case 'Y': {
                        s = offsetY - (offsetHeight / 2);
                        break;
                    }
                    default:
                        break;
                }
                return +(s / 15).toFixed(2)
            }
        };
        style.transform = `perspective(${eCard.perspective}px) rotateX(${eCard.scope('Y')}deg) rotateY(${eCard.scope('X')}deg) scale3d(1.05,1.05,1.05)`;
        style.willChange = 'transform';
    };

    const onStop3d = (e) => {
        e.currentTarget.style.transform = `perspective(1000px) rotate(0deg) rotateY(0deg)`;
    };

    return <Components {...props} onStart3d={onStart3d} onStop3d={onStop3d}/>;

};

export default Mouse3DHoc;