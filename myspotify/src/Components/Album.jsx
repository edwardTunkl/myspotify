import React, { Component } from "react";
import { Row, Col, Container, Card, Table } from "react-bootstrap";

class Album extends Component {
  state = {
    album: {},
    tracks: []
  };

  componentDidMount = () => {
    this.fetchAlbum();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchAlbum();
    }
  };

  fetchAlbum = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" +
          this.props.match.params.id
      );
      console.log(response);

      if (response.ok) {
        let album = await response.json();
        let tracks = album.tracks.data
        console.log("THIS IS TRACKS",tracks)
        this.setState({
          album: album,
          tracks: tracks
        });
        console.log("THIS IS ALBUM", album);
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
        <Container>
          <Row>
            <Col className="ml-4 mt-5">
              <Card style={{width:"400px"}} className="border-dark">
                <Card.Img variant="top" src={this.state.album.cover_xl} style={{height:"400px", width:"400px"}} />
                <Card.Body style={{ backgroundColor: "black" }}>
                  <Card.Title className="text-white"><h2>{this.state.album.title}</h2></Card.Title>
                  <Card.Text>                  
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-5">
               <Table bordered hover variant="dark">               
                <tbody>
                    {this.state.tracks.map((tracks) => { 
                      return( 
                  <tr>                    
                    <td classname="py-0">
                      {tracks.title}
                    </td>
                    <td classname="py-0">
                      {tracks.duration} 
                    </td>
                  </tr>                   
                    )
                  })}
                 </tbody>
              </Table> 
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Album;
