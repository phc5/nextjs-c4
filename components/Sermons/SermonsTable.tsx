import React, { useState, useEffect, useRef } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import colors from '../../constants/colors';

function SermonsTable({ sermons, iframeRef }) {
  const tableRef = useRef(null);
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    tableRef.current.addEventListener('click', e => {
      setSlug(e.target.parentNode.getAttribute('data-slug'));
    });
  }, []);

  useEffect(() => {
    if (iframeRef && slug !== null) {
      iframeRef.current.src = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=/c4ministry/${slug}/`;
      iframeRef.current.title = slug;
    }
  }, [slug]);

  const sermonTableData = sermons.map(sermon => ({
    col1: sermon.date,
    col2: sermon.name,
    col3: sermon.passage,
    col4: sermon.speaker
  }));

  const data = React.useMemo(() => sermonTableData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'col1'
      },
      {
        Header: 'Sermon',
        accessor: 'col2'
      },
      {
        Header: 'Scripture',
        accessor: 'col3'
      },
      {
        Header: 'Speaker',
        accessor: 'col4'
      }
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });
  return (
    <StyledTable {...getTableProps()} ref={tableRef}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} data-slug={sermons[rowIndex].slug}>
              {row.cells.map(cell => {
                return (
                  <StyledTD {...cell.getCellProps()} isOdd={rowIndex % 2 !== 0}>
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
  width: 100%;

  thead {
    border-bottom: solid 2px ${colors.paleblue};
    text-align: left;

    th {
      padding: 1em;
    }
  }

  tbody {
    tr {
      transition: color 0.5s ease-in-out;

      :hover {
        cursor: pointer;
        background-color: ${colors.primary};
      }
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

export default SermonsTable;
