import React from 'react';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('error.title')}</title>
      </Helmet>
      <Container fluid='lg'>
        <div className='text-center'>
          <h3 className='mb-0 title'>{t('error.heading')}</h3>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
