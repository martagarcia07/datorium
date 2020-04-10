import * as React from 'react';
// import User from '../../models/User';


interface IProps {
    prop: boolean;
}
interface IState {
  // user: User;
  loading?: boolean;
}

export class HomePage extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <section>
        <div>
          HOLA MUNDO
        </div>
      </section>
    );
  }
}
