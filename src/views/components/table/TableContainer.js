import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Table from './Table';

const { SearchBar } = Search;

const TableContainer = ({ items, columns, headerRender }) => {
  const table = createRef();
  const [isSelected, setIsSelected] = useState(false);

  const onSelect = () => {
    setImmediate(() => {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  const options = {
    custom: true,
    sizePerPage: 10,
    totalSize: items.length,
  };

  return (
    <ToolkitProvider
      keyField="id"
      data={items}
      columns={columns}
      bootstrap4
      search={{
        searchFormatted: true,
      }}
    >
      {({ baseProps, searchProps }) => {
        const headerProps = { SearchBar, searchProps, isSelected };
        return (
          <Card className="mb-3 mt-4">
            <CardHeader className="bg-light">{headerRender(headerProps)}</CardHeader>
            <CardBody className="p-0">
              <Table reference={table} baseProps={baseProps} options={options} onSelect={onSelect} />
            </CardBody>
          </Card>
        );
      }}
    </ToolkitProvider>
  );
};

TableContainer.propTypes = {
  items: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  headerRender: PropTypes.func.isRequired,
};

export default TableContainer;
