import styled from "styled-components";

const StyledListItem = styled.li`
  position: relative;

  max-width: 100%;
  border-bottom: 1px solid #bbc1e1;
  padding: 0.5rem;
  height: ${({ calcHeight }) => {
    if (!calcHeight) return "3.3rem"
    return calcHeight;
  }};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: inset 0px -10px 6px -6px #2b3044;

  transition: height 0.2s ease;
  .paper {
    width: 100%;
    height: auto;
    border: 1px solid #395ac0;
    padding: 0.4rem;
    & > .task {
      margin: 0px 0px 0px 0px;
    }
  }
  .task {
    display: flex;
    margin: 7px 0px 0px 0px;
    &_done {
      text-decoration: line-through;
    }
  }

  .task-content {
    flex-grow: 1;
    max-width: calc(100% - 1.5rem);

    span {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-size: 1.1rem;
      line-height: 1.2;
    }
  }
  .checkbox {
    margin: 0.05rem 0.3rem 0px 0px;
    max-width: 1.2rem;
  }
  .subtasks {
  }

  .more {
    margin: 10px 0px 0px 0px;
    opacity: 1;
    transition: opacity 0.2s ease;
    &_hidden {
      opacity: 0;
    }
  }
  .primary-area {
    span {
      word-wrap: break-word;
    }
  }
`;

export default StyledListItem;