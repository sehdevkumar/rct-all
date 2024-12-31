import React, { useEffect } from 'react';

const ErrorComponent: React.FC = () => {
     
    const random = Math.round(Math.random() * 2);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (random === 1) {
              throw new Error("An unexpected error occurred!");
            } else {
              console.log("Good");
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex w-full items-center justify-center h-screen bg-red-100">
            <h1 className="text-3xl font-bold text-red-600 text-center">
               { random == 1 ?  'This component may throw an error in a few seconds...' : 'Welcome Back Everything is OK' }
            </h1>
        </div>
    );
};

export default ErrorComponent;