import React from 'react';
import Card from 'react-bootstrap/Card';

const UserCard = ({ user }) => {
  // Destructure user object properties for cleaner rendering
  const { id, username, email, phone, website, address } = user;

  // Extract address details for better organization
  const { street, suite, city, zipcode, geo } = address;

  return (
    



<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s" />
      <Card.Body style={{justifyContent:'center', textAlign:'center'} } className='CardContent'>
       
        <Card.Text>  Id : {id} </Card.Text>
        <Card.Text > Username : {username} </Card.Text>
        <Card.Text > Email : {email} </Card.Text>
        <Card.Text> Phone : {phone} </Card.Text>
        <Card.Text> Website : {website} </Card.Text>
        <Card.Text> Street : {street}, {suite} </Card.Text>
        <Card.Text> City :{city}, {zipcode} </Card.Text>
        <Card.Text> Geo :{geo.lat}, {geo.lng} </Card.Text>
        


        
      </Card.Body>
    </Card>
















  );
};

export default UserCard;