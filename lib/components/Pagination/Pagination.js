import React from 'react';
import 'antd/dist/antd.css';
import { Pagination as PaginationAntd} from 'antd';
import PropTypes from 'prop-types';
export const Pagination = ({defaultCurrent,total})=>{

    return(
    <PaginationAntd 
    defaultCurrent={defaultCurrent} 
    total={total} />
    );

}

Pagination.propTypes ={
    defaultCurrent: PropTypes.number,
    total: PropTypes.number
};
