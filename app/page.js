import Form from 'next/form'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form className="flex flex-col gap-y-2" action={action}>
        <input className="px-4 py-2 rounded" name='item' />
        <button className="bg-teal-700 text-white p-1 disabled:bg-gray-500 rounded-lg" type='submit'>Go</button>
      </Form>
    </main>
  );
}
