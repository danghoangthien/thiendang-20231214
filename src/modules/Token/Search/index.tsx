import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from './utils';

const Search = () => {
  const [options, setOptions] = useState<{}>([]);
  const dispatch = useDispatch();
  const [selectedCoin, setSelectedCoin] = useState(null);
  const coinDataProvider = useSelector((state: any) => state.coinDataProvider);

  useEffect(() => {
    fetchCoinSuggestions('');
  }, []);

  const fetchCoinSuggestions = async (inputValue: string) => {
    try {
      const coinDataCollection = await fetchCoins(coinDataProvider, inputValue);
      setOptions(() => {
        return coinDataCollection.map((coin: any) => ({ value: coin.id, label: coin.name }));
      })
    } catch (error) {
      console.error('Error fetching coin suggestions:', error);
    }
  };

  const handleChange = (_: any, selectedOption: any) => {
    setSelectedCoin(selectedOption);
    dispatch.activeCoin.set(selectedOption.value);
  };



  return (
    <Autocomplete
      value={selectedCoin}
      onChange={handleChange}
      options={options}
      getOptionLabel={(option: Record<string, string>) =>`${option.label} (${option.value})`}
      getOptionKey={(option: Record<string, string>) => option.value}
      renderInput={(params: Record<string, any>) => (
        <TextField {...params} label="Search for a coin..." />
      )}
      isClearable
      isOptionEqualToValue={(option: Record<string, string>, value: Record<string, string>) => option.value === value.value}
    />
  );
};

export default Search;
