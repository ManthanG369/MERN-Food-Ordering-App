import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import Loading from "@/components/ui/Loading";
import ManageRestaurantFrom from "@/form/manage-restaurant-form/ManageRestaurantFrom";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant, isLoading: isGetRestroLoading } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();
  const isEditing = !!restaurant;
  if (isGetRestroLoading) {
    return <Loading />;
  }

  return (
    <ManageRestaurantFrom
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageRestaurantPage;
