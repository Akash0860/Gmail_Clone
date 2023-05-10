import { Box ,Button,styled,List,ListItem} from "@mui/material"
//import {CreateOutlined} from '@mui/icons-material'
import SIDEBAR_DATA from '../config/sidebar.config'
import ComposeMail from "./ComposeMail"
import { useState } from "react";

const ComposeButton = styled(Button)({
    background: "#c2e7ff",
    color: "#001d35",
    borderRadius: 16,
    padding: 15,
    minWidth: 140,
    textTransform: 'none',
    marginLeft:10
})

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        // '& > a': {
        //     textDecoration: 'none',
        //     color: 'inherit',
        // },
        'svg' :{
            marginRight: 20
         }
    }
})

const SideBarContent = () =>{

const [openDialog,SetOpenDialog] = useState(false)

const toggleDialog = () =>{
    SetOpenDialog(prevState => !prevState)
}

    return(
        <Container>
            <ComposeButton onClick={toggleDialog}>
                    Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                       // <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem key={data.id}>
                                <data.icon fontSize="small" />{data.title}
                            </ListItem>
                        //</NavLink>
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} SetOpenDialog={SetOpenDialog}/>
        </Container>
    )
}

export default SideBarContent