const Notification = ({ message, type }) => {
  if (!message) return null

  const style = {
    color: type === 'error' ? 'red' : 'green',
    background: '#eee',
    fontSize: 18,
    border: `2px solid ${type === 'error' ? 'red' : 'green'}`,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification