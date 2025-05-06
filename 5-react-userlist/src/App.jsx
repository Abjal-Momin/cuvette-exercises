import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import UserCard from "./UserCard";

function App() {
  const Users = [
    { name: "Aarav Sharma", age: 15, address: "Delhi, India", gender: "Male" },
    {
      name: "Saanvi Verma",
      age: 23,
      address: "Mumbai, India",
      gender: "Female",
    },
    {
      name: "divya dixit",
      age: 26,
      address: "Ahmedabad, India",
      gender: "Female",
    },
    { name: "Arjun Das", age: 14, address: "Kolkata, India", gender: "Male" },
    {
      name: "Aaliya Khan",
      age: 19,
      address: "Lucknow, India",
      gender: "Female",
    },
    {
      name: "Zoya Siddiqui",
      age: 25,
      address: "Bhopal, India",
      gender: "Female",
    },
    { name: "Faizan Ahmed", age: 28, address: "Patna, India", gender: "Male" },
    {
      name: "Mary D'Souza",
      age: 24,
      address: "Mangalore, India",
      gender: "Female",
    },
    { name: "John Fernandes", age: 29, address: "Goa, India", gender: "Male" },
    {
      name: "Fatima Begum",
      age: 34,
      address: "Varanasi, India",
      gender: "Female",
    },
    { name: "Aman Ali", age: 26, address: "Indore, India", gender: "Male" },
    {
      name: "Vaishu Roy",
      age: 23,
      address: "Belgaum, India",
      gender: "Female",
    },
  ];
  return (
    <>
      <Header />

      {Users.map((item) => {
        let userAvatar;

        if (item.gender == "Male") {
          userAvatar = "https://avatar.iran.liara.run/public/boy";
        } else if (item.gender == "Female") {
          userAvatar = "https://avatar.iran.liara.run/public/girl";
        }

        return (
          <UserCard
            userAvatarImg={userAvatar}
            userName={item.name}
            userAge={item.age}
            userAddress={item.address}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
