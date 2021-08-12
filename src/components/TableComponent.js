import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfo, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const { SearchBar } = Search;
const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
        return { width: "5%" };
    }
}, {
    dataField: 'nama',
    text: 'Nama',
    sort: true,
    headerStyle: () => {
        return { width: "20%" };
    }

}, {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true,
    headerStyle: () => {
        return { width: "25%" };
    }

}, {
    dataField: 'umur',
    text: 'Umur',
    sort: true,
    headerStyle: () => {
        return { width: "8%" };
    }
}, {
    dataField: 'nohp',
    text: 'No HP',
    sort: true,
    headerStyle: () => {
        return { width: "15%" };
    }
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={`/detail/${row.id}`}>
                    <Button className="btn btn-success btn-sm mb-2 me-2 text-white">
                        <FontAwesomeIcon icon={faInfo} /> Detail
                    </Button>
                </Link>
                <Link to={`/edit/${row.id}`}>

                    <Button className="btn btn-success btn-sm mb-2 me-2 text-white">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </Button>
                </Link>


                <Button className="btn btn-success btn-sm mb-2 me-2 text-white" >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
            </div>
        );
    },
},

];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const mapStateToProps = (state) => {
    return {
      users:state.users.users
    };
  };

const pageButtonRenderer = ({

    page,
    active,
    onPageChange
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        onPageChange(page);
    };
    let styleButton = "";

    if (active) {
        styleButton = "btn btn-success text-white me-1";
    } else {
        styleButton = "btn btn-default me-1";
    }
    if (typeof page === 'string') {
        styleButton = "btn btn-light text-success me-1";
    }
    return (
        <li className="page-item">
            <a href="#" onClick={handleClick} className={styleButton}>{page}</a>
        </li>
    );


};

const options = {
    pageButtonRenderer,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: '50', value: 50
    }, {
        text: '100', value: 100
    }, {
        text: '200', value: 200
    }] // 
};


const TableComponent = (props) => {
    return (
        <Container>

            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={props.users}
                columns={columns}
                defaultSorted={defaultSorted}
                search
            >
                {
                    props => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to={`/create`}>
                                        <Button className="btn btn-success btn-sm mb-2 me-2 text-white">
                                            <FontAwesomeIcon icon={faPlus} /> Create
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <div className="mb-2 float-end">
                                        <SearchBar placeholder="Search ..." {...props.searchProps} />
                                    </div>
                                </Col>
                            </Row>
                            <div className="responsive mb-4 w-100">
                                <BootstrapTable
                                    {...props.baseProps} pagination={paginationFactory(options)}
                                />
                            </div>
                        </div>
                    )
                }
            </ToolkitProvider>

        </Container>
    )
}

export default connect(mapStateToProps,null)(TableComponent)
