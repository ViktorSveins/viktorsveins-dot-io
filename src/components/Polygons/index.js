import React from 'react';
import './polygons-style.scss';

const Polygons = () => {
    return(
        <div className="polygons">
            <svg className="up-left side" />
            <svg className="up-mid"/>
            <svg className="up-right side"/>
        </div>
    )
}

export default Polygons;