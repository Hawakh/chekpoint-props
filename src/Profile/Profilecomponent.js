import propTypes from "prop-types";
const ProfileComponents=(props)=>{
    return(
        <>
       <div>
        <h3>{props.FullName}</h3>
        <h4>{props.Bio}</h4>
       </div>
       <div>
        <button onClick={()=>props.handelName(str)}>Click here</button>
        
       </div>
       </>
    )
}
ProfileComponents.defaultProps={
    FullName:"name and surname",
    Bio:"give a discription about yourself"

};
ProfileComponents.propTypes={
    FullName:propTypes.string,
    Bio:propTypes.string,
    handelName:propTypes.func,
};
export default ProfileComponents;
const str="Haoua";
 