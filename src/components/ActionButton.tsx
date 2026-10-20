import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

export type ActionButtonAppearance = 'filled' | 'tinted' | 'plain'
export type ActionButtonDensity = 'comfortable' | 'compact'

export interface ActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'disabled'> {
  /** Visual emphasis. Default: 'filled' */
  appearance?: ActionButtonAppearance
  /** Padding density. Default: 'comfortable' */
  density?: ActionButtonDensity
  /** Renders the button as inactive (not clickable, 40% opacity). */
  isInactive?: boolean
  children: ReactNode
}

const appearanceStyle: Record<ActionButtonAppearance, CSSProperties> = {
  filled: { background: 'var(--color-brand)', color: 'var(--color-text-on-brand)' },
  tinted: { background: 'var(--palette-blue-300)', color: 'var(--color-text-default)' },
  plain: { background: 'transparent', color: 'var(--color-brand)' },
}

const densityStyle: Record<ActionButtonDensity, CSSProperties> = {
  comfortable: { padding: 'var(--space-sm) var(--space-md)' },
  compact: { padding: '4px var(--space-sm)' },
}

export function ActionButton({
  appearance = 'filled',
  density = 'comfortable',
  isInactive = false,
  type = 'button',
  style,
  children,
  ...rest
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className="ds-body-m"
      disabled={isInactive}
      aria-disabled={isInactive || undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: isInactive ? 'default' : 'pointer',
        opacity: isInactive ? 0.4 : 1,
        ...appearanceStyle[appearance],
        ...densityStyle[density],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  )
}

export default ActionButton
