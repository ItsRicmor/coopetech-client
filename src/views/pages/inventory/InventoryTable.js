import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row, CustomInput, InputGroup } from 'reactstrap';
import { faPlus, faFilter, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { useDispatch } from 'react-redux';

import * as ProductsAction from '../../../stores/products/ProductsAction';
import RouteMap from '../../../constants/RouteMap';
import Table from '../../components/table';
import ButtonIcon from '../../components/common/ButtonIcon';
import { ActionFormatter } from '../../components/table/formatters';
import ModalConfirm from '../../components/modals/ModalConfirm';
import Flex from '../../components/common/Flex';

const columnsDefault = (onEditCell, onDeleteCell) => [
  {
    dataField: 'id',
    text: 'Codigo',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'description',
    text: 'Descripción',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'quantity',
    text: 'Stock',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'price',
    text: 'Precio por unidad',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'brand',
    text: 'Marca',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'category',
    text: 'Categoría',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: '',
    headerClasses: 'border-0',
    isDummyField: true,
    headerStyle: { width: '50px' },
    text: '',
    classes: 'border-0 py-2 align-middle ',
    formatter: ActionFormatter(onEditCell, onDeleteCell),
    align: 'right',
  },
];

const { SearchBar } = Search;

const InventoryTable = ({ items }) => {
  const table = createRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const [modal, setModal] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [idToDelete, setIdToDelete] = useState(false);

  const toggleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  const toggleModal = () => {
    setModal(!modal);
    if (!!idToDelete) {
      setIdToDelete(false);
    }
  };

  const onSelect = () => {
    setImmediate(() => {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  const onDeleteCell = (id) => {
    setIdToDelete(id);
    toggleModal();
  };

  const onDeleteAction = () => {
    dispatch(ProductsAction.deleteProduct(idToDelete));
    toggleModal();
  };

  const onEditCell = (id) => {
    history.push(RouteMap.Inventory.edit(id));
  };

  const columns = columnsDefault(onEditCell, onDeleteCell);

  const options = {
    custom: true,
    sizePerPage: 10,
    totalSize: items.length,
  };

  return (
    <>
      <Card className="mb-3 mt-4">
        <ToolkitProvider
          keyField="id"
          data={items}
          columns={columns}
          bootstrap4
          search={{
            searchFormatted: true,
          }}
        >
          {({ baseProps, searchProps }) => (
            <>
              <CardHeader className="bg-light">
                <Row className="align-items-center">
                  <Col sm={6} md={6} lg={7} xl={8}>
                    <Flex align="center" style={{ height: 46 }}>
                      <h5 className="mr-3">Inventario</h5>
                      {searchBar && <SearchBar {...searchProps} className="w-100" />}
                    </Flex>
                  </Col>
                  <Col sm={6} md={6} lg={5} xl={4} className="text-center text-sm-right">
                    {isSelected ? (
                      <InputGroup size="sm" className="input-group">
                        <CustomInput type="select" id="bulk-select">
                          <option>Bulk actions</option>
                          <option value="Delete">Delete</option>
                          <option value="Archive">Archive</option>
                        </CustomInput>
                        <Button color="success" size="sm" className="ml-2">
                          Apply
                        </Button>
                      </InputGroup>
                    ) : (
                      <>
                        <ButtonIcon
                          icon={faPlus}
                          transform="shrink-3 down-2"
                          color="success"
                          size="sm"
                          className="shadow-sm rounded"
                          onClick={() => history.push(RouteMap.Inventory.create)}
                        >
                          Crear
                        </ButtonIcon>
                        <ButtonIcon
                          icon={faFilter}
                          transform="shrink-3 down-2"
                          color="info"
                          size="sm"
                          className="mx-2 shadow-sm rounded"
                          onClick={toggleSearchBar}
                        >
                          Filtrar
                        </ButtonIcon>
                        <ButtonIcon icon={faExternalLinkAlt} transform="shrink-3 down-2" color="primary" size="sm" className="shadow-sm rounded">
                          Exportar
                        </ButtonIcon>
                      </>
                    )}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="p-0">
                <Table reference={table} baseProps={baseProps} options={options} onSelect={onSelect} />
              </CardBody>
            </>
          )}
        </ToolkitProvider>
      </Card>
      <ModalConfirm
        modal={modal}
        toggleModal={toggleModal}
        title="Eliminar Producto"
        description="¿Desea eliminar el producto?"
        actions={[
          { color: 'primary', text: 'Cencelar', onClick: toggleModal },
          { color: 'secondary', text: 'Eliminar', onClick: onDeleteAction },
        ]}
      />
    </>
  );
};

InventoryTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default InventoryTable;
