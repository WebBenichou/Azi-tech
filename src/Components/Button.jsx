import React, { useState, useEffect } from "react";

export default function CounterButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Le composant est monté !");
    }, []);

    return (
        <>
            <div className=" ">
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                    Clicked
                </button>
                <div className="container">
                    <div className="alert alert-primary">
                        <h5 className="text text-center">
                            {count}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
}
