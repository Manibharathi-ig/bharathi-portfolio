import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin");

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("https://bharathi-portfolio-api.onrender.com/api/contact");

      setContacts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`https://bharathi-portfolio-api.onrender.com/api/contact/${id}`);

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };
  //   const updateStatus = async (id: number, status: string) => {
  //     try {
  //       await axios.patch(`https://bharathi-portfolio-api.onrender.com/api/contact/${id}/status`, {
  //         status,
  //       });

  //       fetchContacts();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleStatusChange = async (id: number, status: string) => {
    try {
      await axios.patch(`https://bharathi-portfolio-api.onrender.com/api/contact/${id}/status`, {
        status,
      });

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredContacts = contacts.filter((contact: any) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" || contact.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="glass-card border border-cyan-500/20 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm">Total Leads</h3>
          <p className="text-3xl font-bold text-cyan-400">{contacts.length}</p>
        </div>

        <div className="glass-card border border-blue-500/20 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm">New Leads</h3>
          <p className="text-3xl font-bold text-blue-400">
            {contacts.filter((contact: any) => contact.status === "NEW").length}
          </p>
        </div>

        <div className="glass-card border border-yellow-500/20 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm">Contacted</h3>
          <p className="text-3xl font-bold text-yellow-400">
            {
              contacts.filter((contact: any) => contact.status === "CONTACTED")
                .length
            }
          </p>
        </div>

        <div className="glass-card border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm">Interview</h3>
          <p className="text-3xl font-bold text-purple-400">
            {
              contacts.filter((contact: any) => contact.status === "INTERVIEW")
                .length
            }
          </p>
        </div>

        <div className="glass-card border border-green-500/20 rounded-xl p-6">
          <h3 className="text-zinc-400 text-sm">Closed</h3>
          <p className="text-3xl font-bold text-green-400">
            {
              contacts.filter((contact: any) => contact.status === "CLOSED")
                .length
            }
          </p>
        </div>
      </div>

      <div className="overflow-x-auto ">
        <div className="mb-6 flex gap-10 ">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 bg-black border border-white/10 rounded-xl px-4 py-3 text-white"
          />
          <div className="flex gap-3 mb-6 flex-wrap">
            {["ALL", "NEW", "CONTACTED", "INTERVIEW", "CLOSED"].map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 font-medium
          ${
            statusFilter === status
              ? "bg-cyan-500 text-black border-cyan-500 shadow-lg shadow-cyan-500/20"
              : "bg-black border-white/10 text-zinc-400 hover:border-cyan-500 hover:text-white"
          }`}
                >
                  {status}
                </button>
              ),
            )}
          </div>
        </div>
        <table className="w-full border border-white/10">
          <thead>
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Project</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          {/* <tbody>
            {filteredContacts.map((contact: any) => (
              <tr key={contact.id} className="border-t border-white/10">
                <td className="p-4">{contact.name}</td>
                <td className="p-4">{contact.email}</td>
                <td className="p-4">{contact.projectType}</td>
                <td className="p-4">
                  <select
                    value={contact.status}
                    onChange={(e) =>
                      handleStatusChange(contact.id, e.target.value)
                    }
                    className="bg-black border border-white/10 rounded-lg px-3 py-2"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="INTERVIEW">INTERVIEW</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </td>
                <td className="p-4 flex gap-1.5">
                  <button
                    onClick={() => setSelectedContact(contact)}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                  >
                    Delete
                  </button>
                </td>
                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody> */}

          <tbody>
            {filteredContacts.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-zinc-500">
                  No contacts found
                </td>
              </tr>
            ) : (
              filteredContacts.map((contact: any) => (
                <tr key={contact.id} className="border-t border-white/10">
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4">{contact.email}</td>
                  <td className="p-4">{contact.projectType}</td>

                  <td className="p-4">
                    <select
                      value={contact.status}
                      onChange={(e) =>
                        handleStatusChange(contact.id, e.target.value)
                      }
                      className="bg-black border border-white/10 rounded-lg px-3 py-2"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="INTERVIEW">INTERVIEW</option>
                      <option value="CLOSED">CLOSED</option>
                    </select>
                  </td>

                  <td className="p-4 flex gap-1.5">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg"
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                    >
                      Delete
                    </button>
                  </td>

                  <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {selectedContact && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 w-full max-w-2xl">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

              <div className="space-y-4">
                <p>
                  <strong>Name:</strong> {selectedContact.name}
                </p>

                <p>
                  <strong>Email:</strong> {selectedContact.email}
                </p>

                <p>
                  <strong>Opportunity:</strong>{" "}
                  {selectedContact.opportunityType}
                </p>

                <p>
                  <strong>Project:</strong> {selectedContact.projectType}
                </p>

                <p>
                  <strong>Status:</strong> {selectedContact.status}
                </p>

                <p>
                  <strong>Message:</strong>
                </p>

                <div className="bg-black/40 p-4 rounded-lg">
                  {selectedContact.message}
                </div>
              </div>

              <button
                onClick={() => setSelectedContact(null)}
                className="mt-6 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
