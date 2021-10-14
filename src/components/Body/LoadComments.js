import React from 'react'
import { Card } from "reactstrap";
import dateFormat from "dateformat";
const LoadComments = props => {
    console.log(props)
    return (
        props.Comments.map(
            comment => {
                return (
                    <Card>
                        <div key={comment.id}>
                            <p>{comment.rating}</p>
                            <h5>{comment.author}</h5>
                            <p>{comment.email}</p>
                            <p>{comment.Comment}</p>
                            <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                        </div></Card>)
            })

    )
}
export default LoadComments;