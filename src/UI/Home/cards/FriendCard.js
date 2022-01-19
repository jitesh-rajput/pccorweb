import userprofile from './../img/icons/user.png';


const FriendCard =()=>{
    return(
        <div className="row py-3"> 
        <div className="col-sm-12 col-lg-6 m-auto">
        <div class="card text-dark">
        <div class="card-body">
            <div className="d-flex justify-content-between">
                <div className='d-flex'>
                <img src={userprofile} height={35} /> 
                <h6 className="px-2 py-1">Username</h6>
                </div>
                <button className="btn py-2" >Connect</button>
            </div>
            <p>This is some text within a card body.</p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default FriendCard;