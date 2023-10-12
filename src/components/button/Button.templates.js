import Button from "./Button";

export const DefaultTemplate = (args) => {
  const { ...props } = args;

  return <Button {...props}>Soy un botón</Button>;
};
