import React, { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from 'react-query';
import axios from 'axios';

// Create a client
const queryClient = new QueryClient();

const fetchTodo = (id: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

const QueryComponent = () => {
  const [todoId, setTodoId] = useState(1);
  const query = useQuery(['todo', todoId], () => fetchTodo(todoId));
  const client = useQueryClient();
  if (query.isLoading) return <div>데이터를 불러오고 있습니다.</div>;

  return (
    <div>
      <input
        type="number"
        value={todoId}
        onChange={(e) => {
          setTodoId(e.target.value as any);
        }}
      />
      <pre>{JSON.stringify(query.data?.data)}</pre>
      <button
        onClick={() => {
          client.invalidateQueries('todo');
        }}
      >
        Invalidate
      </button>
    </div>
  );
};

const ReactQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryComponent />
    </QueryClientProvider>
  );
};

export default ReactQuery;
