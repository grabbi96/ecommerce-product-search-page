import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPages, currentPage, setPage }) => {
  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={(event, value) => setPage(value)}
    />
  );
};

export default Pagination;
