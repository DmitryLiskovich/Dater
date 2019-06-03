import React, {useState, useEffect} from 'react';
import Table from 'components/Table/Table.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'


function Users() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/users/').then(res=> res.json()).then(resp => {
            const usersDate = resp.map(item => {
                    return [item.first_name, item.last_name, item.username, 
                        item.tasks.join(', '), item.level];
            })
            setData(usersDate);
        });
    })


    return(
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Card>
            <CardHeader color="primary">
                <h4>Users list</h4>
                <p>
                Information about all users
                </p>
            </CardHeader>
            <CardBody>
                <Table
                tableHeaderColor="primary"
                tableHead={["First Name", "Last Name", "User name", "Tasks", "Level"]}
                tableData={data}
                />
            </CardBody>
            </Card>
        </GridItem>
      </GridContainer>
    );
}

export default Users;


