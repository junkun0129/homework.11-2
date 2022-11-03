function Iwatani({icon, title}){
    return (
    <div class="button">
      <div class="icon">
        <i class={"fa fa-"+icon}></i>
      </div>
      <span>{title}</span>
    </div>
    )
}

// Iwatani((icon, title)=>{
//     return (
//         <div class="button">
//           <div class="icon">
//             <i class={"fa-fa-"+icon}></i>
//           </div>
//           <span>{title}</span>
//         </div>
//         )
// })