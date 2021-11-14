import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #150220;
  letter-spacing: 12px;
  color: #1f0e28;
  border: 3px solid rgba(22, 182, 212, 0.3);
  padding: 20px;
  position: relative;
  width: 240px;
  height: 80px;
  cursor: pointer;
  animation: blink 8s infinite;


@keyframes blink {
  0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
    color: #1f0e28;
    text-shadow: none;
    box-shadow: none;
    border: 3px solid rgba(22, 182, 212, 0.3);
  }
  
  18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 100% {
    border: 3px solid rgba(22, 182, 212, 1);
    color: #ffc2fd;
    text-shadow: 0 0 10px #f205ae,
              0 0 20px #f205ae,
              0 0 40px #f205ae,
              0 0 80px #f205ae,
              0 0 160px #f205ae,
              0 0 320px #f205ae,
              0 0 640px #f205ae;
  box-shadow: inset 0 0 10px rgba(113,213,255, 0.5),
              inset 0 0 20px rgba(113,213,255, 0.5),
              0 0 10px rgba(113,213,255, 0.3),
              0 0 20px rgba(113,213,255, 0.3),
              0 0 40px rgba(113,213,255, 0.3),
              0 0 80px rgba(113,213,255, 0.3),
              0 0 160px rgba(113,213,255, 0.3),
              0 0 320px rgba(113,213,255, 0.3)
    }
  }
}
`

const Span = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
`

const AnimatedHeading = ({ title }) => {
  return (
    <Wrapper>
      <Span className="text-2xl font-semibold">{title}</Span>
    </Wrapper>
  )
}

export default AnimatedHeading
