import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import Container from '../../common/Container';

import * as S from './styles';

const Footer = () => {
    return (
        <Fragment>
            <S.Footer>
                <Container>
                    <Col>
                        <Link to='/'>
                            <S.LogoContainer />
                        </Link>
                    </Col>
                    <Row type='flex' justify='space-between'>
                        <Row type='flex' justify='space-between'>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <S.Title>Company</S.Title>
                                <S.NavLink to='/company'>About</S.NavLink>
                                <S.NavLink to='/company'>Mission</S.NavLink>
                                <S.NavLink to='/company'>Product</S.NavLink>
                            </Col>
                        </Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <S.Title>Social</S.Title>
                            <S.Target
                                href='https://twitter.com'
                                target='_blank'
                            >
                                Twitter
                            </S.Target>
                            <S.Target
                                href='https://facebook.com'
                                target='_blank'
                            >
                                Facebook
                            </S.Target>
                            <S.Target
                                href='https://linkedin.com'
                                target='_blank'
                            >
                                LinkedIn
                            </S.Target>
                        </Col>
                    </Row>
                </Container>
            </S.Footer>
            <hr
                style={{
                    margin: '0 auto',
                    color: '#feebff',
                    border: 'none',
                }}
            />
            <S.Extra>
                <Container border='true'>
                    <Row type='flex' justify='space-between'>
                        <Col lg={12} md={12} sm={12} xs={24}>
                            <S.CSite>
                                {new Date().getFullYear()} All Rights Reserved ©
                                What's Cookin'
                            </S.CSite>
                        </Col>
                    </Row>
                </Container>
            </S.Extra>
        </Fragment>
    );
};

export default Footer;
