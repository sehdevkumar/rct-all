import React from "react";

// The HOC
function withLoading<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  return function ComponentWithLoading(props: T & { isLoading: boolean }) {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Pass remaining props to the wrapped component
    return <WrappedComponent {...(rest as unknown as T)} />;
  };
}

// A sample component
type DataProps = {
  data: string;
};

const DataDisplay: React.FC<DataProps> = ({ data }) => {
  return <div>Data: {data}</div>;
};

// Wrap the component with the HOC
const DataDisplayWithLoading = withLoading(DataDisplay);

// Use the enhanced component
const HOCExampleCode: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>HOC Example</h1>
      <DataDisplayWithLoading isLoading={isLoading} data="Hello World!" />
    </div>
  );
};

export default HOCExampleCode;
