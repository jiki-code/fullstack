import React from "react";
import styles from "./user.module.css";
import { PenBox, TrashIcon } from "lucide-react";
import Dialog from "../components/ui/dialog";
function UserList() {
  const [isOpen, setIsOpen] = React.useState(false)
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      age: 17,
      email: "vana@example.com",
      role: "student",
    },
    {
      id: 2,
      name: "Trần Thị B",
      age: 16,
      email: "thib@example.com",
      role: "student",
    },
    {
      id: 3,
      name: "Lê Minh C",
      age: 18,
      email: "minhc@example.com",
      role: "admin",
    },
    {
      id: 4,
      name: "Lê Xuân Phúc ",
      age: 18,
      email: "phuc@example.com",
      role: "teacher",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center max-h-screen text-center bg-slate-50">
      <h2>HTML Table</h2>
      {/* thanh search */}
      <div className="w-full flex ">
      <button className="px-2 py-3" onClick={() => setIsOpen(true)}>Open Dialog</button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello!">
        <p>This is a custom dialog built with React.js 🎉</p>
      </Dialog>
      </div>

      <div className="w-full pt-4">
        <table
          border="1"
          cellPadding="8"
          style={{ borderCollapse: "collapse", width: "100%", padding: '10px' }}
        >
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  <div className="flex gap-4">
                    <PenBox className="w-4 h-4" />
                    <TrashIcon className="w-4 h-4" />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
