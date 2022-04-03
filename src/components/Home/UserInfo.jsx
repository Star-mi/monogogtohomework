import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from '@mui/material/List';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import { login, logInPasskey } from '../../actions/userActions';
import ListItems from './ListItems';
import { refreshTime } from '../../utils/constans';


const UserInfo = () => {
  const { dataNames, dataItems } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleClickReturnIndex = (name) => {
    const element = dataItems.filter(el => el.symbol === name);
    if (!element[0] || (Date.now() - element[0].respTime > refreshTime)) {
      dispatch(logInPasskey(name));
    } else {
      dispatch(login(element[0]));
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 1,
        m: 3,
        ml: 5,
        bgcolor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }} >
        <ListItems/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: '#b4ffff',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 800,
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          {
            dataNames.map((name, index) => (
              <ul key={index} >
                <ListItemButton key={name} sx={{ bgcolor: '#80deea' }}
                  onClick={() => handleClickReturnIndex(name)}
                >
                  <ListItemText primary={name} />
                </ListItemButton>
              </ul>
            ))}
        </List>
      </Box>
    </Box>
  )
}

export default UserInfo