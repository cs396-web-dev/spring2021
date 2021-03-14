import React, { Component } from "react";
import { FormEvent, InputChangeEvent, SelectChangeEvent } from "../utils/HTMLEvents";
import { GroceryItem, GroceryItemType } from "../utils/GroceryItem";

interface FormProps {
    onSubmit: (item: GroceryItem) => void
}

interface FormState extends GroceryItem {}

class Form extends Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super(props);
        this.state = this.defaultState;
    }

    defaultState: FormState = {
        name: "",
        quantity: 0,
        type: GroceryItemType.None
    };

    onSubmit(e: FormEvent) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.defaultState);
    }

    render() {
        return (
            <form onSubmit={(e: FormEvent) => this.onSubmit(e)}>
                <label>
                    <h4>Grocery Item</h4>
                    <input onChange={(e: InputChangeEvent) => this.setState({ name: e.target.value })}
                           type="text"
                           value={this.state.name}/>
                </label><br/>
                <label>
                    <h4>Quantity</h4>
                    <input onChange={(e: InputChangeEvent) => this.setState({ quantity: +e.target.value })}
                           type="number"
                           value={this.state.quantity}/>
                </label><br/>
                <label>
                    <h4>Type</h4>
                    <select onChange={(e: SelectChangeEvent) => this.setState({ type: e.target.value as GroceryItemType })}
                            value={this.state.type}>
                        {Object.keys(GroceryItemType).map((type: string) => (
                            <option key={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

}

export default Form;
