import React from 'react';
import ReactDOM from 'react-dom';
import {marked} from 'marked';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: `# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n This is a [link](http://www.linkedin.com/in/rana-badr-079026220)\n\n This is \`inline-code\`\n \`\`\`\n //This is a multi-line code: 

          function anotherExample(x, y) {
            if (x > y) {
              return x;
            }
          }\n \`\`\`\n This is a list of items:\n - fiest item\n - second item\n > This is a blockquote.\n\n ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png?20220125121207 "React Logo")\n You can also make text **bold**`
        };
        marked.setOptions({
            breaks: true
        })   
    }

    render() {
        return (
            <div id="container">
                <textarea 
                id="editor" 
                className="markdown"
                onChange={(e) => {this.setState({text: e.target.value})}}
                value={this.state.text}
                ></textarea>
                <div 
                id="preview"
                className="markdown"
                dangerouslySetInnerHTML={{
                    __html: marked(this.state.text) 
                }}></div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));