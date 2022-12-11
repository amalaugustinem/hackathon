import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {

 const rows = [
    {
        id: 11443155,
        product: "A",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        date: "1 March",
        amount: 987,
        status: "Claimed",
    },
    {
        id: 2235235,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        date: "1 April",
        amount: 2057,
        status: "Claim",
    },
    {
        id: 11443155,
        product: "Denim Jeans 5",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        date: "1 May",
        amount: 687,
        status: "Claimed",
    },
    {
        id: 2235235,
        product: "Apple Iphone 14",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        date: "1 June",
        amount: 1757,
        status: "Claimed",
    },
    {
        id: 2235235,
        product: "Apple Iphone 14 Pro",
        img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "1 June",
        amount: 7757,
        status: "Claimed",
    },
 ];


  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id} >
            <TableCell className="tableCell" align="right">{row.id}</TableCell>
            <TableCell className="tableCell" align="right">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List
