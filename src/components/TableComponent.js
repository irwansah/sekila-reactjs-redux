import React from 'react'
import { Container, Button, Row, Col, Spinner, ButtonGroup } from 'react-bootstrap';
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
    dataField: 'name',
    text: 'Name',
    sort: true,
    headerStyle: () => {
        return { width: "20%" };
    }

}, {
    dataField: 'address',
    text: 'Address',
    sort: true,
    headerStyle: () => {
        return { width: "25%" };
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
        getUserList: state.users.getUserList,
        errorUserList: state.users.errorUserList
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
        styleButton = "btn btn-secondary me-1";
    }
    if (typeof page === 'string') {
        styleButton = "btn btn-light me-1";
    }
    return (
        <ButtonGroup>
            <Button href="/" onClick={handleClick} className={styleButton}>{page}</Button>
        </ButtonGroup>
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
            {props.getUserList ?
                <ToolkitProvider
                    bootstrap4
                    keyField='id'
                    data={props.getUserList}
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
                </ToolkitProvider> :
                (
                    <div className="text-center">
                        {props.errorUserList ? <h4>{props.errorUserList}</h4>
                            :
                            <Spinner animation="grow" variant="success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }



                    </div>
                )}



        </Container>
    )
}

export default connect(mapStateToProps, null)(TableComponent)
