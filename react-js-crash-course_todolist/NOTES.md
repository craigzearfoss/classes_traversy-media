Create the React application.
```
npx create-react-app .
```
In VSCode install the ES7 React/Redux/GraphQL/React-Native snippets plugin.

Install uuid, a library that generates unique ids.
```
npm install uuid
```

You need to install the router separately.
```
npm i react-router-dom
```

Install axios, anlibrary that allows you to make http requests.
```
npm i axios
```

To start the server.
```
npm start
```

For jsx you can't use the "class" attribute so use "className" instead.

##Styles

For inline styling use double curly braces. They are identical to css except:
- Use camel case instead of hyphens.
- Put the values inside of single quotes.
```
<div style={{ backgroundColor: '#f4f4f4' }}>
```

If you use a variable for styles you only need single curly braces.
```
...
<div style={itemStyle}>
...
const itemStyle = {
    backgroundColor: '#f4f4f4'

}
```

You can also put styles inside a function.
```
export class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}
```

The above can be shortened by using the ternary operator.
```
export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed
                ? 'line-through'
                : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}
```

Custom methods inside of a Component don't have access to "this" so you can either:
1. Bind them
```
...
markComplete(e) {
    console.log(this.props)
}
...
<input type="checkbox" onChange={this.markComplete.bind(this)}/>
```
2. Use an arrow function
```
...
markComplete(e) {
    console.log(this.props)
}
...
<input type="checkbox" onChange={this.markComplete}/>
```

####Since we're not using a state manage we have to "climb the tree".
That is, the state is inside the App.js obect so we can't access it in other components. We do this creating methods inside our props and we climbthose.

## Forms
To maintain the state of a form field.
```
onChange = (e) => this.setState({ title: e.target.value });
```
For multiple form fields instead of creating an onChange field for every field you can use the following as long as the names of the state properties and the for fields match.
```
onChange = (e) => this.setState({ [e.target.name]: e.target.value });
```

If you don't want to return a <div> or and HTML element you can return a React fragment which doesn't get rendered in the DOM.
```
import React from 'react';

function About() {
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
};

export default About
```

If you want to use a router you have to wrap everything that is returned in the render method inside the <Router> tag.
```
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
        </div>
      </Router>
    );
  }
```

To make initial requests use the componentDidMount method which runs right after the component routes.

To deploy the build run the command.
```
npm run build
```
This will put all of your static files in a directory named **/build**.
