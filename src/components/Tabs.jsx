export default function Tabs({ children, button, buttonsContainer }) {
  const ButtonsConatainer = buttonsContainer;
  return (
    <>
      <ButtonsConatainer>{button}</ButtonsConatainer>
      {children}
    </>
  );
}
