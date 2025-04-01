import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Create a smooth fade in/out effect
        const fadeAnimation = () => {
            let direction = 1;
            let currentOpacity = 0;
            
            const animationInterval = setInterval(() => {
                currentOpacity += 0.02 * direction;
                if (currentOpacity >= 1) {
                    currentOpacity = 1;
                    direction = -1;
                } else if (currentOpacity <= 0) {
                    currentOpacity = 0;
                    direction = 1;
                }
                
                setOpacity(currentOpacity);
            }, 40);
            
            return () => clearInterval(animationInterval);
        };
        
        const animation = fadeAnimation();
        return () => animation();
    }, []);

    return (
        <div className="loading-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#1e2130',
            color: 'white',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div className="loading-text" style={{
                fontSize: '28px',
                letterSpacing: '12px',
                opacity: opacity,
            }}>
                L O A D I N G
            </div>
            <div className="loading-bar" style={{
                width: '300px',
                height: '2px',
                backgroundColor: '#2a2e40',
                marginTop: '20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="loading-progress" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '30%',
                    background: 'linear-gradient(90deg, #ff00cc, #3333ff)',
                    animation: 'moveProgressBar 3s infinite linear'
                }} />
            </div>
            <style jsx>{`
                @keyframes moveProgressBar {
                    0% { left: -30%; }
                    100% { left: 100%; }
                }
            `}</style>
        </div>
    );
};

export default Loading;