import Link from 'next/link';
import { ASSETS_PREFIX } from '../env.config';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(0,0,0,0.25)',
        padding: 32,
        textAlign: 'center'
      }}>
      <Demo href="mdx-test" />
      <Demo href="image-load" />
    </div>
  );
};

const Demo = ({ href }) => (
  <Link href={`${href}`}>
    <a
      style={{
        marginBottom: 16
      }}>{`${href}`}</a>
  </Link>
);
