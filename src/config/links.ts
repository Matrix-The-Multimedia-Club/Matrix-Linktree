/**
 * MATRIX CLUB - OFFICIAL SOCIAL LINKS CONFIGURATION
 * 
 * Instructions:
 * Replace each placeholder URL below with the verified Matrix Club official URL.
 * 
 * Required configuration keys:
 * - instagram
 * - linkedin
 * - whatsappChannel
 * - whatsappCommunity
 * - email
 */

export interface LinksConfig {
  instagram: string;
  linkedin: string;
  whatsappChannel: string;
  whatsappCommunity: string;
  email: string;
}

export const linksConfig: LinksConfig = {
  // Official Matrix Club Instagram profile URL
  instagram: 'https://www.instagram.com/matrixclub_vitb',

  // Official Matrix Club LinkedIn organization URL
  linkedin: 'https://www.linkedin.com/company/matrixclub-vitbhopal/home/',

  // Official Matrix Club WhatsApp Channel invite link (Official announcements & quick updates)
  whatsappChannel: 'https://whatsapp.com/channel/0029VbDCPhzEquiKUnwWFP36',

  // Official Matrix Club WhatsApp Community invite link (Connect with the Matrix family)
  whatsappCommunity: 'https://chat.whatsapp.com/IQbt637PynDE4NX8sTWAXx',

  // Official Matrix Club contact email address
  email: 'mailto:multimedia_club@vitbhopal.ac.in',
};
