import Form from 'next/form'

export default function Home() {
  return (
    <Form action='/search'>
      <input name='item' />
      <button type='submit'>Go</button>
    </Form>
  );
}
