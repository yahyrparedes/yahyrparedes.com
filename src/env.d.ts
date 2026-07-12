// Type declarations for path aliases
declare module '@data/site' {
  import type { SiteProfile } from '../data/site';
  export const site: SiteProfile;
}
declare module '*?raw' {
  const content: string;
  export default content;
}
