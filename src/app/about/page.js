

async function takeTime(){
    await new Promise((resolve) =>{
        setTimeout(resolve, 8000);
    })
}


export default async function about(){    
    await takeTime();
    return(
        <div>
            <h1> This is About Page </h1>
        </div>
    );
}