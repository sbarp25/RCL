import React, { useState } from 'react';

const ValidationComponent = ({ children }) => {
  const [errors, setErrors] = useState({});

  const validationRules = {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid email format',
    },
    phone: {
      regex: /^[0-9]{10}$/,
      message: 'Phone number must be 10 digits',
    },
    username: {
      regex: /^[a-zA-Z0-9_]{3,20}$/,
      message: 'Username must be 3-20 characters long',
    },
    subject: {
      regex: /^.{5,100}$/,
      message: 'Subject must be between 5 and 100 characters',
    },
    message: {
      regex: /^.{10,500}$/,
      message: 'Message must be between 10 and 500 characters',
    },
  };
  

  const validateField = (id, value) => {
    if (id in validationRules) {
      const { regex, message } = validationRules[id];
      if (!regex.test(value)) {
        return message;
      }
    }
    return '';
  };

  const handleInputChange = e => {
    const { id, value } = e.target;
    const errorMessage = validateField(id, value);

    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: errorMessage,
    }));
  };

  const handleKeyDown = (e, id) => {
    if (id === 'phone') {
      const isNumberKey =
        (e.key >= '0' && e.key <= '9') ||
        e.key === 'Backspace' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight';
      if (!isNumberKey) {
        e.preventDefault();
      }
    }
  };

  const renderChildrenWithProps = children =>
    React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.props.id && child.type === 'input') {
          return (
            <div style={{ marginBottom: '1rem' }}>
              {React.cloneElement(child, {
                onChange: e => {
                  handleInputChange(e);
                  child.props.onChange?.(e);
                },
                onKeyDown: e => handleKeyDown(e, child.props.id),
              })}
              {errors[child.props.id] && (
                <div
                  style={{
                    color: 'red',
                    fontSize: '0.875rem',
                    marginTop: '0.25rem',
                  }}
                >
                  {errors[child.props.id]}
                </div>
              )}
            </div>
          );
        }
        if (child.props.children) {
          return React.cloneElement(child, {
            children: renderChildrenWithProps(child.props.children),
          });
        }
      }
      return child;
    });

  return <div>{renderChildrenWithProps(children)}</div>;
};

export default ValidationComponent;