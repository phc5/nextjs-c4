import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import colors from '../../constants/colors';
import cleanupData from '../../data/cleanup';

function CleanupTable() {
  const sermonTableData = cleanupData.map(group => ({
    col1: group[0],
    col2: group[1]
  }));

  const data = React.useMemo(() => sermonTableData, []);
  const columns = React.useMemo(
    () => [
      {
        accessor: 'col1'
      },
      {
        accessor: 'col2'
      }
    ],
    []
  );
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data
  });
  return (
    <StyledTable {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <StyledTD {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </StyledTD>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 25%;

  thead {
    border-bottom: solid 2px ${colors.paleblue};
    text-align: left;

    th {
      padding: 1em;
    }
  }
`;

const StyledTD = styled.td<{ isOdd: boolean }>`
  ${props => props.isOdd && `background-color: ${colors.offsetgrey};`};
  border: solid 1px ${colors.paleblue};
  border-left: 0;
  border-right: 0;
  padding: 1em;
`;

export default CleanupTable;
