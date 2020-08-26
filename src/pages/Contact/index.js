import React from 'react';

import ContactFrom from '../../components/ContactForm';

import Container from '../../common/Container';

import ContactBlock from '../../content/contactBlock.json';

const Contact = () => {
    return (
        <Container>
            <ContactFrom
                title={ContactBlock.title}
                content={ContactBlock.text}
            />
        </Container>
    );
};

export default Contact;
