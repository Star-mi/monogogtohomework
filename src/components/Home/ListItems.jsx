import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { deleteItem } from '../../actions/userActions';

const ListItems = () => {
    const { dataItems } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClickDeleteItem=(index)=>{
        dataItems.splice(index, 1);
        dispatch(deleteItem(dataItems));
    }

    return (
        dataItems.map((item, index) => (
            <Card key={item.symbol}
                sx={{
                    minWidth: 375,
                    backgroundColor: '#ef9a9a',
                    p: 1,
                    m: 1,
                    borderRadius: 1
                }} >
                <IconButton onClick={()=>handleClickDeleteItem(index)}
                    aria-label="delete" size="large" sx={{ p: 0, m: 0 }} >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                {(item) &&
                    <CardContent>
                        <Typography align='center' variant="h5">
                            {item.symbol}
                        </Typography>
                        {Object.keys(item).filter(el => el !== "symbol" && el !== "respTime").map((el) =>
                        (
                            (el === "openTime" || el === "closeTime")
                                ?
                                <Typography key={el} sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                                    {el}: {(new Date(item[el])).toLocaleString()}
                                </Typography>
                                :
                                <Typography key={el} sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                                    {el}: {item[el]}
                                </Typography>
                        )
                        )}
                    </CardContent>
                }
            </Card>
        ))
    );
}

export default ListItems;
