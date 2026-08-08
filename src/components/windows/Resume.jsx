import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({onClose}) => {
  return (
    <MacWindow onClose={onClose}>
        <div className="resume-window">
            <iframe src="/Full-stack-Developer" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume