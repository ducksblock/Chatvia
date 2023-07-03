import { useState } from "react";
import {
  BookmarkSquareIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import Sidebar from "../components/Sidebar";
import PhoneSideBar from "../components/PhoneSideBar";
import PhoneTopBar from "../components/PhoneTopBar";
import ChatFeedLeft from "../components/ChatFeedLeft";
import MainMessageArea from "../components/MainMessageArea";

const user = {
  name: "Emily Selman",
  email: "emily.selman@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Trending", href: "#", icon: FireIcon },
  { name: "Bookmarks", href: "#", icon: BookmarkSquareIcon },
  { name: "Messages", href: "#", icon: InboxIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="flex h-full">
        <PhoneSideBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          user={user}
          navigation={navigation}
          logo={logo}
        />
        <Sidebar user={user} navigation={navigation} />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <PhoneTopBar setMobileMenuOpen={setMobileMenuOpen} />
          <main className="flex flex-1 overflow-hidden">
            <ChatFeedLeft />
            <MainMessageArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
