import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../theme/theme';

export const Input = ({
  name,
  text,
  type,
  value,
  onChange,
  onBlur,
  divClassName,
  InputClassName,
}) => {
  return (
    <>
      <Wrapper>
        <div className={divClassName}>
          <input
            name={name}
            placeholder=" "
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={InputClassName}
          />
          <label for="" className="label">{text}</label>
        </div>
      </Wrapper>
    </>
  );
};

export const Textarea = ({
  name,
  text,
  type,
  cols,
  rows,
  value,
  onChange,
  onBlur,
  divClassName,
  InputClassName,
}) => {
  return (
    <>
      <Wrapper>
        <div className={divClassName}>
          <textarea
            name={name}
            placeholder=" "
            type={type}
            cols={cols}
            rows={rows}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            className={InputClassName}
          />
          <label for="" className="label">{text}</label>
        </div>
      </Wrapper>
    </>
  );
};
// divClassName = 'div' y 'div-textarea'
// InputClassName = 'input' y 'input textarea'

const Wrapper = styled.div`
    /*===== FORM =====*/
    .div {
        position: relative;
        height: 45px;
        width: 342px;
        margin-bottom: 20px;
    }

    .div-textarea {
        position: relative;
        height: 45px;
        width: 342px;
        margin-bottom: 75px!important;
    }

    .input, .textarea {
        position: absolute;
        top: 0;
        left: 0;
        width: 310px;
        height: 5px;
        font-size: ${fontSize.fontFooter};
        border: 1px solid #DADCE0;
        border-radius: 5px;
        outline: none;
        padding: 15px;
        background: none;
        z-index: 1;
    }

    .label {
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 0 .25rem;
        background-color: #fff;
        color: #80868B;
        font-size: 14px;
        transition: .3s;
        display: flex;
        align-items: center;
    }

    /*Input focus move up label*/
    .input:focus+.label, .textarea:focus+.label {
        top: -.6rem;
        left: .8rem;
        color: #1A73E8;
        font-size: 10pt;
        font-weight: 300;
        z-index: 10;
    }

    /*Input focus sticky top label*/
    .input:not(:placeholder-shown).input:not(:focus)+.label,
    .textarea:not(:placeholder-shown).textarea:not(:focus)+.label {
        top: -.6rem;
        left: .8rem;
        font-size: 10pt;
        font-weight: 300;
        z-index: 10;
    }

    /*Input focus*/
    .input:focus, .textarea:focus {
        border: 1.5px solid #1A73E8;
    }

    /* textarea */
    .textarea {
        min-height: 60px;
        max-height: 60px;
        min-width: 310px;
        max-width: 310px;
    }

    
    @media(max-width: 490px){
        .input, .textarea{
            width: 209px;
            min-width: 209px;
            max-width: 209px;
        }

        .div{
            width: 241px;
        }
    }
`;

const InputMessage = styled.p`
    text-align-last: left;
    font-size: 10pt!important;
    padding-top: 40px!important;
    padding-left: 15px!important;
    color: red;
`;

const TextareaMessage = styled.p`
    text-align-last: left;
    font-size: 10pt!important;
    padding-top: 94px!important;
    padding-left: 15px!important;
    color: red;
`;
