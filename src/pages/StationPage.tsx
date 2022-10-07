import React from "react";
import Components from '../components';

interface Props {
  isDeveloper: boolean;
}

const NewComponent = (props: Props) => {
  return (
    <Components.Layout>
      <div>Station Page</div>
    </Components.Layout>
  );
};

export default NewComponent;

