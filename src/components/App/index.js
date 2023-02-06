import { useState, useEffect, useCallback } from 'react';
import Form from '../Form/form';
import Results from '../Results/results';
import axios from 'axios';
import './style.scss';
import Loader from '../Loader/loader';
import Map from '../Map/map';
import Header from '../Header/header';

function App() {
  const [search, setSearch] = useState('') // ensuite on filtrera pour voir si c'est une adresse ip ou un domaine
  const [ipAddress, setIpAddress] = useState('')
  const [domain, setDomain] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=`)
      .then(response => setData(response.data))
      .catch((error) => console.error(error.message))
  }, []);

  const validateData = useCallback(() => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainRegex = /^(?=.{1,255})([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,63}$/;
    ipRegex.test(search) && setIpAddress(search);
    domainRegex.test(search) && setDomain(search);
  }, [search]);

  useEffect(() => {
    validateData();
  }, [validateData]);

  const getData = async () => {
    validateData()
    setIsLoading(true);
    await axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_AG7Ui8Wp00vBp4MvJ6wsTXkbDCH6e&ipAddress=${ipAddress}&domain=${domain}`)
      .then((response) => {
        setData(response.data)
        setSearch('')
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false))
  };
    return (
        <div className="app">
          <Header>
            <h1>IP Address Tracker</h1>
            <Form search={search} onChangeSearch={(value) => {
              setSearch(value)
            }} onSave={getData}/>
          </Header>
          {isLoading ? <Loader /> : <Results data={data} /> }
          {Object.keys(data).length !== 0 && <Map coords={[data.location.lat, data.location.lng]} />}
        </div>
      );
    }

export default App;
