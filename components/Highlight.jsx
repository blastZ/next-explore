import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={{
        plain: {
          fontSize: 16,
          fontFamily: 'roboto',
          color: '#D4D4D4',
          backgroundColor: '#1E1E1E'
        },
        styles: [
          {
            types: ['prolog'],
            style: {
              color: 'rgb(0, 0, 128)'
            }
          },
          {
            types: ['comment'],
            style: {
              color: 'rgb(106, 153, 85)'
            }
          },
          {
            types: ['builtin', 'tag', 'changed', 'keyword'],
            style: {
              color: 'rgb(86, 156, 214)'
            }
          },
          {
            types: ['number', 'inserted'],
            style: {
              color: 'rgb(181, 206, 168)'
            }
          },
          {
            types: ['constant'],
            style: {
              color: 'rgb(100, 102, 149)'
            }
          },
          {
            types: ['attr-name', 'variable'],
            style: {
              color: 'rgb(156, 220, 254)'
            }
          },
          {
            types: ['deleted', 'string'],
            style: {
              color: 'rgb(206, 145, 120)'
            }
          },
          {
            types: ['selector'],
            style: {
              color: 'rgb(215, 186, 125)'
            }
          },
          {
            types: ['punctuation'],
            style: {
              color: 'rgb(128, 128, 128)'
            }
          },
          {
            types: ['operator'],
            style: {
              color: 'rgb(212, 212, 212)'
            }
          }
        ]
      }}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
