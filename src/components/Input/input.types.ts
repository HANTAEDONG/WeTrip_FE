import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'sub'
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
