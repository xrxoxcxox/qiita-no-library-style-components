type Props = {
  color: "red" | "blue";
};

const uuid = crypto.randomUUID();

export function TestComponent1({ color }: Props) {
  return (
    <>
      <style href={`${uuid}-${color}`} precedence="medium">{`
        [data-component-id="${uuid}"].${color} {
          color: ${color};
        }
      `}</style>
      <p className={color} data-component-id={uuid}>
        This is test component 1
      </p>
    </>
  );
}
