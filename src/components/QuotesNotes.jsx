import { useState, useEffect } from "react";
import { VscTrash } from "react-icons/vsc";
import { ImSpinner2 } from "react-icons/im";
import Navbar from "../components/Navbar";

function QuotesNotes() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load existing notes from backend
  useEffect(() => {
    fetch("http://localhost:5000/quotes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  // Handle form submission
  const handlePost = (e) => {
    e.preventDefault();
    if (username.trim() === "" || message.trim() === "") return;

    setLoading(true); // Aktifkan loading
    setTimeout(() => {
      const newNote = { username, message };

      fetch("http://localhost:5000/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((data) => {
          setNotes([data, ...notes]);
          setUsername("");
          setMessage("");
        })
        .catch((err) => console.error("Error posting note:", err))
        .finally(() => setLoading(false)); // Matikan loading setelah selesai
    }, 3000);
  };

  // Handle delete note
  const handleDelete = (index) => {
    fetch(`http://localhost:5000/quotes/${index}`, {
      method: "DELETE",
    })
      .then(() => {
        setNotes(notes.filter((_, i) => i !== index));
      })
      .catch((err) => console.error("Error deleting note:", err));
  };

  return (
    <>
      <Navbar />
      <div className="px-6 py-4 mt-10">
        <h1 className="text-xl font-bold dark:text-white">Quotes Notes</h1>
        <p className="text-[14px] mt-1 dark:text-white">
          Any visitors can leave a quote here, drop <br /> your own quotes!
        </p>
        <div className="mt-4">
          <form onSubmit={handlePost}>
            <div>
              <label className="text-[13px] font-semibold dark:text-white">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-3 py-1 rounded-md border border-[#d7dade] placeholder:text-[14px] dark:placeholder:text-white dark:border-[#434343]"
                placeholder="yourname"
                disabled={loading}
              />
            </div>
            <div className="mt-3">
              <label className="text-[13px] font-semibold dark:text-white">
                Message
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 px-3 py-1 rounded-md border border-[#d7dade] placeholder:text-[14px] dark:placeholder:text-white dark:border-[#434343]"
                placeholder="message"
                disabled={loading}
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-[98px] text-[13px] flex items-center justify-center text-white py-[4.9px] px-4 rounded-md bg-[#323232] hover:bg-[#292929] disabled:bg-gray-500 retro:bg-[#E4D8B4] retro:text-[#352f44] retro:font-semibold valentine:bg-[#F2D7E7] valentine:font-semibold valentine:text-[#D63384]"
                disabled={loading}
              >
                {loading ? (
                  <ImSpinner2 className="animate-spin text-white text-lg" />
                ) : (
                  "Post Now"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16">
          <h1 className="text-xl font-bold dark:text-white">Notes</h1>
          <p className="mt-1 text-[14px] dark:text-white">
            Existing quotes by other users!
          </p>
        </div>

        <div className="mt-4">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div
                key={index}
                className="bg-white border border-[#d7dade] w-full h-full py-3 px-4 rounded-md mt-3 flex justify-between items-center dark:bg-[#1a1a1a] dark:border-[#434343] dark:text-white retro:bg-[#E4D8B4] retro:text-[#352f44] valentine:bg-[#F2D7E7] valentine:text-[#D63384]"
                style={{ boxShadow: "5px 5px" }}
              >
                <div>
                  <p className="text-[14px] font-semibold">@{note.username}</p>
                  <p className="text-[13px] mt-3 italic">{note.message}</p>
                </div>
                <VscTrash
                  onClick={() => handleDelete(index)}
                  className="text-red-500 text-[20px] hover:underline cursor-pointer"
                />
              </div>
            ))
          ) : (
            <p className="text-[14px] text-gray-500 italic">No quotes yet...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default QuotesNotes;
