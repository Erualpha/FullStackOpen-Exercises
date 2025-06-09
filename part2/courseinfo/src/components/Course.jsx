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

export default Course
  