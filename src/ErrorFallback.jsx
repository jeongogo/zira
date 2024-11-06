import React from "react";
import styled from "styled-components";

const ErrorFallback = ({ error, errorInfo }) => {
  return (
    <Container>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        <summary>Error Details:</summary>
        {error && (
          <>
            <p><strong>Error Message:</strong> {error.message}</p>
            <p><strong>Error Stack:</strong></p>
            <pre>{error.stack}</pre>
          </>
        )}
        {errorInfo && (
          <>
            <p><strong>Component Stack:</strong></p>
            <pre>{errorInfo.componentStack}</pre>
          </>
        )}
      </details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  h1 {
    max-width: 30rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text-gray);
    text-align: center;
  }
  .retry {
    margin-top: 1.2rem;
    img {
      width: 5rem;
    }
  }
  .close {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    height: 3.7rem;
    width: 20rem;
    color: white;
    background-color: #999;
    border-radius: 0.7rem;
  }
`;

export default ErrorFallback;