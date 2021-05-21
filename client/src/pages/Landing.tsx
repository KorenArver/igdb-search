import { useState } from 'react'
import { useHistory } from 'react-router'
import '../style/Landing.css'

/**
 * Component displaying the landing page in the application
 * @returns the JSX element displaying the component
 */
export default function Landing(): JSX.Element {
  const history = useHistory()
  const [inputValue, setInputValue] = useState('')

  /**
   * Handles the change of the input string
   * @param event the event associated to the change of the input element
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  /**
   * Handles the submission of the form in the page
   * @param event the event associated to the form element
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    history.push(`/searchResult/${inputValue}`)
  }

  return (
    <div className="Landing">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search your game here"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
