const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <h1>{ data.place.name }</h1>
                    </div>
                    <div className="col-sm-6">
                        <img src = { data.place.pic } alt = { data.place.name } />
                        <h2>Location: { data.place.city}, {data.place.state}</h2>
                        <h3>Cuisines available: { data.place.cuisines} </h3>
                        <h3>Rating: currently unrated</h3>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                            <button type="submit" className="btn btn-danger">Delete
                            </button>
                        </form>     

                    </div>
                </div>
                <h2>Comments: no comments yet!</h2>
            </main>
        </Def>
    )
}

module.exports = show