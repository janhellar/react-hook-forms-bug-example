import { useEffect } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
};

function App() {
  const { register, unregister, watch, getValues } = useForm<Inputs>({
    defaultValues: { example: "test" },
  });

  console.log('watch "example" output:', watch("example"));

  useEffect(() => {
    register("example");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log('button "unregister" clicked');
          unregister("example", {
            keepDefaultValue: true,
          });
        }}
      >
        unregister
      </button>
      <button
        onClick={() => {
          console.log('button "log values" clicked:', getValues());
        }}
      >
        log values
      </button>
    </>
  );
}

export default App;
