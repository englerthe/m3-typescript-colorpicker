import React from 'react';

export enum Dimension {
    h = "height",
    w = "width"
}

interface IProps{
    dimension:Dimension;
    value:number;
    onvalueChange:IonvalueChange;
};

interface IonvalueChange{
    (dimension:Dimension,value:number):void
}

interface IState{ };

export default class DimensionConfigurator extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.callvalueChangeOfParentComponent = this.callvalueChangeOfParentComponent.bind(this);   
      }
    callvalueChangeOfParentComponent(event:any){
        this.props.onvalueChange(this.props.dimension,event.target.value);
    } 
    render() {
        let testString: string = "";
        switch (this.props.dimension) {
            case Dimension.w:
                testString = `width value`;
                break;
            case Dimension.h:
                    testString = `height value`;
                break;
        }
        return (
            <div>
                <h2>Here you can insert {testString}</h2>
                <input type="number" value={this.props.value} onChange={this.callvalueChangeOfParentComponent}/>
            </div>
        )
    }
    
}

