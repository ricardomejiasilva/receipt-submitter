import { Layout, Space, Typography, Avatar, Button } from 'antd';
import ClarkLogo from '../SVG/ClarkLogo';

const { Header } = Layout;
const { Text } = Typography;

const Nav = () => {
    return (
        <Header className='header'>
            <Button type='link'>
                <ClarkLogo />
            </Button>
            <Space className='nav-right' size={0}>
                {location.pathname === '/receiptSubmitter' && (
                    <span className='current-location'>Receipt Submitter</span>
                )}

                <Space size={8} className='user-name'>
                    <Avatar className='avatar' size='default' gap={0}>
                        U
                    </Avatar>
                    <Text>User</Text>
                </Space>
            </Space>
        </Header>
    );
};

export default Nav;
