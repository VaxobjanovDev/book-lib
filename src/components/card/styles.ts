export const cardStyle = {
  position: "relative",

  "&:hover": {
    ".button-box": {
      top: "0",
      transition: "0.5s",
      zIndex: "999"
    },

    ".card-content":{
      bottom:"0",
      transition: "0.5s",
      zIndex: "999"
    },
    ".status-button":{
      top:"0",
      transition: "0.5s",
    }
  }
}


export const styleHover = {
  position: "absolute",
  bottom: "-100%",
  background: "rgba(0,0,0,0.3)",
  width: "100%",
  color: "#fff",
  "span":{
    fontSize:"16px",
    color:"#E5CCC9",
    fontWeight:"500"
  },
  "h6":{
    color: "#fff",
    fontSize:"16px",
    fontWeight:"600"

  }
}

export const buttonStyles = {
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  position: "absolute",
  top: "-100%",
  right: "0",
  gap: "5px",
  margin:"0 5px"
}

export const  statusButton = {
  position:"absolute",
  top:"-100%",
  left:"0"
}