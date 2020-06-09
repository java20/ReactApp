import React, { Component } from 'react'
import './mainStyle.css'
import View from './View'

class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                                                              /*** ANCHOR STATE */
            Content: 'Google',
            Href: 'https://www.google.com',
            Target: '_self',
            Id: 'Link@ID',
            Class: 'Link@CLASS',
          
                                                              /*** COLOR STATE */
            Opacity1: 1.0,
            Colour1: '#0066ff',
                                                              /*** Back-ground STATE */
          
            Colour2: '#ffffff',
            //  Url: '',
             Opacity2: 1.0,
                                                              /** Border STATE */
            Width: 2,
            Type: 'solid',
            Colour3: '#000000',
                                                              /** Font STATE */
            PriFont: 'Arial',
            SecFont: 'sans-serif'
        }
    }
    
    setContent = (event) => {
        this.setState({
            Content: event.target.value
        });
    }

    setUrl = (event) => {
        this.setState({
            Href: event.target.value
        });
    }

    setTarget = (event) => {
        this.setState({
            Target: event.target.value
        });
    }

    setId = (event) => {
        this.setState({
            Id: event.target.value
        });
    }

    setClass = (event) => {
        this.setState({
            Class: event.target.value
        });
    }

    setOpacity = (event) => {
      this.setState({
          Opacity1: event.target.value
      });
  }

  setColour = (event) => {
      this.setState({
          Colour1: event.target.value
      });
  }

  setBgColour  = (event) => {
    this.setState({
      Colour2: event.target.value
 });
}

// setBgImgUrl  = (event) => {
//     this.setState({
//       Url: event.target.value
//  });
// }

setBgOpacity  = (event) => {
    this.setState({
      Opacity2: event.target.value
 });
}

setBorderWidth = (event) => {
  this.setState({
    Width: event.target.value
  });
}

setBorderStyle = (event) => {
  this.setState({
    Type: event.target.value
  });
}

setBorderColor = (event) => {
  this.setState({
    Colour3: event.target.value
  });
}

setPrimary = (event) => {
  this.setState({
     PriFont: event.target.value
  });
}

setSecondary = (event) => {
  this.setState({
     SecFont: event.target.value
  });
}

    render() {
        if(this.props.elementtype==='default'){
          return (
            <div id='main'>
                <h3>Welcome To</h3>
                <h1>STYLE AUTOMATE</h1>
            </div>
      )
        }
        else if(this.props.elementtype==='a'){
              return (
                <>
                      <div id='mainHtml'>
                         <h2>Anchor element</h2>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>TAG CONTENT &nbsp;<sup>&#9913;</sup></span>
                      </div>
                      <input type='text'
                        value={this.state.Content}
                       required 
                       className='form-control' 
                       placeholder='Enter Content' 
                       onChange={this.setContent} />
                      </div>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>Href &nbsp;<sup>&#9913;</sup></span>
                      </div>
                    <input
                     value={this.state.Href} 
                    type='url' 
                    id='urladdress' 
                    required 
                    className='form-control' 
                    placeholder='Enter url' 
                    onChange={this.setUrl} />
                    <div className='input-group-prepend'>
                        <label for='selTarget' className='input-group-text'>Select Target</label>
                      </div>
                       <select value={this.state.Target} className='form-control' id='selTarget' onChange={this.setTarget}>
                          <option selected>_self</option>
                          <option>_blank</option>
                          <option>_parent</option>
                          <option>_top</option>
                        </select>
                    </div>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>ID</span>
                      </div>
                        <input
                        value={this.state.Id} 
                        type='text' 
                        id='anchor@id'
                        className='form-control' 
                        placeholder='Enter ID' 
                        onChange={this.setId}/>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'>Class</span>
                      </div>
                      <input 
                       value={this.state.Class}
                      type='text' 
                      id='anchor@class' 
                      className='form-control' 
                      placeholder='Enter Class' 
                      onChange={this.setClass}
                      />
                    </div>
                  </div>
                    <View 
                    tag={'anchor'} 
                    content= {this.state.Content}
                    Href= {this.state.Href}
                    Target= {this.state.Target}
                    Id= {this.state.Id}
                    Class= {this.state.Class}
                    colour={this.state.Colour1} 
                    colopacity= {this.state.Opacity1}
                    bgcolour={this.state.Colour2}
                    bgopacity={this.state.Opacity2}
                    Width={this.state.Width}
                    Type={this.state.Type}
                    borcolour={this.state.Colour3}
                    Font1={this.state.PriFont}
                    Font2={this.state.SecFont}
                    />
                </>
          )
        }
        else if(this.props.elementtype==='button'){
        return (
          <div id='mainHtml'>
              <h2>Button element</h2>
              <p>This is button part area</p>
          </div>
        )
        }
        else if(this.props.elementtype==='code'){
          return (
              <div id='mainHtml'>
                  <h2>Code element</h2>
                  <p>This is code part area</p>
              </div>
            )
        }
        else if(this.props.elementtype==='headings'){
        return (
          <div id='mainHtml'>
              <h2>Heading element</h2>
              <p>This is Heading part area</p>
          </div>
         )
        }
        else if(this.props.elementtype==='color'){
          return(
            <>
                <div id='mainStyle'>
                  <h2>Color</h2>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>COLOR</span>
                        </div>
                        <input 
                        value={this.state.Colour1} 
                        type='color' 
                        className='form-control' 
                        onChange={this.setColour} />
                    </div>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>OPACITY</span>
                        </div>
                            <input 
                            type='range' 
                             value={this.state.Opacity1} 
                            className="custom-range form-control" 
                            step='0.1' 
                            min='0' 
                            max='1' 
                            onChange={this.setOpacity}
                            />
                        <div className='input-group-append'>
                            <span className='input-group-text'>{this.state.Opacity1}</span>
                        </div>
                    </div>
                    </div>
                    <View 
                    tag={'anchor'} 
                    content= {this.state.Content}
                    Href= {this.state.Href}
                    Target= {this.state.Target}
                    Id= {this.state.Id}
                    Class= {this.state.Class}
                    colour={this.state.Colour1} 
                    colopacity= {this.state.Opacity1}
                    />
                  </>
          )
        }
        else if(this.props.elementtype==='background-color'){
          return(
          <>
          <div id='mainStyle'>
          <h2>Background-Color</h2>
          <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
              <div className='input-group-prepend'>
                  <span className='input-group-text'>BACKGROUND-COLOR</span>
              </div>
                  <input
                   value={this.state.Colour2}
                   onChange={this.setBgColour}
                   type='color'
                   className='form-control' 
                      />
          </div>
          {/* <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
              <div className='input-group-prepend'>
                  <span className='input-group-text'>BACKGROUND-IMAGE</span>
              </div>
                  <input 
                  value={this.state.Url} 
                  onChange={this.setBgImgUrl} 
                  type='url' 
                  className='form-control' 
                  placeholder='Enter url' 
                  />
              </div> */}
          <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
              <div className='input-group-prepend'>
                  <span className='input-group-text'>OPACITY</span>
              </div>
                  <input 
                  value={this.state.Opacity2}
                  onChange={this.setBgOpacity}
                  type='range' 
                  className="custom-range form-control" 
                  step='0.1' 
                  min='0.0' 
                  max='1.0' 
                  />
              <div className='input-group-append'>
                  <span className='input-group-text'>{this.state.Opacity2}</span>
              </div>
            </div>
           </div>
           <View 
                    tag={'anchor'} 
                    content= {this.state.Content}
                    Href= {this.state.Href}
                    Target= {this.state.Target}
                    Id= {this.state.Id}
                    Class= {this.state.Class}
                    bgcolour={this.state.Colour2}
                    bgopacity={this.state.Opacity2}
                    />
          </>
          )
        }
        else if(this.props.elementtype==='border'){
          return(
          <>
          <div id='mainStyle'>
            <h2>Border</h2>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                        <div className='input-group-prepend'>
                            <label for='border@width' className='input-group-text'>BORDER-WIDTH(px)</label>
                        </div>
                            <input
                             type='number' 
                             placeholder='Enter Width' 
                             id='border@width' 
                             className='form-control' 
                             value={this.state.Width}
                             onChange={this.setBorderWidth}
                             />
                    </div>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                        <div className='input-group-prepend'>
                            <label for='border@wstyle' className='input-group-text'>BORDER-TYPE</label>
                        </div>
                        <select value={this.state.Type} onChange={this.setBorderStyle} className='form-control' id='border@style'>
                          <option>dotted</option>
                          <option>dashed</option>
                          <option selected>solid</option>
                          <option>double</option>
                          <option>groove</option>
                          <option>ridge</option>
                          <option>inset</option>
                          <option>outset</option>
                          <option>none</option>
                          <option>hidden</option>
                        </select>
                    </div>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                        <div className='input-group-prepend'>
                            <label for='border@color' className='input-group-text'>BORDER-COLOR</label>
                        </div>
                        <input 
                        type='color' 
                        id='border@wcolor' 
                        className='form-control' 
                        value={this.state.Colour3}
                        onChange={this.setBorderColor}
                        />
                     </div>
                    </div>
                    <View 
                    tag={'anchor'} 
                    content= {this.state.Content}
                    Href= {this.state.Href}
                    Target= {this.state.Target}
                    Id= {this.state.Id}
                    Class= {this.state.Class}
                    Width={this.state.Width}
                    Type={this.state.Type}
                    borcolour={this.state.Colour3}
                    />
          </>
         )
        }
        else if(this.props.elementtype==='font'){
          return(
            <>
            <div id='mainStyle'>
              <h2>Font</h2>
                    <div className='input-group mb-3 pl-4 pr-4 input-group-sm'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>Font-Family</span>
                        </div>
                        <select value={this.state.PriFont} onChange={this.setPrimary} className='form-control' placeholder='Primary font'>
                          <option selected>Arial</option>
                          <option>Arial-Narrow</option>
                          <option>Helvetica</option>
                          <option>Verdana</option>
                          <option>Gill Sans</option>
                          <option>Noto Sans</option>
                          <option>Georgia</option>
                          <option>Times New Roman</option>
                          <option>monospace</option>
                        </select>
                        <select value={this.state.SecFont} onChange={this.setSecondary} className='form-control' placeholder='Secondary font'>
                          <option>serif</option>
                          <option selected>sans-serif</option>
                          <option>monospace</option>
                          <option>cursive</option>
                          <option>fantasy</option>
                        </select>
                    </div>
                    </div>
                    <View 
                    tag={'anchor'} 
                    content= {this.state.Content}
                    Href= {this.state.Href}
                    Target= {this.state.Target}
                    Id= {this.state.Id}
                    Class= {this.state.Class}
                    Font1={this.state.PriFont}
                    Font2={this.state.SecFont}
                    />
            </>
          )
        }
      }
}

export default Main
