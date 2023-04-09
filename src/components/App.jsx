import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState;
  const [neutral, setNeutral] = useState;
  const [bad, setBad] = useState;
  
  const options = Object.keys(useState);

  const handleClick = e => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
    //this.setState(prevState =>({
    //state: prevState.state + 1;
    //}) )
  };

  const countTotalFeedback = () => {
     const { good, neutral, bad } = this.state;
     return good + neutral + bad;
   };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let totalFeedback = good + neutral + bad;
    return Math.round((100 * good) / totalFeedback);
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const options = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  // }
}

// import { Component } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Notification } from './Notification/Notification';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     const { name } = e.target;
//     this.setState({ [name]: this.state[name] + 1 });
//     //this.setState(prevState =>({
//     //state: prevState.state + 1;
//     //}) )
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     let totalFeedback = good + neutral + bad;
//     return Math.round((100 * good) / totalFeedback);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification title={'There is no feedback'} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
