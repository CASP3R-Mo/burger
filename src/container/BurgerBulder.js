import React, {
    Component
} from "react";
import Aux from '../HOC/hoc'
class BurgerBuilder extends Component {

    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>
                    Build Control
                </div>
            </Aux>
        );
    }
}
export default BurgerBuilder;