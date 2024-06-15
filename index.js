const Button = props => {
  //  Write your code here.
  const {buttonText, className} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='social-buttons-container'>
    <div className='bg-container'>
      <h1 className='heading'>Social Buttons</h1>
      <div className='button-card'>
        <Button buttonText='Like' className='like' />
        <Button buttonText='Comment' className='comment' />
        <Button buttonText='Share' className='share' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
