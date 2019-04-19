import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import Highlight from './Highlight';

const components = {
  pre: props => <div {...props} />,
  code: Highlight
};

export default ({ children }) => (
  <MDXProvider components={components}>
    <div style={{ padding: '20px' }}>{children}</div>
  </MDXProvider>
);
