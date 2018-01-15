// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateTimestamp, updateReduxExample } from '../../shared/actions'
import {
  getTheTime,
  getTheDate,
  getConvertedTime,
  getDummyPlanOptions
} from '../../shared/helpers'
import styles from './example-react.scss'

class ExampleReact extends PureComponent {
  constructor(props: any) {
    super(props)
    this.calculate = this.calculate.bind(this)
  }

  calculate() {
    this.props.dispatch(updateTimestamp())
    this.props.dispatch(updateReduxExample('True'))
    getConvertedTime(this.props.dispatch)
  }

  componentDidMount() {
    getDummyPlanOptions(this.props.dispatch, this.props.business)
  }

  render() {
    getTheTime(this.props.timeStamp)
    const dateToFormat = this.props.timeStamp
    const getSavedRedux = this.props.reduxSavedExample

    return (
      <div className={styles.wrapper}>
        <p>Props from Value HTML: {this.props.value}</p>

        <p>Seved with Redux: {getSavedRedux}</p>

        <p>Timestamp: {dateToFormat}</p>

        <p>Converted Time: {this.props.convertTime}</p>

        <p>Current Date: {getTheDate()}</p>

        <div className={`${styles.data} ${styles.block}`}>
          <p className={styles.dataHeading}>JSON Data</p>
          {this.props.dummyPlanOptions.dummyPlans &&
            this.props.dummyPlanOptions.dummyPlans.map((item, index) => (
              <span key={index}>
                {this.props.dummyPlanOptions.dummyPlans[index].name}
              </span>
            ))}
        </div>
        <a
          className={`btn btn-primary ${styles.button}`}
          onClick={this.calculate}>
          Get Time
        </a>
      </div>
    )
  }
}

export default connect(state => ({
  timeStamp: state.exampleReactDemo.timeStamp,
  reduxSavedExample: state.exampleReactDemo.reduxSavedExample,
  convertTime: state.exampleReactDemo.convertTime,
  dummyPlanOptions: state.exampleReactDemo.dummyPlanOptions
}))(ExampleReact)
