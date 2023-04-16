import styled from "styled-components";

const StyleSection = styled.section`
  width: 400px;
  margin: 0 auto;
`;

const StyleTitle = styled.h3`
  /* margin-bottom: 30px;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 5px;
  border-top: 1px solid gray;
  background-color: #0f0534;
  color: white; */
`;

export default function Section({ title, children }) {
  return (
    <StyleSection>
      {title && <StyleTitle>{title}</StyleTitle>}
      {children}
    </StyleSection>
  );
}
