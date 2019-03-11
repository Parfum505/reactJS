import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetails from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <>
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishId)=> this.onDishSelect(dishId)} />
                <DishDetails
                    details={this.state.dishes.filter(dish =>
                      dish.id === this.state.selectedDish
                    )[0]} />
                <Footer />
            </>
        );
    }
}

export default Main;
