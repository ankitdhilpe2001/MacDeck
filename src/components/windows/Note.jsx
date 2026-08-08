import { useEffect,useState} from "react"
import "./Note.scss"
import MacWindow from "./MacWindow"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Note = ({onClose}) => {

    const [markDown, setmarkDown] = useState(null)

    useEffect(() => {
      fetch("/note.txt")
      .then(res=> res.text())
      .then(text=> setmarkDown(text))
     
      
    }, [])

    

  return (
    <MacWindow onClose={onClose}>
        <div className="note-window">
            {markDown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markDown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note