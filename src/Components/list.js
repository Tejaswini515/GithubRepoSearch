import React from 'react';

const List = (props) => {
    
    const list = props.list.map(repo => {
        return <li style={{listStyle : "none"}} key={repo["id"]}>
                    <strong>{repo["name"]}</strong>   
                    <a style={{float:"right"}} href={repo["html_url"]}>{repo["html_url"]}</a>
                </li>
    })

    return (list ? list : null)
}

export default List;