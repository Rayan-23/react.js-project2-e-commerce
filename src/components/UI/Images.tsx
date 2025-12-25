interface IProps {
  ImageURL: string;
  alt:string;
  className:string
}
const Images = (props: IProps) => {
  return <>
  <img src={props.ImageURL} alt={props.alt} className={props.className}/>
  </>;
};

export default Images;
