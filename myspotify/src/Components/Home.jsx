import { Component } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
class Home extends Component {
  state = {
    music: [],
  };

  componentDidMount = () => {
    this.fetchMusic();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.search !== prevProps.search) {
      this.fetchMusic();
    }
  };

  fetchMusic = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          this.props.search
      );
      console.log(response);

      if (response.ok) {
        let music = await response.json();

        this.setState({
          music: music.data
        });
        console.log(music.data);
      } else {
        this.setState({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
      <div style={{backgroundColor:"black"}}>
        <Row>
            {this.state.music.slice(0,18).map((mukke) => {
              return (
              <Col className="mx-1" key={mukke.id}>
                <Card style={{ width: "200px" }} className="mt-3">
                  <Link to={"/Album/"+ mukke.album.id}>
                  <Card.Img
                    variant="top"
                    src={mukke.album.cover_medium}
                    key={mukke.id}
                    // onClick={() => this.props.showAlbum(mukke.album.id)}
                  />
                  </Link>
                  <Card.Body>
                  <Link to={"/Artist/"+ mukke.artist.id}>
                    <Card.Title>{mukke.artist.name}</Card.Title>
                  </Link>
                    <Card.Text>
                      <div>
                    ALBUM: <Link to={"/Album/"+ mukke.album.id}>{mukke.album.title}</Link>
                      </div>
                      <div>
                    TITLE: {mukke.title}
                      </div>

                    </Card.Text>                   
                   
                  </Card.Body>
                </Card>
              </Col>
              );
            })}
        </Row>
        </div>
      </>
    );
  }
}
export default Home;
