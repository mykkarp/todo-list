import styled from 'styled-components';

const StyledTodoList = styled.div`
  margin: 10vh auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  max-width: 600px;
  border: 1px solid #5c86ff;
  padding: 0.8rem;
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;

  .todos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ul{
      width: 100%;
    }
  }
  header {
    border-bottom: 1px solid #5c86ff;
    width: 100%;
    text-align: center;
    margin: 0px 0px 0.7rem 0px;
    position: relative;
  }
  .add-todo-btn {
    position: absolute !important;
    top: 0;
    right: 0;
  }
  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0px 0px 10px 0px;
  }
`;

export default StyledTodoList;

