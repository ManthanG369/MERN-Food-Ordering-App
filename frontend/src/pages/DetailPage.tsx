import { useGetRestaurant } from "@/api/RestaurantApi";
import RestaurantInfo from "@/components/RestaurantInfo";
import Loading from "@/components/ui/Loading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  if (isLoading || !restaurant) {
    <Loading />;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          className="rounded-md object-cover h-full w-full"
          src={restaurant?.imageUrl}
          alt=""
        />
      </AspectRatio>

      <div className="grid md:grid-cols[4fr-2fr] gap5 md:px-32 ">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
