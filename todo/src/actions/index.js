export const NEW = 'NEW';
export const FINISHED = 'FINISHED';

export const newTodo = (todo) => {
  return {
    type: NEW,
    payload: todo
  };
};

export const finished = (index) => {
  return {
    type: FINISHED,
    payload: index
  };
};