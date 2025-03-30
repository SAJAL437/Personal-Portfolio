import { FaDownload } from "react-icons/fa";

const CVDownloadButton = () => {
  const handleDownload = () => {
    const cvUrl = "/Sajal Tiwari Resume pdf.pdf"; // Corrected file path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sajal_Tiwari_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center justify-center gap-2 px-5 py-2 w-full md:w-auto bg-transparent font-semibold rounded-3xl transition border border-gray-300 text-sm text-gray-50 hover:bg-gray-100 hover:text-gray-900 duration-500"
    >
      <FaDownload />
      Download CV
    </button>
  );
};

export default CVDownloadButton;
