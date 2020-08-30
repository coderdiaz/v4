export default interface IShot {
  id: string;
  html_url: string;
  title: string;
  images: {
    normal: string;
    hidpi: string;
    two_x: string;
    four_x: string;
  }
  tags: string[];
}