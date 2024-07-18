import { useState } from 'react';
import {
    Col,
    Layout,
    Row,
    Space,
    Alert,
    Select,
    Button,
    Divider,
    Typography,
    Input,
    Pagination,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Receipt from './Receipt';
import '../receipt-submitter.less';
import PCardUserModal from './modals/PCardUserModal';
import MoneyIcon from '../assets/CurrencyCircleDollar.svg';
import ReceiptIcon from '../assets/Receipt.svg';
import { Receipts } from '../models/global/Receipts';

const { Content } = Layout;
const { Option } = Select;
const { Text, Title } = Typography;
const { Search } = Input;

const options = [
    {
        value: 'sarah',
        name: 'Sarah’s PCard',
        company: 'Company name | Department',
    },
    {
        value: 'steve',
        name: 'Steve’s PCard',
        company: 'Company name | Department',
    },
];

const ReceiptSubmitter = () => {
    const [selectedValue, setSelectedValue] = useState('sarah');
    const [currentPage, setCurrentPage] = useState(1);
    const [isPCardModalVisible, setIsPCardModalVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('posted');

    const pageSize = 8;
    const totalItems = Receipts.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex =
        startIndex + pageSize > totalItems ? totalItems : startIndex + pageSize;
    const displayedReceipts = Receipts.slice(startIndex, endIndex);

    const showModal = () => {
        setIsPCardModalVisible(true);
    };

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <Content className='receipt-submitter'>
            <Row>
                <Col className='receipt-submitter__left-container' span={3}>
                    <Space className='w-full' direction='vertical' size={24}>
                        <Row className='w-full'>
                            <Select
                                value={selectedValue}
                                defaultValue='sarah'
                                onChange={handleChange}
                                className='receipt-submitter__PCard-select w-full'
                                popupClassName='PCard-select-menu'
                                dropdownStyle={{ width: 278 }}
                                dropdownRender={(menu) => (
                                    <>
                                        {menu}
                                        <Divider />
                                        <Button
                                            type='dashed'
                                            onClick={showModal}
                                            className='w-full'
                                        >
                                            <span>
                                                <PlusOutlined /> Add PCard User
                                            </span>
                                        </Button>
                                    </>
                                )}
                            >
                                {options.map((option) => (
                                    <Option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        <Row justify='space-between'>
                                            <div className='receipt-submitter__PCard-option'>
                                                <div>{option.name}</div>
                                                <div className='text-sm color-description'>
                                                    {option.company}
                                                </div>
                                            </div>
                                        </Row>
                                    </Option>
                                ))}
                            </Select>
                        </Row>
                        <Space className='w-full' direction='vertical' size={8}>
                            <Row
                                className={`receipt-submitter__menu-tab ${
                                    activeTab === 'posted' ? 'active-tab' : ''
                                }`}
                                onClick={() => setActiveTab('posted')}
                            >
                                <Space align='end' size={8}>
                                    <img src={MoneyIcon} />
                                    <Text>Posted Transactions</Text>
                                </Space>
                            </Row>
                            <Row
                                className={`receipt-submitter__menu-tab ${
                                    activeTab === 'receipts' ? 'active-tab' : ''
                                }`}
                                onClick={() => setActiveTab('receipts')}
                            >
                                <Space size={8}>
                                    <img src={ReceiptIcon} />
                                    <Text>Submitted Receipts</Text>
                                </Space>
                            </Row>
                        </Space>
                    </Space>
                </Col>
                <Col className='receipt-submitter__right-container' span={21}>
                    <Space size={24} direction='vertical' className='w-full'>
                        <Row>
                            <Alert
                                message='Receipts due Mar 19 – You have 3 transactions missing receipts'
                                type='warning'
                                showIcon
                                className='w-full'
                            />
                        </Row>

                        <Row align={'middle'} justify='space-between'>
                            <Title style={{ margin: 0 }} level={2}>
                                Submitted Receipts (Last 60 days)
                            </Title>
                            <Col>
                                <Button
                                    className='primary-button'
                                    type='primary'
                                    icon={<PlusOutlined />}
                                >
                                    Add Receipt
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Search
                                className='button-border'
                                placeholder='Search'
                            />
                        </Row>

                        <Row className='receipt-submitter__receipt-container'>
                            {displayedReceipts.map((receipt) => (
                                <Receipt key={receipt.id} receipt={receipt} />
                            ))}
                        </Row>

                        <Row justify='end'>
                            <Pagination
                                simple
                                defaultCurrent={1}
                                current={currentPage}
                                pageSize={pageSize}
                                total={totalItems}
                                onChange={handlePageChange}
                            />
                        </Row>
                    </Space>
                </Col>
            </Row>

            <PCardUserModal
                isPCardModalVisible={isPCardModalVisible}
                setIsPCardModalVisible={setIsPCardModalVisible}
            />
        </Content>
    );
};

export default ReceiptSubmitter;
