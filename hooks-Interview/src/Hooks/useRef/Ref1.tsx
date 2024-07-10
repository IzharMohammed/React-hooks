import React, { useEffect, useRef } from 'react'

function Ref1() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // It will focus when we mount the component at start
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Type something ...' />
    </div>
  )
}

export default Ref1