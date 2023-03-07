import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import WishList from '../wish-list/wish-list';
import WishAddForm from '../wish-add-form/wish-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Айфон',  increase: false, id: 1},
                {name: 'Макбук', increase: true,  id: 2},
                {name: 'Яхта',  increase: false,  id: 3}
            ],
       
        }
        this.maxId = 4;
    }

    showWish = () => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.increase === true)
            }
        })
    }

   showItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id) => {
   
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onRename = (id, val) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, name:val}
                }
                
                return item;
            })
        }))
    }

    addItem = (name) => {
        const newItem = {
            name, 
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                   <AppFilter showWish={this.showWish}/>
                </div>
       
                <WishList 
                    data={this.state.data}
                    showItem={this.showItem}
                    onToggleProp={this.onToggleProp}
                    onRename = {this.onRename}/>
                <WishAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;