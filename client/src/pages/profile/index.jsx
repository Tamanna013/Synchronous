import { useAppStore } from '@/store/slices/auth-slice';
const Profile = () => {
    const { userInfo } = useAppStore();
    return (
        <div>
            Profile
            <div>Email: {userInfo.email}</div>
        </div>
    );
};

export default Profile;