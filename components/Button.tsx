import { ReactChild } from 'react'

interface IButtonProps {
  children: ReactChild
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          text-align: center;
          font-size: 21px;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 5px;
          background-color: #000;
          width: 170px;
          height: 55px;
        }
        button:hover {
          cursor: pointer;
          color: #000;
          background-color: #fff;
          border: 1px solid #000;
        }
      `}</style>
    </button>
  )
}

export default Button
