import { Col, Row, Button, Card, Typography, Divider, Space } from 'antd';
import type { Receipt } from './types';

const { Text } = Typography;

const Receipt = ({ receipt }: { receipt: Receipt }) => {
    return (
        <Card className='receipt' bordered={true}>
            <Row>
                <Text className='receipt__id'>RECEIPT {receipt.id}</Text>
            </Row>

            <Row gutter={16}>
                <Col className='receipt__image-container'>
                    <img
                        src={receipt.img}
                        alt='Receipt'
                        width={48}
                        height={48}
                    />
                </Col>
                <Col className='receipt__details'>
                    <Row>
                        <Text className='receipt__title' strong>
                            {receipt.title}
                        </Text>
                    </Row>
                    <Row justify='space-between'>
                        <Text className='text-sm color-label'>
                            ${receipt.amount}
                        </Text>
                        <Text className='text-sm color-label'>
                            {receipt.date}
                        </Text>
                    </Row>
                </Col>
            </Row>

            <Text className='text-sm color-label'>{receipt.description}</Text>

            <Divider dashed />

            <Space direction='vertical' className='w-full' size={16}>
                <Space direction='vertical' size={0}>
                    <Text className='text-sm color-description'>
                        {receipt.user}
                    </Text>
                    <Text className='text-sm color-description'>
                        {receipt.store}
                    </Text>
                </Space>

                <Button className='w-full button-border' type='default'>
                    Edit
                </Button>
            </Space>
        </Card>
    );
};

export default Receipt;
