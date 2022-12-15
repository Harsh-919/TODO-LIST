import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mytxt: "",
      myarry: []
    }
  }

  onChange(event) {
    this.setState({ 

      mytxt: event.target.value
    
    })

  }

  onClickAdd(event) {
    let list = this.state.myarry
    if (this.state.editIdx) {
      list[this.state.editIdx] = event;
    } else {
      list.push(event); // array main push kiya text (this.state.mytext) jo niche se aaya and store hua as event
    }

    localStorage.setItem("item", this.state.myarry)
    localStorage.getItem("item", this.state.myarry);
    this.setState({
      myarry: list,
      mytxt: "",
      myeditIdx: null

    })

  }

  removeItem(index) {
    let abc = this.state.myarry.splice(index, 1)
    this.setState({
      todoListy: abc,

    })
  }

  editItem(index) {
    this.setState({
      mytxt: this.state.myarry[index],
      editIdx: index,
    });
  }
  render() {
    return (

      <React.Fragment>

        <center><h1>TODO LIST</h1>
          <input type="date" /></center>
        <hr />
        <center>
          <b>Enter Your task</b>
          <input type="text" name="txt" placeholder="Enter Goal" value={this.state.mytxt} onChange={this.onChange.bind(this)} />
          &nbsp;&nbsp;&nbsp;

          <button className="AddButton" onClick={() => this.onClickAdd(this.state.mytxt)}>Add</button>



          <b>
            {this.state.myarry.map((value, index) =>
              <h4 key={index}>
                {index + 1}. {value}
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => this.editItem(index)}>EDIT</button>
                <button onClick={() => this.removeItem(index)}>DELETE</button>
              </h4>
            )}
          </b>


        </center>

      </React.Fragment>

    )
  }





}
export default App;





