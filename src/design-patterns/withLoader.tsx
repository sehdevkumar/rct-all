import { ComponentType, useEffect, useState } from "react";

export const withLoader = (Component: ComponentType<any>) => {
    return (props: any) => {
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true);

            const timerRef = setTimeout(() => {
                setLoading(false);
            }, 5000);

            return () => {
                clearTimeout(timerRef);
            };
        }, []);

        return (
            <>
                {isLoading && <div className="loader">Loading</div>}
                {!isLoading && <Component {...props} />}
            </>
        );
    };
};
