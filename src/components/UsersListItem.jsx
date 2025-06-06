import { GoTrash } from "react-icons/go";
import { Button } from "./Button";
import { removeUser } from "../store/thunks/removeUser";
import { useThunk } from "../hooks/useThunk";
import { ExpandablePanel } from "./ExpandablePanel";
import { AlbumsList } from "./AlbumsList";

export const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};
