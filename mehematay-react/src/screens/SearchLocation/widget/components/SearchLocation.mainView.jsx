import React from 'react';
import {SearchLocation as UISearchLocation} from '../../../../components';

export default function SearchLocationMainView({searchLocation, locationResults, onSelectLocation, selectedLocation, onSearchMyLocation}) {
  return (
    <div>
      <UISearchLocation
        onSearch={searchLocation}
        searchResults={locationResults}
        onSelectLocation={onSelectLocation}
        selectedLocation={selectedLocation}
        onSearchMyLocation={onSearchMyLocation}
      />
    </div>
  );
}
