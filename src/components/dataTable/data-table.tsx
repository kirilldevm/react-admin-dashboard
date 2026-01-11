import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid/internals';
import { Link } from 'react-router';
import './data-table.scss';
type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export default function DataTable(props: Props) {
  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
    console.log(id);
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src='/view.svg' alt='' />
          </Link>
          <div className='delete' onClick={() => handleDelete(params.row.id)}>
            <img src='/delete.svg' alt='' />
          </div>
        </div>
      );
    },
  };

  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        pagination
      />
    </div>
  );
}
