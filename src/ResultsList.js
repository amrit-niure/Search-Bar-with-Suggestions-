import React from 'react'
import './App.css'
function ResultsList({ results, value}) {
    return (
   
        results.length!==0 &&  <div className="result-list">
    {
            results.map((result, id) => {
                return <div key={id} > {result.name}</div>
            })
        }

        </div>
    )
}

export default ResultsList
