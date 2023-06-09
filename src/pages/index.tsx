import styles from '../styles/Home.module.css';
import type { GetStaticProps } from 'next';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import Head from 'next/head';

export interface IndexPageProps {
  title: string;
  summary: string;
}

const IndexPage: React.FC<IndexPageProps> = ({ title, summary }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.Home}>
        <h1 className={styles.Name}>{title}</h1>
        <div className={styles.Summary}>{summary}</div>
        <div>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/catalog")}
          >
            Catalog
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  return {
    props: {
      title: 'Capstone General Store',
      summary:
        "Capstone is your ultimate destination for a wide variety of shopping needs. As a general store, we offer an extensive range of products spanning diverse categories such as stationary, art supplies, tools, and more. At Capstone, we prioritize quality and customer satisfaction, curating a selection of top brands and unique finds to ensure you discover the perfect items to elevate your lifestyle. With a seamless shopping experience, secure transactions, and dedicated customer support, Capstone is committed to making your shopping journey enjoyable and fulfilling.",
    },
  };
};
