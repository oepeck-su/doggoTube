const key = 'AIzaSyCxbLo0azgShRjxlUBKza_I6FWJ7IGF06E'
var url = "https://www.googleapis.com/youtube/v3/search";


// Search component
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            q : ''
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.newSearch =  this.newSearch.bind(this);
    }
    updateSearch(event){
        event.preventDefault();
        this.setState({q : event.target.value})
    }
    newSearch(event) {
        event.preventDefault();
        axios.get(url, {
            params: {
                key: key,
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: this.state.q + ' dog'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({ videos: response.data.items });
        })

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.newSearch}>
                    <label className="form-group">Search</label>
                    <input onChange={this.updateSearch} value={this.state.q} type="text" className="form-control"></input>
                </form>
                <div>
                <div className="row">
                    {this.state.videos.map(video => {
                        return(
                            <div className="col-md-3 d-flex" key={video.id.videoId}>
                                <div className="card m-1">
                                <a href={'https://youtube.com/watch?=v' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <p className="card-title">{ video.snippet.title } </p>
                                </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>               
            </div>
        );
    }
}

ReactDOM.render(
    <SearchComponent />,
    document.getElementById('searchComponent')
  );


// DachshundComponent

class DachshundComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
    componentDidMount(){
        axios.get(url, {
            params: {
                key: key,
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'dachshund'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({ videos: response.data.items });
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.videos.map(video => {
                        return(
                            <div className="col-md-3 d-flex" key={video.id.videoId}>
                                <div className="card m-1">
                                <a href={'https://youtube.com/watch?=v' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <p className="card-title">{ video.snippet.title } </p>
                                </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <DachshundComponent />,
    document.getElementById('dachshundComponent')
  );



//Corgi Component

  class CorgiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
    componentDidMount(){
        axios.get(url, {
            params: {
                key: key,
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'corgi'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({ videos: response.data.items });
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.videos.map(video => {
                        return(
                            <div className="col-md-3 d-flex" key={video.id.videoId}>
                                <div className="card m-1">
                                <a href={'https://youtube.com/watch?=v' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <p className="card-title">{ video.snippet.title } </p>
                                </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <CorgiComponent />,
    document.getElementById('corgiComponent')
  );



// Husky Component

class HuskyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }
    componentDidMount(){
        axios.get(url, {
            params: {
                key: key,
                part: 'snippet',
                maxResults: 8,
                type: 'video',
                q: 'husky'
            }
        }).then(response => {
            console.log(response.data);
            this.setState({ videos: response.data.items });
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.videos.map(video => {
                        return(
                            <div className="col-md-3 d-flex" key={video.id.videoId}>
                                <div className="card m-1">
                                <a href={'https://youtube.com/watch?=v' + video.id.videoId} target="_blank">
                                    <img className="img-fluid" src={video.snippet.thumbnails.high.url} />
                                    <p className="card-title">{ video.snippet.title } </p>
                                </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <HuskyComponent />,
    document.getElementById('huskyComponent')
  );