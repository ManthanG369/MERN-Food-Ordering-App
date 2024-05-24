import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItem";
import RestaurantInfo from "@/components/RestaurantInfo";
import Loading from "@/components/ui/Loading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};
const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  if (isLoading || !restaurant) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          className="rounded-md object-cover h-full w-full"
          src={restaurant.imageUrl}
          alt=""
        />
      </AspectRatio>

      <div className="grid md:grid-cols-[4fr-2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />

          <span className="text-2xl font-bold tracking-tight"></span>

          {restaurant.menuItems.map((menuItem) => (
            <MenuItem key={menuItem._id} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
