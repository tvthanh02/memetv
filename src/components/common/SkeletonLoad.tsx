type propsSkeletonLoad = {
  className: string;
};

function SkeletonLoad({ className }: propsSkeletonLoad) {
  return <div className={`skeleton ${className}`}></div>;
}

export default SkeletonLoad;
