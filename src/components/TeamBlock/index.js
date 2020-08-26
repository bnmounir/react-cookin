import React from 'react';
import { Row, Col, Card } from 'antd';
import { Fade } from 'react-reveal';

import * as S from './styles';

const { Meta } = Card;

const TeamBlock = ({ last, id, title, content, members }) => {
    return (
        <S.TeamBlock last={last} id={id}>
            <Row type='flex' justify='center' align='middle'>
                <Fade bottom>
                    <S.ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <S.Title>{title}</S.Title>
                            <S.Content last={last}>{content}</S.Content>
                        </Col>
                    </S.ContentWrapper>
                </Fade>
            </Row>
            <Row gutter={[16, 16]} align='middle' type='flex' justify='center'>
                <Fade right>
                    {members.map((member, i) => (
                        <Col
                            key={(member.name + Date.now() + i).toString()}
                            lg={8}
                            md={12}
                            sm={24}
                        >
                            <Card
                                style={{ width: 300 }}
                                cover={<img alt='avatar' src={member.avatar} />}
                                bordered
                            >
                                {/* <Avatar size={64} src={member.avatar} /> */}
                                <Meta title={member.name} />
                                <Meta
                                    title={member.title}
                                    description={member.shortBio}
                                />
                            </Card>
                        </Col>
                    ))}
                </Fade>
            </Row>
        </S.TeamBlock>
    );
};

export default TeamBlock;
