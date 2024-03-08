import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantFrom from "@/form/manage-restaurant-form/ManageRestaurantFrom";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return (
    <ManageRestaurantFrom onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
