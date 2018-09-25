import React, { Component } from 'react';

import Page from './components/Page';
import Header from './components/Header';
import Row from './components/Row';
import Column from './components/Column';
import Block from './components/Block';
import Job from './components/Job';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <Page>
        <Header firstname="Nicolas" lastname="Cordin" title="Front-end Developer" phone="06 65 78 68 02" mail="nicolas@dindon.us" />
        <Row>
          <Column>
            <Block title="About me">
              <p>
                Passionate developer for 12 years, I have an insatiable thirst
                of learning how to improve code quality in order to create great
                modern apps with polished user experience.
              </p>
            </Block>
            <Block title="Favorite Technical Skills">
              <ul>
                <li>Deep knowledge of Javascript</li>
                <li>React 💖</li>
                <li>Redux with Thunk or Observable</li>
                <li>Typescript</li>
                <li>Jest with Enzime</li>
                <li>React Testing Library</li>
                <li>Node and Electron</li>
              </ul>
            </Block>
            <Block title="Soft Skills">
              <ul>
                <li>Clean code - SOLID principles</li>
                <li>Functional programming</li>
                <li>Atomic Design and Storybook</li>
                <li>Profiling and scalability</li>
                <li>Learn and share with others</li>
              </ul>
            </Block>
            <Block title="Follow me">
              <ul>
                <li>
                  Twitter <span className="lighter">@NicoDindon</span>
                </li>
                <li>
                  Codesandbox <span className="lighter">@dindonus</span>
                </li>
                <li>
                  Github <span className="lighter">@dindonus</span>
                </li>
              </ul>
            </Block>
            <Block title="Hobbies">
              <ul>
                <li>Dad 👶 👧</li>
                <li>Drone racing ✈️</li>
                <li>Gardening 🏡</li>
              </ul>
            </Block>
          </Column>

          <Column large>
            <Block title="Work Experiences">
              <ul>
                <li>
                  <Job
                    title="Front-end Developer"
                    compagny="Meetic"
                    from="September 2017"
                    to="now"
                    description="Migrate the Angular app to React / Redux."
                  />
                </li>
                <li>
                  <Job
                    title="Web Developer"
                    compagny="MyBestPro"
                    from="September 2016"
                    to="September 2017"
                    description="Launching a new product using Angular, Typescript and PHP Laravel."
                  />
                </li>
                <li>
                  <Job
                    title="Front-end Developer"
                    compagny="Vodeclic"
                    from="October 2015"
                    to="January 2016"
                    description="Migrate the Rails app to React."
                  />
                </li>
                <li>
                  <Job
                    title="Web Developer / Entrepreneur"
                    compagny="carboLab"
                    from="Octobre 2010"
                    to="September 2016"
                    description="Conception & development of browser and mobile games with more than 500k players using Javascript and PHP."
                  />
                </li>
                <li>
                  <Job
                    title="Web Developer"
                    compagny="Owlient (Ubisoft)"
                    from="Juin 2007"
                    to="September 2010"
                    description="Development of an hightly scalable browser game (55 millions players) using PHP and Javascript."
                  />
                </li>
                <li>
                  <Job
                    title="Web Developer"
                    compagny="Pixmania"
                    from="April 2006"
                    to="Juin 2007"
                    description="PHP development of the logistic back-office."
                  />
                </li>
              </ul>
            </Block>
            <Block title="Learning">
              <ul className="space">
                <li>
                  <strong>Education :</strong> Bac S{' '}
                  <span className="lighter">2003</span>, DUT informatique{' '}
                  <span className="lighter">2005</span>.
                </li>
                <li>
                  <strong>Daily learning :</strong>
                  <List horizontal>
                    {[
                      'Egghead',
                      'Frontend masters',
                      'Syntax',
                      'Udemy',
                      'Youtube',
                    ]}
                  </List>
                </li>
                <li>
                  <strong>Inspired by :</strong>
                  <List horizontal>
                    {[
                      'Dan Abramov',
                      'Rober Martin',
                      'Kent C. Dodds',
                      'Paul Irish',
                      'Wes Boss',
                    ]}
                  </List>
                </li>
              </ul>
            </Block>
          </Column>
        </Row>
      </Page>
    );
  }
}

export default App;
