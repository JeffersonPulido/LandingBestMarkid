import { Card } from "@mui/material";
import { dataPol } from ".";

export const BtnDownload = () => {
    const handleDownloadPDF = (pdfURL) => {
        window.open(pdfURL, "_blank");
    };
    return (
        <>
            {dataPol.routePolice.map((item) => {
                return (
                    <div key={item.id} className="m-4">
                        <Card className="flex flex-col h-auto gap-8 p-5 text-center shadow-2xl w-[21rem]" variant="outlined">
                            <h4 className="m-2 text-green-900 h2">
                                {item.name}
                            </h4>
                            <button
                                className="w-full py-2 text-lg text-white transition-all ease-in-out bg-green-900 border rounded-lg border-green-950 hover:bg-green-200 hover:text-green-900"
                                onClick={() => handleDownloadPDF(item.route)}
                            >
                                Ver documento
                            </button>
                        </Card>
                    </div>
                );
            })}
        </>
    );
};
