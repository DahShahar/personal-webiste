import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ReactMarkdown from 'react-markdown';

// TODO: stick to 3rd person
const aboutSource = `
## Welcome to Shahar's Website    

This is my personal playground where I implement different ideas that I want. See the [widgets](/widgets) to see the different ideas I tried out.
I created this website to get more experience
practicing with React. This also provides me an opportunity to have a place for others to try
some APIs that I want play around with.

### Who I am  
I graduated from the University of Massachusetts in Amherst with a degree in Computers Science and Math.
I am interested in working with distributed systems.
I have five years of experience with Amazon Web Services, primarily working with Java and Typescript.
I have extensive familiarity with EC2, Lambda, ECS, SQS, DynamoDB, API Gateway, Cloudwatch, CloudFormation and many other services.  

Talk about how I like to mess around with dotfiles, finding new productivity tools, etc (share GitHub link, maybe create the repo)  

Talk about my interests such as board games, exercising, lifting, etc  

I might be out of ideas

### Source code

See [the GitHub page for this website](https://github.com/DahShahar/personal-website)`;

export default function About() {
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
      <Paper elevation={24} sx={{ padding: '1%' }}>
        <ReactMarkdown>
          {aboutSource}
        </ReactMarkdown>
      </Paper>
    </Container>
  );
}