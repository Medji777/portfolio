import React from 'react';
import {filterPrj} from "../ProjectsContainer";
import s from './FilterProjects.module.css';

const FilterProjects = ({changeFilter,filterValue}) => {
        return (
            <div className={s.filters}>
                {Object.keys(filterPrj).map(f => <button className={filterValue === filterPrj[f] ? `${s.filter} ${s.filter_active}` : s.filter} key={f} onClick={() => changeFilter(f)}>{filterPrj[f]}</button>)}
            </div>
        )
};

export default FilterProjects;