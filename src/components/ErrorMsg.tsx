interface IProps {
  massage: string;
}
const ErrorMsg = (props: IProps) => {
  return props.massage ? (
    <span className=" block text-red-700 font-semibold text-sm">{props.massage}</span>
  ) : null;
};

export default ErrorMsg;
