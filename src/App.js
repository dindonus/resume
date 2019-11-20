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
        <Header
          firstname="Nicolas"
          lastname="Cordin"
          title="Front-end Developer"
          phone="06 65 78 68 02"
          mail="nicolas@dindon.us"
        />

        <p>
          Développeur Web passionné, j'ai une excellente connaissance de
          Javascript et je suis fasciné par React depuis 2015. Mon background de
          développeur back PHP m'a apporté une solide connaissance de la POO,
          des design-patterns et des principes S.O.L.I.D. J'aime implémenter des
          interfaces utilisateurs modernes, fiables et agréables à utiliser
          grâce à un code claire et bien architecturé.
        </p>
        <Row>
          <Column>
            <Block title="Favorite Technical Skills">
              <ul>
                <li>Deep knowledge of modern Javascript</li>
                <li>Typescript</li>
                <li>React 💖</li>
                <li>Redux with Thunk or Observable</li>
                <li>React Testing good practices</li>
                <li>Styled-components</li>
                <li>GraphQL Apollo</li>
                <li>Node and Electron</li>
                <li>Webpack</li>
              </ul>
            </Block>
            <Block title="Soft Skills">
              <ul>
                <li>Clean code - SOLID principles</li>
                <li>Functional programming</li>
                <li>Atomic Design and Storybook / Docz</li>
                <li>Profiling and scalability</li>
                <li>Strong team spirit</li>
                <li>User empathy</li>
                <li>Daily learning</li>
              </ul>
            </Block>
            <Block title="About me">
              <ul>
                <li>
                  Bac S <span className="lighter">2003</span>
                </li>
                <li>
                  DUT informatique <span className="lighter">2005</span>
                </li>
                <li>
                  Twitter <span className="lighter">@NicolasCordin</span>
                </li>
                <li>
                  Github <span className="lighter">@ncordin</span>
                </li>
              </ul>
            </Block>
          </Column>

          <Column large>
            <Block title="Work Experiences">
              <ul>
                <li>
                  <Job
                    title="Freelancer / Javascript Developer"
                    compagny="Dashlane"
                    from="May 2019"
                    to="now"
                    description="J'ai rejoint l'équipe Platform, en charge de l'évolution de la stack, des améliorations architecturales et de l'expérience développeur."
                    stack={[
                      'typescript',
                      'react',
                      'redux',
                      'node',
                      'rxjs',
                      'jest',
                    ]}
                  />
                </li>
                <li>
                  <Job
                    title="Freelancer / Front-end Developer"
                    compagny="Lunchr"
                    from="February 2019"
                    to="May 2019"
                    description="Développement de features et support sur la webapp."
                    stack={[
                      'react',
                      'redux',
                      'styled-components',
                      'jest',
                      'ssr',
                    ]}
                  />
                </li>
                <li>
                  <Job
                    title="Front-end Developer"
                    compagny="Meetic"
                    from="September 2017"
                    to="February 2019"
                    description="J'ai rejoint la feature team en charge de la refonte de la messagerie. J'ai pu jouer un rôle majeur dans la migration d'Angular vers React."
                    stack={['react', 'redux', 'webpack', 'jest', 'angular-js']}
                  />
                </li>
                <li>
                  <Job
                    title="Web Developer"
                    compagny="MyBestPro @Vodeclic"
                    from="October 2015"
                    to="September 2017"
                    description="Launching a new product using Angular and Laravel. Migrate the Rails app to React."
                  />
                </li>
                <li>
                  <Job
                    title="Web Developer"
                    compagny="Pixmania @Ubisoft"
                    from="Juin 2007"
                    to="September 2016"
                    description="I worked 1 year at Pixmania, 3 years at Ubisoft and 5 years as an entrepreneur. I learned to be a full stack developer, a lot of javascript, and hight scalability."
                  />
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
