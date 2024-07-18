import { Modal, Button, Select, Typography, Form } from 'antd';

const { Option } = Select;
const { Text } = Typography;

interface Props {
    isPCardModalVisible: boolean;
    setIsPCardModalVisible: (visible: boolean) => void;
}

const PCardUserModal = ({
    isPCardModalVisible,
    setIsPCardModalVisible,
}: Props) => {
    const handleOk = () => {
        setIsPCardModalVisible(false);
    };

    const handleCancel = () => {
        setIsPCardModalVisible(false);
    };

    return (
        <Modal
            title='Add PCard User'
            visible={isPCardModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            className='PCard-modal'
            width={406}
            footer={[
                <Button key='cancel' onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key='submit'
                    className='primary-button '
                    type='primary'
                    onClick={handleOk}
                >
                    Add PCard User
                </Button>,
            ]}
        >
            <Form layout='vertical'>
                <Form.Item label='Company'>
                    <Select placeholder='Select Company'>
                        <Option value='company1'>Company 1</Option>
                        <Option value='company2'>Company 2</Option>
                        {/* Add more options as needed */}
                    </Select>
                    <Text type='secondary'>
                        This is the company who should be charged.
                    </Text>
                </Form.Item>
                <Form.Item label='PCard User'>
                    <Select placeholder='Select PCard User'>
                        <Option value='user1'>User 1</Option>
                        <Option value='user2'>User 2</Option>
                        {/* Add more options as needed */}
                    </Select>
                    <Text type='secondary'>
                        This is the person whose card was charged.
                    </Text>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default PCardUserModal;
