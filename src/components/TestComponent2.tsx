type Props = {
  color: "red" | "blue";
};

const uuid = crypto.randomUUID();

export function TestComponent2({ color }: Props) {
  return (
    <>
      <style href={uuid} precedence="medium">{`
        [data-component-id="${uuid}"] {
          font-size: 1.5rem;
        }
      `}</style>
      <style href={`${uuid}-${color}`} precedence="medium">{`
        [data-component-id="${uuid}"].${color} {
          color: ${color};
        }
      `}</style>
      <p className={color} data-component-id={uuid}>
        This is test component 2
      </p>
    </>
  );
}
