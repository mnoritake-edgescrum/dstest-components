import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma component property "Label" */
  label?: string
}

/**
 * Primary button.
 * Figma: DS-test / Library / Button
 * Fill: color/brand, text: color/text/on-brand (Body/M),
 * padding: space/md x space/sm, radius: radius/md.
 */
export function Button({ label = 'Button', style, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className="ds-body-m"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-sm) var(--space-md)',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        background: 'var(--color-brand)',
        color: 'var(--color-text-on-brand)',
        cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {label}
    </button>
  )
}

export default Button
