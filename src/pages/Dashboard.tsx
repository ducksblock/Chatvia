import { useEffect, useState } from "react";
import SideChatFeed from "../components/SideChatFeed";
import { User } from "firebase/auth";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { Message } from "../common";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const getUserMessages = () => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { uid } = doc.data();
        if (uid === user?.uid) {
          const allMessages = doc.data().messages;
          const allMessagesList = allMessages.map((item: User) => item);
          setMessages([...messages, ...allMessagesList]);
        }
      });
    });
  };
  const getAllUsers = async () => {
    const q = await query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const allUsers: User[] = [];
      const updatedUsers: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        allUsers.push(userData);
        updatedUsers.push(userData);
      });
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(allUsers));
    });
  };
  useEffect(() => {
    // getUserMessages();
    getAllUsers();
  }, []);
  return (
    <main className="flex flex-1 overflow-hidden">
      <Outlet />
      <SideChatFeed users={users} />
    </main>
  );
};

export default Dashboard;
