import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { deleteAllUsers } from '../store/slices/userSlice';

const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const clearAll = () => {
    console.log("hi");
    dispatch(deleteAllUsers())
  }

  return (
    <Wrapper>
      <button className='clear-btn' onClick={clearAll} >
        Clear All
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    border: none;
    opacity: 0.9;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 7px 13px;
    border-radius: 4px;
    letter-spacing: 0.3px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: transform 0.5s ease;
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`

export default DeleteAllUser