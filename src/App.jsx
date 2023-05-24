import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const App = () => {
  const [seatFundData, setSeatFundData] = useState(() => {
    const storedData = localStorage.getItem("seatFundData");
    return storedData ? JSON.parse(storedData) : [
      { name: "রাজীব", deposit: 18.25 },
      { name: "শামিম", deposit: -31.75 },
      { name: "প্রনব", deposit: -11.25 },
      { name: "শ্রাবন", deposit: 8.25 },
      { name: "আলিফ", deposit: -8.75 },
      { name: "মুহিব", deposit: 56.25 },
      { name: "ওয়াফিক", deposit: 16.25 },
      { name: "ছোঁয়া", deposit: 18.25 },
      { name: "সিনফা", deposit: -8.75 },
      { name: "মিম", deposit: 18.25 },
      { name: "সাদিয়া", deposit: 36.25 },
      { name: "মিথিলা", deposit: -1.75 },
      { name: "নাহিদা", deposit: -6.25 },
      { name: "উযমা", deposit: 3.75 },
      { name: "ঐশী", deposit: 2.0 },
      { name: "সবুজ", deposit: 6.25 },
      { name: "আকাশ", deposit: -8.0 },
      { name: "তারেক", deposit: 2.0 },
      { name: "অভিষেক ", deposit: -8.0 },
    ];
  });

  useEffect(() => {
    localStorage.setItem("seatFundData", JSON.stringify(seatFundData));
  }, [seatFundData]);

  const handleDepositChange = (index, event) => {
    const updatedSeatFundData = [...seatFundData];
    updatedSeatFundData[index].deposit = parseFloat(event.target.value);
    setSeatFundData(updatedSeatFundData);
  };

  const calculateTotal = () => {
    let total = 0;
    seatFundData.forEach((data) => {
      total += data.deposit;
    });
    return total;
  };

  return (
    <div className="container mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-2 text-center mt-5">
        সিট ফান্ড ব্যাচ-ওয়ান
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
      <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-2 border-b">নাম</th>
            <th className="py-2 px-2 border-b">জমা</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {seatFundData.map((data, index) => (
            <tr
              key={index}
              className={data.deposit >= 0 ? "bg-green-500" : "bg-red-500"}
            >
              <td className="py-2 px-2 border-b">{data.name}</td>
              <td className="py-2 px-2 border-b">
                <input
                  className="border border-gray-300 px-2 py-1 w-20 me-1"
                  type="number"
                  value={data.deposit}
                  onChange={(event) => handleDepositChange(index, event)}
                />
                টাকা
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center">
      <button
          className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Total: ${calculateTotal()} টাকা`,
              showConfirmButton: false,
              timer: 2500,
            })
          }
        >
          Calculate
        </button>
      </div>
      <div className="text-center mx-auto">
        <Link className=" hidden mx-auto text-center btn btn-accent mb-5">ADMIN LOGIN</Link>
      </div>
    </div>
  );
};

export default App;
