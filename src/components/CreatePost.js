import React from 'react'

async function postData(){
    try {
        let result = await fetch(`${process.env.REACT_APP_API_URL}/e-commerce`, {
           method: 'post',
           headers: {
               'Accept': '*/*',
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               title: 'Motherboard',
               description: 'Aorus',
               price: {
                   amount: 200,
                   currency: "U$S"
               }
           })
        });

        console.log(result)

    } catch (e) {
        console.log(e)
    }
}

function CreatePost() {
    return (
        <>
            <button className="btn btn-success" onClick={postData}>Publicar</button>
        </>
    )
}

export default CreatePost

