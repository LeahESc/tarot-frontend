import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: .25rem;
    border: .15rem solid white;
    color: white;
    margin: 0 1rem;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;

    &:hover { 
    background-color: white;
    color: black;
    }
    `

export default Button