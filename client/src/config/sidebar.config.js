

//import { routes } from "../routes/routes"
import { Photo, StarOutline, SendOutlined, InsertDriveFileOutlined, DeleteOutlined,
    MailOutlined } from '@mui/icons-material';

const SIDEBAR_DATA = [
    {
        id:1,
        name: 'inbox',
        title: 'Inbox',
        icon: Photo,
        //path: routes.emails.path
    },
    {
        id:2,
        name: 'starred',
        title: 'Starred',
        icon: StarOutline,
       // path: routes.emails.path
    },
    {
        id:3,
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
       // path: routes.emails.path
    },
    {
        id:4,
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined,
        //path: routes.emails.path
    },
    {
        id:5,
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlined,
       // path: routes.emails.path
    },
    {
        id:6,
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutlined,
        //path: routes.emails.path
    }
];

export default SIDEBAR_DATA;