const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">
                        {c.rant ? 'Rant!' : 'Rave!'}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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
                <h2>Comments</h2>
                {comments}
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" className="form-control"></textarea>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="rant">Is it a rant?</label>
                            <input type="checkbox" id="rant" name="rant" className="form-control" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit comment"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = show