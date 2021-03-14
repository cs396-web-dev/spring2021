import React, { Component, FormEvent } from "react";
import Form from "./Form";
import { GroceryItem } from "../utils/GroceryItem";

interface AppProps {}

interface AppState {
    items: GroceryItem[];
}

class App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = { items: [] };
    }

    addGroceryItem(item: GroceryItem) {
        const items = [...this.state.items, item];
        this.setState({ items });
    }

    render() {
        return (
            <div>
                <Form onSubmit={(item: GroceryItem) => this.addGroceryItem(item)}/>
                <br/>My List:<br/>
                {this.state.items.map(
                    (item: GroceryItem) => <div key={`${item.name}_${item.quantity}`}>
                        {item.quantity} {item.name} ({item.type})
                    </div>
                )}
            </div>
        );
    }

}

export default App;
