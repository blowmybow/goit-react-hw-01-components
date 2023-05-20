import PropTypes from 'prop-types';
import {
  TableTh,
  TableThead,
  TableTbody,
  TableTr,
  TransactionTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableTr key={id}>
              <TableTh>{type}</TableTh>
              <TableTh>{amount}</TableTh>
              <TableTh>{currency}</TableTh>
            </TableTr>
          );
        })}
      </TableTbody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
