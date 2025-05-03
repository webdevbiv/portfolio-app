interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={` flex flex-col  mx-auto px-4 sm:px-6 lg:px-10 xl:px-12  max-w-screen-xl  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
