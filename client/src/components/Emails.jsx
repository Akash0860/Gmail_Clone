import { useOutletContext,useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import API_URLS from "../services/api.urls";
import { useEffect,useState } from "react";
import { Box, List, Checkbox } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import Email from "./Email";
import { EMPTY_TABS } from "../constants/constant";
import NoMails from "./common/NoMails";
const Emails = () =>{
   // const [starredEmail, setStarredEmail] = useState(false);
    const {openDrawer} = useOutletContext();
    const [selectedEmails, setSelectedEmails] = useState([]);
    const {type} = useParams();
    const [refreshScreen,setRefreshScreen]=useState(false);
    const getEmailService = useApi(API_URLS.getEmailFromType);
    const deleteEmailService = useApi(API_URLS.deleteEmails);
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    useEffect(()=>{
        getEmailService.call({},type);
    },[type,refreshScreen])

    const selectAllEmails = (e) => {
        if (e.target.checked) {
            const emails = getEmailService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        } else {
            setSelectedEmails([]);
        }
    }

    const deleteSelectedEmails = () =>{
        if (type === 'bin') {
            deleteEmailService.call(selectedEmails);
        } else {
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState);
    }

    return(
        <Box style={openDrawer ? { marginLeft: 250, width: 'calc(100%-260px)' } : { width: '100%' } }>
            <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
                <DeleteOutline onClick={(e)=> deleteSelectedEmails(e)}/>
            </Box>
            <List>
                {
                    getEmailService?.response?.map(email => (
                        <Email 
                            email={email} 
                            key={email._id}
                           // setStarredEmail={setStarredEmail} 
                            selectedEmails={selectedEmails}
                            setSelectedEmails={setSelectedEmails}
                            setRefreshScreen={setRefreshScreen}
                        />
                    ))
                }
            </List> 
            {
                getEmailService?.response?.length === 0 &&
                    <NoMails message={EMPTY_TABS[type]} />
            }
        </Box>
    )
}

export default Emails;