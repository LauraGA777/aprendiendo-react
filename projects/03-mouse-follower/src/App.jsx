import { useEffect, useState } from 'react'


function FollowMouse() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x:clientX, y:clientY})
    }
    if(enabled) {
      window.addEventListener('mousemove',handleMove)
    }
    return () => {
      window.removeEventListener('mousemove',handleMove)
    }
  },[enabled])

  return (
  <main>
    <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -10,
        top: -10,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
    <button onClick={()=>setEnabled(!enabled)}>
      {enabled ? 'Deactivar' : 'Activar'} seguir puntero
    </button>
    </main>
  )
}

function App (){
  const [mounted, setMounted] = useState(true)
  return(
    <>
    {mounted && <FollowMouse/>}
    <br />
    <button onClick={()=>setMounted(!mounted)}>
      Toggle mounted FollowMouse component</button>
    </>
  )
}

export default App
