import { useUpdateMyUser, userGetMyUser } from "@/api/MyUserApi";
import Loading from "@/components/ui/Loading";
import UserProfileForm from "@/form/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = userGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    // return <span>Loading...</span>;
    return <Loading text="Fetching user ..." />;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
