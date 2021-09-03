import React, { Component } from "react";
import {Container, Row, Card} from 'react-bootstrap'
import "./index.css"
class Artist extends Component {

  state = {
    artist: {}
    
  };

  componentDidMount = () => {
    this.fetchArtist();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchArtist();
    }
  };

  fetchArtist = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          this.props.match.params.id
      );
      console.log(response);

      if (response.ok) {
        let artist = await response.json();
        // let tracks = album.tracks.data
        // console.log("THIS IS TRACKS",tracks)
        this.setState({
          artist: artist,
         
        });
        console.log("THIS IS ARTIST", artist);
      } else {
        this.setState({});
      }
    } catch (error) {
      console.log(error);
    }
  };


  render() {
    return (
      <div style={{ backgroundColor: "black" }} className="vh-100 d-flex">
        <Container className="vh-100 mt-5">
          <Row>
            <Card>
              <Card.Img variant="top" src={this.state.artist.picture_xl} style={{height:"500px", width:"1100px"}} className="artist"/>
              <Card.Body>
                <Card.Title>{this.state.artist.name} </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>              
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Artist;
