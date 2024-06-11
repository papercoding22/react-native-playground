export class Product {
  id: string;
  name: string;
  description: string;
  logoName?: string;
  logoUrl?: string;

  constructor(
    id: string,
    name: string,
    description: string,
    logoName?: string,
    logoUrl?: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.logoName = logoName;
    this.logoUrl = logoUrl;
  }

  getLogoSource() {
    if (this.logoUrl) {
      return {uri: this.logoUrl};
    }

    switch (this.logoName) {
      case 'facebook':
        return require('../../assets/logos/instagram.png');
      case 'twitter':
        return require('../../assets/logos/twitter.png');
      case 'instagram':
        return require('../../assets/logos/instagram.png');
      default:
        return require('../../assets/logos/instagram.png');
    }
  }
}
