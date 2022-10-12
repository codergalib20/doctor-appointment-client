import axios from 'axios';
import { useEffect } from 'react';
export default function Home() {
    const getData = async () => {
        try {
            const response = await axios.get('/api/users/get-user-info-by-id', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('doctor_app_token')}`
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>Doctor appointment</div>
    )
}