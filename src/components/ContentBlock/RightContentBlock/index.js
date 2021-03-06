import React from 'react';
import { Row, Col } from 'antd';

import { Slide } from 'react-reveal';

import SvgIcon from '../../../common/SvgIcon';
import Button from '../../../common/Button';

import * as S from './styles';

const RightBlock = ({ last, first, title, content, button, icon }) => {
    return (
        <S.RightBlockContainer last={last} first={first}>
            <Row
                gutter={[16, 16]}
                type='flex'
                justify='space-between'
                align='middle'
            >
                <Col lg={11} md={11} sm={24} xs={24}>
                    <Slide left>
                        <S.ContentWrapper>
                            <S.Title>{title}</S.Title>
                            <S.Content>{content}</S.Content>
                            <S.ButtonWrapper>
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
                                            <Button
                                                color={item.color}
                                                key={id}
                                                width='true'
                                            >
                                                <S.NavLink
                                                    // color={item.color}
                                                    to={item.to}
                                                >
                                                    {item.title}
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
                            </S.ButtonWrapper>
                        </S.ContentWrapper>
                    </Slide>
                </Col>

                <Col lg={11} md={11} sm={24} xs={24} align='center'>
                    <Slide right>
                        <SvgIcon src={icon} className='about-block-image' />
                    </Slide>
                </Col>
            </Row>
        </S.RightBlockContainer>
    );
};

export default RightBlock;
