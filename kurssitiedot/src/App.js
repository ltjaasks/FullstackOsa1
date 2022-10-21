const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} /> 
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.luku1 + props.luku2 + props.luku3}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>
      {props.part} {props.exercises}
    </p>
  </div>
  )
}

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total luku1={exercises1} luku2={exercises2} luku3={exercises3} />
    </div>
  )
}

export default App