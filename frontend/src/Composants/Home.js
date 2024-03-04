import axios from "axios";
import React, {useEffect} from "react";



function Home() {

    const baseURL = "http://localhost:5000/patient";
    const [reservation, setReservation] = React.useState([]);

    useEffect(() => {

        axios.get(baseURL)
            .then(res => setReservation(res.data))
            .catch(err => console.log(err));

    }, [])
    return (
        <div className="hero">
            <div className="container">
                <h1>Page Home</h1>
                <table>
                    <thead>
                    <tr>
                    <th>id</th>

                    <th>firstname</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservation.map((resv,i) => (
                            <tr>
                                <td>{resv.patient_id}</td>
                                <td>{resv.firstname}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Home;

/**
 *   console.log(response.data);
     *             return response.data;
     *         } catch (error) {
     *             console.error(error);
     *         }
     */

