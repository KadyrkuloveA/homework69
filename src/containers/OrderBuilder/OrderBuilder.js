import React, {useEffect} from 'react';
import {getDishes} from "../../store/actions/dishes";
import {connect} from "react-redux";
import DishItem from "../../components/DishItem/DishItem";
import './OrderBuilder.css';


const OrderBuilder = (props) => {

    useEffect(() => {
       props.getAllDishes();
    }, []);



    return (
        <div className='card-row'>
            {props.dishes.map(dish => (
                <DishItem
                    img={dish.image}
                    name={dish.id}
                    cost={dish.cost}
                    onClick={() => dish}
                    key={dish.id}

                />)
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    dishes: state.dr.dishes,
});

const mapDispatchToProps = dispatch => {
    return {
        getAllDishes: () => dispatch(getDishes())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(OrderBuilder);