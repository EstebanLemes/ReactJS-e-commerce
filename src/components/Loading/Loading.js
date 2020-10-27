import React from 'react'

export default function Loading() {
    return (
        <>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </>
    )
}
