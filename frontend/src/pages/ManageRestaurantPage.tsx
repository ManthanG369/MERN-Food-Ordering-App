import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import Loading from "@/components/ui/Loading";
import ManageRestaurantFrom from "@/form/manage-restaurant-form/ManageRestaurantFrom";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant, isLoading: isGetRestroLoading } = useGetMyRestaurant();
  // console.log("restaurant:", restaurant);
  if (isGetRestroLoading) {
    return <Loading />;
  }
  return (
    <ManageRestaurantFrom
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
};

export default ManageRestaurantPage;
