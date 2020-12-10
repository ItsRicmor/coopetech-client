/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createRef, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, CustomInput, InputGroup } from 'reactstrap';
import { faPlus, faFilter, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Table from '../../components/table';
import ButtonIcon from '../../components/common/ButtonIcon';

import { useHistory } from 'react-router-dom';
import { ActionFormatter } from '../../components/table/formatters';

const columnsDefault = (onEditCell, onDeleteCell) => [
  {
    dataField: 'id',
    hidden: true,
  },
  {
    dataField: 'name',

    text: 'Nombre',
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
    dataField: 'address',
    text: 'Direccion',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'activityType',
    text: 'Tipo',
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

const activities = [
  {
    id: 1,
    name: 'Caminata',
    description: 'En el rio',
    address: 'Hojancha',
    activityType: 'Vivencia',
  },
  {
    id: 2,
    name: 'Caminata',
    description: 'En el rio',
    address: 'Hojancha',
    activityType: 'Vivencia',
  },
  {
    id: 3,
    name: 'Caminata',
    description: 'En el rio',
    address: 'Hojancha',
    activityType: 'Vivencia',
  },
  {
    id: 4,
    name: 'Caminata',
    description: 'En el rio',
    address: 'Hojancha',
    activityType: 'Vivencia',
  },
];

const Inventory = () => {
  const table = createRef();
  const [isSelected, setIsSelected] = useState(false);

  const onSelect = () => {
    setImmediate(() => {
      setIsSelected(!!table.current.selectionContext.selected.length);
    });
  };

  const onDeleteCell = (id) => {
    // setIdActivity(id);
  };

  const onEditCell = (id) => {
    // history.push(`activities/edit/${id}`);
  };

  const options = {
    custom: true,
    sizePerPage: 10,
    totalSize: activities.length,
  };

  const columns = columnsDefault(onEditCell, onDeleteCell);

  return (
    <Card className="mb-3 mt-4">
      <CardHeader className="bg-light">
        <Row className="align-items-center">
          <Col sm={4} md={4} lg={6} xl={8}>
            <h5>Inventario</h5>
          </Col>
          <Col sm={8} md={8} lg={6} xl={4} className="text-center text-sm-right">
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
                <ButtonIcon icon={faPlus} transform="shrink-3 down-2" color="success" size="sm" className="shadow-sm rounded" onClick={() => {}}>
                  Crear
                </ButtonIcon>
                <ButtonIcon icon={faFilter} transform="shrink-3 down-2" color="info" size="sm" className="mx-2 shadow-sm rounded">
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
        <Table reference={table} options={options} columns={columns} items={activities} onSelect={onSelect} />
      </CardBody>
    </Card>
  );
};

export default Inventory;
