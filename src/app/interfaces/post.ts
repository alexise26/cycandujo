export interface Post {
  date:Date;
  title:string;
  text:string;
  postedBy:string;
  key$?:string;
}
