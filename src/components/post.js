// @flow
import React, { Component } from 'react';
var Clarifai = require('clarifai');

// initialize with your clientId and clientSecret

var app = new Clarifai.App(
  'NC_zCTITbajnUlNUJ8LrFMl4FH5tl-1Bl8nSp30p',
  '1QoTBYaR8MDQRIr_rRHI3RDVvYeMyslkHtq7D9BY'
);

const pix = '5295631-a69146e890113b5bb39ba83a2';
const items = ['popular', 'latest'];
function pixx() {
  const imgss = document.querySelectorAll('.i');
  Array.from(imgss).map(imgg => {
    console.log(imgg.id);
    fetch(
      'https://pixabay.com/api/?key=5295631-a69146e890113b5bb39ba83a2&q=' +
        imgg.id +
        '&order=' +
        items[Math.floor(Math.random() * items.length)]
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        imgg.src =
          res.hits[
            Math.floor(Math.random() * (res.hits.length - 0 + 1)) + 0
          ].previewURL;
      });
  });
}

class Post extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      imgc: null
    };
    this.clarif = this.clarif.bind(this);
  }

  componentWillMount() {
    const id = /post=([^&#=]*)/.exec(window.location.search)[1];
    const url = 'http://localhost:8000/api/get/post/?post=' + id;
    fetch(url).then(data => data.json()).then(data => {
      this.setState({ data: data });
      this.clarif();
    });
  }

  clarif() {
    let self = this;
    app.models
      .predict(Clarifai.GENERAL_MODEL, this.state.data[0].fields.img_url)
      .then(
        function(response) {
          let con = response.outputs[0].data.concepts
            .slice(0, 2)
            .map(concept => ({ name: concept.name, val: concept.value }));

          console.table(con);
          self.setState({ imgc: con });
          pixx();
        },
        function(err) {
          console.log(err);
        }
      );
  }

  render() {
    let content = '';
    let o = '';
    if (this.state.data) {
      o = this.state.data[0];
      content = (
        <div className="row" key={o.pk}>
          <div className="col-md-3">
            <img className="img-responsive" src={o.fields.img_url} alt="" />
          </div>

          <div className="col-md-6">
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

    let imgc = '';
    if (this.state.imgc) {
      imgc = this.state.imgc.map(i => {
        return (
          <div className="col-sm-3 col-xs-6" key={i.name}>
            <a href="#">
              <div id="images">
                <img
                  id={i.name}
                  className="img-responsive i portfolio-item"
                  alt=""
                />
              </div>
              &nbsp; Post About{' '}
              {i.name.charAt(0).toUpperCase() + i.name.slice(1)}....
            </a>
          </div>
        );
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <h1 className="page-header">Item
              <small>
                Item Subheading
              </small>
            </h1> */}
          </div>
        </div>
        {content}
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header">Related content</h3>
          </div>
          {imgc}
          {imgc}
        </div>
        <hr />
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
