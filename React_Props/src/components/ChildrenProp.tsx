import React, { useState, type FC } from "react";

const ModalDemo: FC = () => {
  const [flag, setFlag] = useState<boolean>(false);
  return (
    <>
      <div>ModalDemo</div>
      <button onClick={() => setFlag(!flag)}>Click Me!!</button>
      {flag && (
        <ModalComp>
          <h1>New Modal</h1>
          <p>can open and close</p>
        </ModalComp>
      )}
    </>
  );
};

interface ModalCompProps {
  children: React.ReactNode;
}

const ModalComp = ({children}: ModalCompProps) => {
  return <>{children}</>;
};

export default ModalDemo;
