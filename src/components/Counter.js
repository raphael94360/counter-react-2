const Counter = props => {
  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            // console.log(props.key)
            props.newTab[props.numero] = props.newTab[props.numero] - 1
            props.setCounters(props.newTab)
          }}
        >
          {" "}
          -{" "}
        </button>
        <div>{props.value}</div>
        <button
          onClick={() => {
            props.newTab[props.numero] = props.newTab[props.numero] + 1
            props.setCounters(props.newTab)
          }}
        >
          {" "}
          +{" "}
        </button>
        <div>
          <button
            onClick={() => {
              props.newTab[props.numero] = 0
              props.setCounters(props.newTab)
            }}
          >
            {" "}
            RESET{" "}
          </button>
        </div>
      </div>
    </>
  )
}

export default Counter
