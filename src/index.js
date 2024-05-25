import { styles } from "./style"
import { img,img1,div2,styleSheet } from "./Text"

let body = document.querySelector("body")

styleSheet.innerText = styles
body.appendChild(styleSheet)


body.appendChild(img)
body.appendChild(img1)
body.appendChild(div2)


//xar yangilangandan keyin: npm run build