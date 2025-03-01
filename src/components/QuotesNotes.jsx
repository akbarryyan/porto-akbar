import { useState, useEffect } from "react";
import { VscTrash } from "react-icons/vsc";
import Navbar from "../components/Navbar";

function QuotesNotes() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);

  // Load existing notes from local storage on mount
  useEffect(() => {
    const storedNotes = localStorage.getItem("quotes_notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Handle form submission
  const handlePost = (e) => {
    e.preventDefault();
    if (username.trim() === "" || message.trim() === "") return;

    const newNote = { username, message };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);

    // Save to local storage
    localStorage.setItem("quotes_notes", JSON.stringify(updatedNotes));

    // Clear input fields
    setUsername("");
    setMessage("");
  };

  // Handle delete note
  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("quotes_notes", JSON.stringify(updatedNotes));
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
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-[98px] text-[13px] flex items-center justify-center text-white py-[4.9px] px-4 rounded-md bg-[#323232] hover:bg-[#292929]"
              >
                Post Now
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
                className="bg-white border border-[#d7dade] w-full h-full py-3 px-4 rounded-md mt-3 flex justify-between items-center"
                style={{ boxShadow: "5px 5px" }}
              >
                <div>
                  <p className="text-[14px] font-semibold">@{note.username}</p>
                  <p className="text-[13px] mt-3 italic">{note.message}</p>
                </div>
                <VscTrash
                  onClick={() => handleDelete(index)}
                  className="text-red-500 text-[20px] hover:underline"
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
