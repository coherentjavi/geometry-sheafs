import {InlineMath, BlockMath} from 'react-katex';
import 'katex/dist/katex.min.css';

function DeRham(){

    return(
    <>
        
        De Rham cohomology can be a useful and powerful tool whenever one is working on a problem in  <InlineMath>\R^n</InlineMath> or any other manifold where vector-fields/differntial-forms are involved.
        
    
        One such example is the classic problem generally mentioned when this topic is first presented, finding the antiderivative of a function.

        
        <p>
            
        There correspondence between vector fields and differntial forms can be seen categorically in the diagram below </p>
        
        <BlockMath>
            test
        </BlockMath>




    </>
    );
}

export default DeRham;