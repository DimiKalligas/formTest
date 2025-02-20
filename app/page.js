import Form from 'next/form'

export default function Home() {
  return (
    <Form action='/search'>
      <input name='searchFor' />
      <button type='submit'>Go</button>
    </Form>
  );
}
