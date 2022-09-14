const Contact = () => {

  const handleSubmit = (e)=> {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex column">
      <label>
        Name
        <input type="text" placeholder="digite seu nome..." required />
      </label>
      <label>
        email
        <input type="email" placeholder="digite seu email..." required />
      </label>
      <label htmlFor="message">Mensagem</label>
      <textarea id="message" rows={10} type="text" placeholder="deixe sua menssagem..." required />
      <input className="btn" type="submit" value="enviar" />
    </form>
  )
}

export default Contact