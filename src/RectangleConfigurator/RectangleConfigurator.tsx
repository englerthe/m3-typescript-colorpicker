import React from 'react'
import DimensionConfigurator, {Dimension} from './DimensionConfigurator'

interface IProps{};
interface IState{
    height:number;
    width:number;
};

export default class RectangleConfigurator extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            height:50,
            width:50
        }
        this.onvalueChange = this.onvalueChange.bind(this);
      }
      onvalueChange(dimension:Dimension,value:number){
        switch (dimension){
            case (Dimension.h):
                this.setState({height:value});
                break;
            case (Dimension.w):
                this.setState({width:value});
                break;
        }
    }
    render() {
        const rectangleStyle = {
            display: "inline-block",
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
            border: "1px solid black",
            backgroundColor: "red",
            margin: "10px"
        }
        return (
            <div>
                <h2>Hello I'm a rectangle configurator</h2>
                <DimensionConfigurator dimension={Dimension.w} value={this.state.width} onvalueChange={this.onvalueChange}/>
                <DimensionConfigurator dimension={Dimension.h} value={this.state.height} onvalueChange={this.onvalueChange}/>
                <div style={rectangleStyle}></div>
            </div>
        )
    }
}
