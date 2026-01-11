import { useEffect, useState } from 'react';
import './products.scss';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';
import DataTable from '../../components/dataTable/data-table';
import Add from '../../components/add/add';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt='' />;
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 150,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 200,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
];

export default function Products() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <div className='products'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug='products' columns={columns} rows={products} />

      {open && <Add slug='product' columns={columns} setOpen={setOpen} />}
    </div>
  );
}
