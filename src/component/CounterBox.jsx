import React from 'react'
import counterStore from '../store/counterStore'

const CounterBox = () => {
    const {count, increase,increaseBy,decrease,decreaseBy,reset}=counterStore()
  return (
    <div className='main'>
        <div className='count-box'>
            <div className='reset-btn'>
                <span onClick={reset}>초기화</span>
            </div>
            <h1>
                {count}
            </h1>
            <div className='btn-area'>
                <button onClick={increase}>+</button>
                <button onClick={()=>increaseBy(10)}>+10</button>
                <button onClick={decrease}>-</button>
                <button onClick={()=>decreaseBy(10)}>-10</button>
            </div>
        </div>
    </div>
  )
}

export default CounterBox
