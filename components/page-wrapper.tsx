import { FC, useState } from 'react';
import AppNavBar from '@components/shared/navbar';
import AppFooter from '@components/shared/footer';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import PageWrapperStyles from '@styles/page-wrapper.module.sass';
import Head from 'next/head';
import { useEffect } from 'react';

type PageWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  /**
   * Module name to inject in the document root. Will be suffixed with `' - Smartblock Knowledge Base'`
   */
  pageTitle?: string;
};

export const defaultPageTitle = 'Smartblock Knowledge Base';

/**
 * Generates a document wrapper (w/ navbar and footer) for an specific routed page
 */
const PageWrapper: FC<PageWrapperProps> = ({ pageTitle, children, ...standardProps }) => {

  const [ currentTitle, setCurrentTitle ] = useState<typeof pageTitle>();

  useEffect(() => {
    if (pageTitle) {
      setCurrentTitle([pageTitle, '-', defaultPageTitle].join(' ').trim());
    }
  }, [pageTitle]);

  return (
    <div {...standardProps} className={PageWrapperStyles.bodyWrapper}>
      {
        currentTitle
          ? <Head>
            <title>{currentTitle}</title>
          </Head>
          : null
      }
      <AppNavBar />
      <div className={PageWrapperStyles.subWrapper}>
        {children}
      </div>
      <AppFooter />
    </div>
  );
}

export default PageWrapper;
