import React from 'react';

const poem = [{
    lines: [    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.']
  },]
//   const RenderingList = ({ recipes }) => {
//     return (
//       <div>
//         <h2>Recipes</h2>
//         {recipes.map(recipe => (
//           <div key={recipe.id}>
//             <h2>{recipe.name}</h2>
//             <ul>
//               {recipe.ingredients.map(ingredient => (
//                 <li key={ingredient}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     );
//   }


  const RenderingLists = () => {


    return (
        <div>
      {poem.map(poems => (
        <div key={poems.lines}>
       
          <article>
            {poems.lines.map(poems => (
              <p key={poems}>{poems} <hr /></p>
            ))}
          </article>
        </div>
      ))}
    </div>
    );
  };
  
  



export default RenderingLists ;
