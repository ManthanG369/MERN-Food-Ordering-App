import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>

        <span className=" text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div className="gird md:grid-cols-2 gap-5">
        <img
          src="https://res.cloudinary.com/dercg6r6z/image/upload/v1715777321/landing_lwt22p.png"
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>

          <span>
            Dowload the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img
            src="https://res.cloudinary.com/dercg6r6z/image/upload/v1715777319/appDownload_xjbuds.png"
            alt="app dowload img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
