import {Dialog, styled, Typography, Box, InputBase, TextField, Button } from "@mui/material";
import { Close, DeleteOutline } from '@mui/icons-material';

const dialogStyle = {
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0'
}

const RecipientWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: "0 15px",
    "& > div": {
        fontSize: '14px',
        borderBottom: '1px solid #F5F5F5',
        marginTop: '10px'
    }})

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: '14px',
        fontWeight: 500
    }})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
})
const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '18px',
    width: '100px'
})

const ComposeMail = ({openDialog,SetOpenDialog})=>{

const closeComposeMail = () =>{
    SetOpenDialog(false)
}

const sendMail = () =>{
    SetOpenDialog(false)
}

    return(
        <Dialog
            open={openDialog}
            PaperProps={{sx:dialogStyle}}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={closeComposeMail} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='Recipients' />
                <InputBase placeholder='Subject' />
            </RecipientWrapper>
            <TextField 
                multiline
                rows={19}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
               // onChange={(e) => onValueChange(e)}
                //value={data.body}
            />
            <Footer>
                <SendButton onClick={sendMail}>Send</SendButton>
                <DeleteOutline onClick={closeComposeMail}/>
                  
            </Footer>
            
        </Dialog>
    )
}

export default ComposeMail;