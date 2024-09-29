import { Star } from "./Star";

export type StarType = {
  count: number;
};

export const Stars : React.FC<StarType> = ({count}) => {
  return (
    (Number(count) > 0 && Number(count) <= 5) ?
    <ul className="card-body-stars u-clearfix">
      <li>
          {
            // eslint-disable-next-line prefer-spread
            Array.apply(null, Array(Number(count))).map((_, idx) => {
              return (<Star key={idx}/>);
            })
          }
      </li>
    </ul> :
    <><span>Validation Error</span></>
  );
};

Stars.defaultProps = {
  count: 0,
};
