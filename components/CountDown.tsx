import React from 'react'

type CountDownProps = {
  counter: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}

const CountDown = ({ counter }: CountDownProps) => {
  return (
<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span 
        style={{ "--value": counter.days } as React.CSSProperties} 
        aria-live="polite" 
        aria-label={`${counter.days} days`}
      >
        {counter.days}
      </span>
    </span>
    days
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span 
        style={{ "--value": counter.hours } as React.CSSProperties} 
        aria-live="polite" 
        aria-label={`${counter.hours} hours`}
      >
        {counter.hours}
      </span>
    </span>
    hours
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span 
        style={{ "--value": counter.minutes } as React.CSSProperties} 
        aria-live="polite" 
        aria-label={`${counter.minutes} minutes`}
      >
        {counter.minutes}
      </span>
    </span>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span 
        style={{ "--value": counter.seconds } as React.CSSProperties} 
        aria-live="polite" 
        aria-label={`${counter.seconds} seconds`}
      >
        {counter.seconds}
      </span>
    </span>
    sec
  </div>
</div>
  )
}

export default CountDown