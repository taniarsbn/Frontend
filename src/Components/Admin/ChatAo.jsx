import React, { useState } from 'react';
import { MdDelete, MdCheckCircle } from 'react-icons/md';

const ChatInboxAdmin = () => {
  // Contoh data pesan masuk dari nasabah
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Budi Santoso',
      email: 'budi@example.com',
      message: 'Saya ingin informasi lebih lanjut tentang produk kredit.',
      timestamp: '2024-11-01T14:23:00',
      status: 'Unresolved', // Status Pesan: Unresolved, Resolved
    },
    {
      id: 2,
      sender: 'Siti Aminah',
      email: 'siti@example.com',
      message: 'Bagaimana cara melakukan top-up saldo?',
      timestamp: '2024-11-05T09:10:00',
      status: 'Resolved',
    },
    {
      id: 3,
      sender: 'Ahmad Yani',
      email: 'ahmad@example.com',
      message: 'Apakah ada promo untuk produk deposito?',
      timestamp: '2024-11-07T10:25:00',
      status: 'Unresolved',
    },
  ]);

  // Fungsi untuk merubah status pesan menjadi "Resolved"
  const handleResolveMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, status: 'Resolved' } : message
      )
    );
  };

  // Fungsi untuk menghapus pesan
  const handleDeleteMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
  };

  // Format tanggal agar lebih mudah dibaca
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.toLocaleDateString('id-ID')} ${date.toLocaleTimeString('id-ID')}`;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Chat Inbox - Pesan dari Nasabah</h1>

      {/* Daftar Pesan Masuk */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Pengirim</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Pesan</th>
              <th className="py-3 px-6 text-left">Tanggal</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {messages.map((message, index) => (
              <tr key={message.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">{message.sender}</td>
                <td className="py-3 px-6 text-left">{message.email}</td>
                <td className="py-3 px-6 text-left">{message.message}</td>
                <td className="py-3 px-6 text-left">{formatDate(message.timestamp)}</td>
                <td className="py-3 px-6 text-left">
                  <span className={message.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}>
                    {message.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  {/* Tombol Resolve (Tanggapan Dikirim) */}
                  {message.status === 'Unresolved' && (
                    <button
                      onClick={() => handleResolveMessage(message.id)}
                      className="text-green-500 hover:text-green-700 mr-2"
                    >
                      <MdCheckCircle size={20} />
                    </button>
                  )}
                  {/* Tombol Hapus Pesan */}
                  <button
                    onClick={() => handleDeleteMessage(message.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChatInboxAdmin;