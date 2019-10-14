import React from 'react';

interface IProps{

};
interface IState{};

export default class DimensionConfigurator extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        }
      }
    render() {
        return (
            <div>
                <h2>I'm a DimensionConfigurator</h2>
            </div>
        )
    }
}

