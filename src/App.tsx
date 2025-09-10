import './App.css';

function App() {
  return (
    <div>
      <p className='m-10'>
        
        This site was created to share concrete examples and theory from the
        higher level math I come across in this journey called life.
        Mathematical maturity at or above the undergraduate level is often assumed.
        However, it would be nice if people from all audiences somehow
        benefitted or learned something from here as well.
      </p>

      <p className='m-10'>
        
        The examples and theory will be from the different areas I'm interested in, from things I originally got stuck on and from topics I wish to learn more about. Such as stuff from Algebraic/Arithmetic
        Geometry, Algebraic Number Theory, Complex Geometry, Hodge theory,
        Relativity, Quantum Field Theory, Among Others.
      </p>

      <p className='m-10'>
        
        The frontend for this site was developed with TypeScript-React/Vite and Tailwind. As of now
        there isn't a backend, however I'll likely add one as time passes to
        support more types of content and comments.{' '}
        <a
          className=' text-blue-600 hover:text-blue-800 visited:text-purple-600'
          href='https://www.npmjs.com/package/react-katex'
        >
          
          React-KateX
        </a> {' '} was used to render the latex seen throughout the site.
      </p>
      <p className='m-10'> I'll try my best to update this site on a bi-weekly basis.</p>
    </div>
  );
}

export default App;
