import style from '../../Users/User.module.css'
import React from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
    let lastPages = (pagesCount - 2);

    return (
        <div>
            {pages.map(p => {
                return (
                    <span key={p.id} className={currentPage === p ? style.selectedPage : "" + " "
                    + 3 < p && p < (lastPages) && p !== currentPage && p !== currentPage + 1 && p !== currentPage - 1 ? style.hide : ""}
                          onClick={() => {onPageChanged(p)}}>{p}</span>
                )
            })}
        </div>
    )
}


export default Paginator;