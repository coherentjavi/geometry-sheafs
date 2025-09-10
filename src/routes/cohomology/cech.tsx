


function Cech() {
  return (
    <div>
      <p className=' flex justify-center m-10'>
        The ideas of sheafs and spectral sequences were introduced by Leray and Čech cohomology was later developed by Eduard Čech , it's a particular type of sheaf cohomology theory.


        We're able to to reintrepret many things and relationships with sheaves and sequences. For example in complex geometry we know a function f on a complex manifold 
        is holomorphic if and only if 

        With sheaves we can state this fact with the following short exact sequence 

        Where is the sheaf of holomorphic functions, is the sheaf of smooth functions and is the Dolbeault operator.




        Another example is also reintrepreting category morphisms and their objects with an appropiate sheaf.  

      
      </p>
      <p>Given short sequence of sheaves, we the say sequence exact if the induced short sequence of stalks are exact .</p>

      <p>However, I also like thinking with defintions instead present in Rick's book as I find them more natural in certain circumstances. Both definitions are equivalent as 
        shown below.
      </p>
    </div>

  );
}

export default Cech;
