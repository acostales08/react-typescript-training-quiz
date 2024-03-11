import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import useFectch from '../../core/hooks/useFectch'

const NonDiscountedList = () => {
    const { disNonProducts } = useFectch()
    console.log(disNonProducts)
    return (
      <div className='h-1/2 w-full p-10'>
        <TableContainer component={Paper}>
          <h1 className='text-center text-2xl font-semibold p-4'>NON DISCOUNTED</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">product ID</TableCell>
              <TableCell align="center">product Name</TableCell>
              <TableCell align="center">Discription</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {disNonProducts.map((row) => (
              <TableRow
                key={row.productId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row.productId}</TableCell>
                <TableCell align="center">{row.productName}</TableCell>
                <TableCell align="center">{row.productDescription}</TableCell>
                <TableCell align="center">{row.productCategory}</TableCell>
                <TableCell align="center">{row.productDiscount}</TableCell>
                <TableCell align="center">{row.productPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
}

export default NonDiscountedList