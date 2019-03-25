

import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        document.title=this.props.title+ '-HAPPYM ADMIN';
    }
    render(){
        return (

        <div classname="row"> 
            <div classname="col-md-12">
                <h1 class="page-header">{this.props.title}</h1>
                {this.props.children}
            </div>
        </div>
            
        )
    }
}

export default PageTitle;