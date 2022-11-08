import React, { ReactNode } from 'react';
import { GreeterProps } from '../model/IProps';
import { GreeterState } from '../model/IStates';

class Greeter extends React.Component<GreeterProps, GreeterState> {
  constructor(props: GreeterProps) {
    super(props);
    this.state = {currentEnthusiasm: this.props.enthusiasmLevel || 1};
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  private onIncrement(): void {
    this.updateEnthusiasm(1);
  }

  private onDecrement(): void {
    this.updateEnthusiasm(-1);
  }

  private updateEnthusiasm(change: number): void {
    this.setState({ ...this.state, currentEnthusiasm: this.state.currentEnthusiasm + change});
  }

  private getExclamationMarks(numChars: number): string {
    return Array(numChars + 1).join("!");
  }

  public render(): ReactNode {
    if (this.state.currentEnthusiasm < 0) {
      throw new Error("You could be a little more enthusiastic! :D");
    }
    return (
      <>
        <div className="hello">
          <div className="greeting">
            Hello, {this.props.user.username + this.getExclamationMarks(this.state.currentEnthusiasm)}
          </div>
          <button onClick={this.onDecrement}>-</button>
          <button onClick={this.onIncrement}>+</button>
        </div>
      </>
    );
  }
}

export default Greeter;
