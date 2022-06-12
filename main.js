$(document).ready(function(){
    $('#title').autocomplete(
        {
            source :  async function(){
                let data = await fetch(`https://localhost:8000/serch?query=$(request.term)`)
                    .then( result => result.json())
                    .then(result => results .map(result => {
                        return{
                            label : result.title,
                            value : result.title,
                            id: result._id
                        }
                        
                    }))

            },
            minLength: 2,
            select: function(event, id){
                console.log(ui.item.id)
                fetch(`http://localhost:8000/get/${ui.item.ig}`)
                .then( result => result.json())
                .then( result => {
                    $('#cast').empty()
                })

            }


        }
        
    )
})