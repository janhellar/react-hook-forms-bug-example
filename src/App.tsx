import { useEffect, useState, memo, useCallback } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
};

function TestComponent({ log }: { log: (message: string) => void }) {
  const { register, unregister, watch, getValues } = useForm<Inputs>({
    defaultValues: { example: "test" },
  });

  log(`watch "example" output: ${watch("example")}`);

  useEffect(() => {
    register("example");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          log('button "unregister" clicked');
          unregister("example", {
            keepDefaultValue: true,
          });
        }}
      >
        unregister
      </button>
      <button
        onClick={() => {
          log(`button "getValues" clicked: ${getValues().example}`);
        }}
      >
        getValues
      </button>
    </>
  );
}

const TestComponentMemo = memo(TestComponent);

function App() {
  const [logs, setLogs] = useState("");

  const log = useCallback((message: string) => {
    setLogs((logs) => logs + message + "\n");
  }, []);

  return (
    <>
      <TestComponentMemo log={log} />
      <pre>{logs}</pre>
    </>
  );
}

export default App;
