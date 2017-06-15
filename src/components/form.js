// @flow

import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form
            role="form"
            method="post"
            action="http://localhost:8000/api/add/post/"
          >
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="InputName">Title</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="InputName"
                    required
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-asterisk" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Description</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="InputEmailFirst"
                    name="desc"
                    required
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-asterisk" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputEmail">Photo</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="InputEmailSecond"
                    name="img_url"
                    required
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-asterisk" />
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="InputMessage">Content</label>
                <div className="input-group">
                  <textarea
                    name="content"
                    id="InputMessage"
                    className="form-control"
                    rows="5"
                    required
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-asterisk" />
                  </span>
                </div>
              </div>
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-info pull-right"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
