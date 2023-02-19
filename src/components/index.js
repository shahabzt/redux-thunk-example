import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "../store/user.action";
import { UserPaint } from "./users.paint";
import { Table } from "@mantine/core";
import { Loading } from "./loading";

export function Users() {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.users)
    console.log(userData)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const ths = (
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>city</th>
        </tr>
    );
    const rows = userData.users.map((element) => (
        <tr key={element.id}>
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>{element.username}</td>
            <td>{element.address.city}</td>
        </tr>
    ));

    return (
        <>
            {userData.loading ? <Loading/> : userData.error ? <h2>{userData.error}</h2> :
                    
                        <Table striped highlightOnHover>
                            <thead className="table-head">{ths}</thead>
                            <tbody>{rows}</tbody>
                        </Table>
                    
                }
        </>
    )
}