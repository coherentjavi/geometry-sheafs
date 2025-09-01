import './App.css';

function App() {
  return (
    <div>
      <p className='m-10'>
        {' '}
        This site was created to share concrete examples and theory from the
        higher level math that I come across in this journey called life.
        Mathematical maturity beyond undergraduate math is generally assumed,
        however it would be nice if people from different audiences somehow
        benefitted or learned something from here as well.
      </p>

      <p className='m-10'>
        {' '}
        The examples and theory will be from different areas I'm interested in
        or wish to learn more about. This includes algebraic/arithmetic
        geometry, algebraic number theory, complex geometry, Hodge theory,
        relativity, quantum field theory, among others.
      </p>

      <p className='m-10'>
        {' '}
        The frontend for this site was developed with React/Vite. As of now
        there isn't a backend, however one will be added as time passes to
        support more content and comments.
        <a
          className=' text-blue-600 hover:text-blue-800 visited:text-purple-600'
          href='https://www.npmjs.com/package/react-katex'
        >
          {' '}
          React-KateX
        </a>{' '}
        was used to render all the latex seen throughout the site.
      </p>
    </div>
  );
}

export default App;
