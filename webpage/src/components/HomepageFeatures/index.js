import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'ROS 2 Actions and Lifecycle Nodes',
    description: (
      <>
        Write complete Action servers and clients, define Action goals, and implement Action policies. 
        Use Lifecycle Nodes to create an initialization sequence and understand best practices for node lifecycle management.
      </>
    ),
  },
  {
    title: 'Executors and Components',
    description: (
      <>
        Learn how to use single-threaded and multi-threaded executors. 
        Create ROS 2 components to load at runtime and combine multiple nodes in one executable for improved efficiency.
      </>
    ),
  },
  {
    title: 'Hands-On Learning',
    description: (
      <>
        Practice with extra challenges and projects while discovering more ROS 2 command-line tools. 
        Understand the spin mechanism, improve your ROS 2 knowledge, and build robust robotic systems.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
