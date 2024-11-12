import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updatePassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import useStore from "../../store/store";
import styled from "styled-components";
import Button from "../shared/common/Button";

const Login = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setUser(user);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <div className="wrap">
        <form onSubmit={onLogin}>
          <input
            type="email"
            onChange={(event) => setLoginEmail(event.target.value)}
            placeholder="이메일"
          />
          <input
            type="password"
            onChange={(event) => setLoginPassword(event.target.value)}
            placeholder="비밀번호"
          />
          <Button
            className="submit"
            theme="blue"
            onClick={onLogin}
          >
            로그인
          </Button>
        </form>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10.4rem);
  .wrap {
    width: 30rem;
    input {
      margin-top: 1rem;
    }
    button {
      margin-top: 1.5rem;
      width: 100%;
    }
  }
`;

export default Login