const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const Course = ({ course }) => {

    const Header = () => <h2>{course.name}</h2>

    const Parts = () => (
      <div>
        {course.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        )}
      </div>
    )

    const Total = () => {
      const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
      return (
        <div>
          <p><b>total of {total} exercises</b></p>
        </div>
      )
    }

    return (
      <div>
        <Header />
        <Parts />
        <Total />
      </div>
    )
  }

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default App