import { useState } from "react";
import { TEXTS } from "../../data";
import { Card } from "@mui/material";

export const AboutUs = () => {
    const [data] = useState(TEXTS);
    return (
        <>
            <div className="grid grid-flow-col grid-rows-6 gap-4 xl:grid-rows-3">
                {data.map((item) => {
                    return (
                        <Card
                            key={`Info${item.id}`}
                            variant="outlined"
                            className="border shadow-xl sm:h-[24rem]"
                        >
                            <h2 className="p-5 text-center text-orange-800 h2">
                                {item.name}
                            </h2>
                            <div className="flex items-center justify-center pt-2">
                                <img
                                    className="w-32"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div className="flex items-center pt-6 m-5 text-lg text-center text-green-900 p2">
                                <p>{item.description}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </>
    );
};
