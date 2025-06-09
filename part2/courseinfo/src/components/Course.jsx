const Course = ( {course} ) => {

    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )

// const Header = () => {

//   return (
//     <div>
//       <h1>{course.name}</h1>
//     </div>
//   )
// }

// const Content = ({parts}) => {
//   return(
//     <div>
//     <Part name={parts[0].name} exercises={parts[0].exercises} />
//     <Part name={parts[1].name} exercises={parts[1].exercises} />
//     <Part name={parts[2].name} exercises={parts[2].exercises} />
//     </div>
//   )
// }

// const Part = ({name,exercises}) => {
//   return (
//     <p>
//       {name} {exercises}
//     </p>
//   )
// }

// const Total = ({parts}) => {
//   return (
//     <div>
//     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     </div>
//   )

}

export default Course