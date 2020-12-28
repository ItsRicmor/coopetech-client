import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { faPlus, faFilter, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import * as PurchaseAction from '../../../stores/purchases/PurchaseAction';
import RouteMap from '../../../constants/RouteMap';
import TableContainer from '../../components/table/TableContainer';
import HeaderTable from '../../components/table/components/HeaderTable';
import ButtonIcon from '../../components/common/ButtonIcon';
import { ActionFormatter } from '../../components/table/formatters';
import ModalConfirm from '../../components/modals/ModalConfirm';

const columnsDefault = (onEditCell, onDeleteCell) => [
  {
    dataField: 'description',
    text: 'Descripción',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'quantity',
    text: 'Cantidad',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'total',
    text: 'Total',
    headerClasses: 'border-0',
    classes: 'border-0 py-2 align-middle',
    sort: true,
  },
  {
    dataField: 'product',
    text: 'Nombre producto',
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

const PurchaseTable = ({ items }) => {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const onDeleteCell = (id) => {
    setIdToDelete(id);
    toggleModal();
  };

  const onDeleteAction = () => {
    dispatch(PurchaseAction.deletePurchases(idToDelete));
    toggleModal();
  };

  const onEditCell = (id) => {
    history.push(RouteMap.Purchase.edit(id));
  };

  const columns = columnsDefault(onEditCell, onDeleteCell);

  return (
    <>
      <TableContainer
        columns={columns}
        items={items}
        title="Compras"
        searchBarIsOpen={searchBar}
        actions={[
          { color: 'success', icon: faPlus, text: 'Crear', onClick: () => history.push(RouteMap.Purchase.create) },
          { color: 'info', icon: faFilter, text: 'Filtrar', onClick: toggleSearchBar },
          { color: 'primary', icon: faExternalLinkAlt, text: 'Exportar', onClick: () => ({}) },
        ]}
      />
      <ModalConfirm
        modal={modal}
        toggleModal={toggleModal}
        title="Eliminar compra"
        description="¿Desea eliminar la compra?"
        actions={[
          { color: 'primary', text: 'Cencelar', onClick: toggleModal },
          { color: 'secondary', text: 'Eliminar', onClick: onDeleteAction },
        ]}
      />
    </>
  );
};

PurchaseTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PurchaseTable;
