import Chip from '@mui/material/Chip';
import { useDispatch } from 'react-redux';
import { CoinData } from './../../../services/coin/index';

const CoinTag = ({ coin } : { coin: CoinData }) => {
  const dispatch = useDispatch();
  const handleChipClick = (id: string) => {
    dispatch.activeCoin.set(id);
  };

  return <Chip
    key={coin.id}
    label={coin.name}
    onClick={() => handleChipClick(coin.id)}
    style={{ margin: '4px' }}
  />
}

export default CoinTag;
