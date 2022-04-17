
  import React, { useEffect } from 'react';
  import { products, useSortableData } from '../utils/helper';
  
  function ProductTable(props) {
    const { items, requestSort, sortConfig } = useSortableData(products);

    /*useEffect(() => {

      // async function fetchData() {
      //   const res = await fetch("https://jsoneditoronline.org/#left=cloud.61946ee43ce44830bd435bc3c624f571", { mode: 'no-cors'});
      //   const json = await res.json();
      //   // const room = json.data.first_name;
      //   console.log('j1111', json);
      // }
      // fetchData();


      fetch('https://jsoneditoronline.org/#left=cloud.61946ee43ce44830bd435bc3c624f571', { 
          mode: 'no-cors' // 'cors' by default
      }).then(function(response) {
          // Do something with response
          return response.json();
      }).then((myJson) => {
        console.log('j1111', myJson);
      });




    }, [])*/

    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
      <div>
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <th><button type="button" onClick={() => requestSort('name')} className={getClassNamesFor('id')}>
                Code
              </button></th>
              <th><button type="button" onClick={() => requestSort('price')} className={getClassNamesFor('name')}>
                Name
              </button></th>
              <th><button type="button" onClick={() => requestSort('stock')} className={getClassNamesFor('price')}>
                Price
              </button></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default ProductTable;