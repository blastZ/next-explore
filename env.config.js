const dev = process.env.NODE_ENV !== 'production';

export const ASSETS_PREFIX = dev ? '' : 'next-explore';
