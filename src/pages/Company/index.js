import React from 'react';

import ContactFrom from '../../components/ContactForm';
import ContentBlock from '../../components/ContentBlock';

import TeamBlock from '../../components/TeamBlock';
import Container from '../../common/Container';

import about from '../../content/about.json';
import Mission from '../../content/mission.json';
import OurTeam from '../../content/ourTeam.json';
import ContactBlock from '../../content/contactBlock.json';

const Company = () => {
    return (
        <Container>
            <ContentBlock
                type='right'
                first='true'
                addSpace
                title={about.title}
                content={about.text}
                icon='intro.svg'
            />
            <ContentBlock
                type='left'
                icon='mobile.svg'
                title={Mission.title}
                content={Mission.text}
            />
            <TeamBlock
                title={OurTeam.title}
                content={OurTeam.text}
                members={OurTeam.members}
            />
            <ContactFrom
                title={ContactBlock.title}
                content={ContactBlock.text}
            />
        </Container>
    );
};

export default Company;
