const url = "";

export const fetchData = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {
  let headers: any = {
    'Content-Type': 'application/json',
  }

  if (process.browser) {
    const token = localStorage.getItem("access_token")
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return async () => {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();
    if (json.errors) {
      const { message, extensions } = json.errors[0] || 'Error..';
      const { code } = extensions
      throw new Error(JSON.stringify({ message, code, extensions }));
    }
    return json.data;
  };
};
