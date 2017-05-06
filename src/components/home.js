import React, {Component} from 'react';

class Post extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Page Heading
              <small>Secondary Text</small>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>Project One</h3>
            <h4>Subheading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam
              exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut
              nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
            <a className="btn btn-primary" href="#">View Project
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>Project Two</h3>
            <h4>Subheading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit
              cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae
              modi quidem similique ducimus! Velit, esse totam tempore.</p>
            <a className="btn btn-primary" href="#">View Project
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>Project Three</h3>
            <h4>Subheading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus,
              dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit
              fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
            <a className="btn btn-primary" href="#">View Project
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>

        <hr/>

        <div className="row">

          <div className="col-md-7">
            <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>Project Four</h3>
            <h4>Subheading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem,
              consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod
              modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
            <a className="btn btn-primary" href="#">View Project
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
            </a>
          </div>
          <div className="col-md-5">
            <h3>Project Five</h3>
            <h4>Subheading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, quo,
              minima, inventore voluptatum saepe quos nostrum provident ex quisquam hic odio
              repellendus atque porro distinctio quae id laboriosam facilis dolorum.</p>
            <a className="btn btn-primary" href="#">View Project
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
        </div>

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
