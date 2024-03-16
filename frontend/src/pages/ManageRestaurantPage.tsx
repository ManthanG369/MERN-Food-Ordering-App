import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantFrom from "@/form/manage-restaurant-form/ManageRestaurantFrom";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  console.log("restaurant:", restaurant);

  return (
    <ManageRestaurantFrom
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
};

export default ManageRestaurantPage;
