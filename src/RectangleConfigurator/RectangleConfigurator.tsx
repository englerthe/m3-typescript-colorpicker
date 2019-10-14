import React from 'react'
import DimensionConfigurator from './DimensionConfigurator'

interface IProps{};
interface IState{
    hight:number;
    width:number;
};

export default class RectangleConfigurator extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            hight:5,
            width:50
        }
      }
    render() {
        return (
            <div>
                <h2>Hello I'm a rectangle configurator</h2>

                <DimensionConfigurator/>
            </div>
        )
    }
}
