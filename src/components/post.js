import React, {Component} from 'react';

class Post extends Component {

  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    const id = /post=([^&#=]*)/.exec(window.location.search)[1];
    const url = 'http://localhost:8000/api/get/post/?post=' + id;
    fetch(url).then(data => data.json()).then(data => {
      this.setState({data: data});
    });
  }

  render() {
    let content = '';
    let o = '';
    if (this.state.data) {
      o = this.state.data[0];
      content = (
        <div className="row">
          <div className="col-md-8">
            <img className="img-responsive" src={o.fields.img_url} alt=""/>
          </div>

          <div className="col-md-4">
            <h3>{o.fields.title}</h3>
            <p>{o.fields.content}</p>
            {/* <h3>Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul> */}
          </div>

        </div>
      );
    }
    console.log(o.fields);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Item
              <small> Item Subheading</small>
            </h1>
          </div>
        </div>

        { content }
        <div className="row">

          <div className="col-lg-12">
            <h3 className="page-header">Related Projects</h3>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

          <div className="col-sm-3 col-xs-6">
            <a href="#">
              <img
                className="img-responsive portfolio-item"
                src="http://placehold.it/500x300"
                alt=""/>
            </a>
          </div>

        </div>

        <hr/>

        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default Post;
