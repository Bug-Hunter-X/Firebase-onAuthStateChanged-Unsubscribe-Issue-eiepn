import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Your Firebase configuration

function MyComponent() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <div>User is signed in: {user.uid}</div>;
  } else {
    return <div>User is signed out</div>;
  }
}

export default MyComponent;