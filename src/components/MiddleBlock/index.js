import React from 'react';

import { Row, Col } from 'antd';
import { Fade } from 'react-reveal';

import Button from '../../common/Button';

import * as S from './styles';

const MiddleBlock = ({ last, id, title, content, button }) => {
    return (
        <S.MiddleBlock last={last} id={id}>
            <Row type='flex' justify='center' align='middle'>
                <Fade bottom>
                    <S.ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <S.Title>{title}</S.Title>
                            <S.Content last={last}>{content}</S.Content>
                            {button &&
                                typeof button === 'object' &&
                                button.map((item, id) => {
                                    return item.url ? (
                                        <Button key={id} width='true'>
                                            <S.link
                                                href={item.url}
                                                color={item.color}
                                            >
                                                {item.title}{' '}
                                            </S.link>
                                        </Button>
                                    ) : item.to ? (
                                        <Button key={id} width='true'>
                                            <S.NavLink to={item.to}>
                                                {item.title}{' '}
                                            </S.NavLink>
                                        </Button>
                                    ) : (
                                        <Button
                                            key={id}
                                            color={item.color}
                                            width='true'
                                        >
                                            {item.title}
                                        </Button>
                                    );
                                })}
                        </Col>
                    </S.ContentWrapper>
                </Fade>
            </Row>
        </S.MiddleBlock>
    );
};

export default MiddleBlock;
