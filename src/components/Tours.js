import Cards from "./Cards"

function Tours({tours,removeTour})
{
    return(
        <div className="container">
            <div>
            <h2 className="title">Plan with Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tours)=>{
                        return <Cards {...tours} removeTour={removeTour}></Cards>
                    })   
                }
            </div>
        </div>
        
    );
    
}
export default Tours;