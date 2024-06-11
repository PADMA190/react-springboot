
import { Link,} from "react-router-dom";

function Home() {
  

  return (
    <div className="container">
      <div className="w-70 text-center mt-5">
      <h2 className="text-primary mt-5">Manage the class by viewing, adding, deleting student details</h2>
      <Link
                    className="btn btn-primary mx-2 mt-5 "
                    to={`/departments`}
                  >
                    ViewStudents
                  </Link>
      </div>
    </div>
  );
}

export default Home;