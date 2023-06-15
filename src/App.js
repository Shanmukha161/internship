import React from './Demo'

class app extends React.Component{
   state={
    companyname:"codegnan",
    year:2008
   }
  render(){
    return(
      <section>
      <h1>good afternoon</h1>
      <p>value is{this.state.companyname}{this.state.year}</p>
      <Demo Name =  "ravi" company="codegnan"/>
       </section>
    )
  }
}
export default app