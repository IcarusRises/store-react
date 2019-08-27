import React, {Component, Children} from 'react';

import styles from './Tabs.module.css';

class Tabs extends Component{

    state={
        active: 0,
    }

    select = (i) => {
        return () => {
            this.setState({
                active: i
            });
        }
    }

    renderTabs = () => {
        return Children.map(this.props.children, (item, i) => {
            if(i%2 === 0){
                let active = this.state.active === i ? 'active' : '';
                
                return <button onClick={this.select(i)} className={`${active} ${styles.tabs}`}>{item}</button>
            }
        });
    }

    renderContent(){
        return Children.map(this.props.children, (item, i) =>{
            if(i-1 === this.state.active){
                return <div className={`${styles.tabscontent} ${styles.clearfix}`}>{item}</div>;
            } else {
                return;
            }
        });
    }

    render(){
        return(
            <div className={styles.tabs_container}>
                {this.renderTabs()}
                {this.renderContent()}
            </div>
        )
    }

}

export default Tabs;