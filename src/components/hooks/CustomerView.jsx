import React from 'react';
import { Card, CardContent, Typography,CardActions ,Button } from '@material-ui/core';
const CustomerView= ({customer}) => {
  
 return (
<Card variant="elevation">
    <CardContent>
        <Typography>
          ID : {customer.id}

        </Typography>
        <Typography>
          Name : {customer.name}

        </Typography>
        <Typography>
          Location : {customer.location}

        </Typography>
        </CardContent>
 

</Card>

 )

}

//Customerview is updated only if props/state change  by using the below HOC
export default React.memo( CustomerView) ;