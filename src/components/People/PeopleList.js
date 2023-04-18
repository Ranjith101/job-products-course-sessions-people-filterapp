import React,{useState} from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.tableRowBackground};
  }
`;

const TableCell = styled.td`
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.tableRowBorder};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 123-456-7890',
    company: 'Acme Inc.',
    city: 'New York',
    country: 'USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+44 123-456-7890',
    company: 'Globex Corporation',
    city: 'London',
    country: 'UK',
  },
  {
    id: 3,
    name: 'Ranjith',
    email: 'ranjith@example.com',
    phone: '+44 123-456-7890',
    company: 'Unesco Corporation',
    city: 'Cambridge',
    country: 'UK',
  },
  // Add more data here...
];

const PeopleList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleSortClick = (column) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };
    
      const filteredData = data.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    
      const sortedData = sortColumn
        ? filteredData.sort((a, b) => {
            const columnA = a[sortColumn];
            const columnB = b[sortColumn];
            if (columnA < columnB) {
              return sortDirection === 'asc' ? -1 : 1;
            }
            if (columnA > columnB) {
              return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
          })
        : filteredData;
        return (
            <>
              <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Select value={sortColumn} onChange={(event) => handleSortClick(event.target.value)}>
                  <option value="">Sort by...</option>
                  <option value="id">ID</option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="company">Company</option>
                  <option value="city">City</option>
                  <option value="country">Country</option>
                </Select>
              </SearchContainer>
              <TableContainer>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader sortable={true} onClick={() => handleSortClick('id')}>
                        ID {sortColumn === 'id' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                      <TableHeader sortable={true} onClick={() => handleSortClick('name')}>
                        Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                      <TableHeader sortable={true} onClick={() => handleSortClick('email')}>
                        Email {sortColumn === 'email' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                      <TableHeader sortable={true} onClick={() => handleSortClick('phone')}>
                        Phone {sortColumn === 'phone' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                      <TableHeader sortable={true} onClick={() => handleSortClick('company')}>
                        Company {sortColumn === 'company' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                      <TableHeader sortable={true} onClick={() => handleSortClick('city')}>
                        City {sortColumn === 'city' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                      <TableHeader sortable={true} onClick={() => handleSortClick('country')}>
                        Country {sortColumn === 'country' && (sortDirection === 'asc' ? '▲' : '▼')}
                      </TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.company}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>{row.country}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </TableContainer>
            </>
          );
};

export default PeopleList;