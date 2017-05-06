import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {

    fetch('http://localhost:8000/api/all/post/').then(data => data.json()).then(data => {
      console.log(data);
      this.setState({data: data});
    });
  }

  render() {
    let content = '';
    content = (this.state.data.map(o => {
      return (
        <div className="row" key={o.pk}>
          <div className="col-md-7">
            <a href="#">
              <img className="img-responsive" src={o.fields.img_url} alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>{o.fields.title}</h3>
            <h4>{o.fields.desc}</h4>
            <p>{o.fields.content}</p>
            <a className="btn btn-primary" href={'/post/?post=' + o.pk}>View Article
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>
      )
    }));

    return (
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Page Heading
              <small>Secondary Text</small>
            </h1>
          </div>
        </div>

        {content}

        <hr/>

        <div className="row text-center">
          <div className="col-lg-12">
            <ul className="pagination">
              <li>
                <a href="#">&laquo;</a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">&raquo;</a>
              </li>
            </ul>
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

    )
  }
}

export default Post;
