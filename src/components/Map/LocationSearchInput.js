import React from 'react';
import { withRouter } from 'react-router-dom'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import './Map.scss';
class LocationSearchInput extends React.Component {
  state = {
    address: '',
    suggestion: [
      {
        mainText: 'Exeter',
        secondaryText: 'Vương Quốc Anh'
      },
      {
        mainText: 'Eindhovenr',
        secondaryText: 'Hà Lan'
      },
      {
        mainText: 'ETown',
        secondaryText: 'Cộng Hòa, phường 13, Tân Bình, Hồ Chí Minh, Việt Nam'
      },
      {
        mainText: 'Nguyễn Văn Luông',
        secondaryText: 'Quận 6, Hồ Chí Minh, Việt Nam'
      }

    ]
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem('address')) {
      const addressFrom = localStorage.getItem('address')
      this.setState({
        address: addressFrom
      })
    }
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    localStorage.setItem('address', address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.changePosition(latLng))
      .catch(error => console.error('Error', error));
    this.setState({ address: address });


  };
  suggestionChoose = (address) => {
    this.setState({
      address
    })
  }
  addressResult = () => {
    const address = this.state.address;
    if (address) {
      localStorage.setItem('address', address);
    }
  }
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading, value }) => {

          const renderSuggestion = this.state.suggestion.map((item, index) => (
            <div className="suggestion" key={index} onClick={() => { this.suggestionChoose(item.secondaryText) }}>
              <i className="fas fa-map-marker-alt"></i>
              <div className="place-group">
                <h6>{item.mainText}</h6>
                <p>{item.secondaryText}</p>
              </div>
            </div>
          ))
          return (
            <div>

              <div className="Pickup">
                <div className="placeContainer">
                  <label htmlFor="square" ><i className="fas fa-square"></i></label>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}

                  />
                  <button className="Button" onClick={this.addressResult}><i className="fas fa-search"></i></button>
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {
                      this.state.address.length > 0 ?
                        suggestions.map(suggestion => {

                          return (
                            <div className="suggestion" {...getSuggestionItemProps(suggestion)} >
                              <i className="fas fa-map-marker-alt"></i>
                              <div className="place-group">
                                <h6>{suggestion.formattedSuggestion.mainText}</h6>
                                <p>{suggestion.formattedSuggestion.secondaryText}</p>
                              </div>
                            </div>
                          );
                        })
                        : renderSuggestion
                    }
                  </div>
                </div>
              </div>

            </div>


          )
        }}
      </PlacesAutocomplete>
    );
  }
}
export default withRouter(LocationSearchInput);