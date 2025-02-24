interface ProfileBlockProps {
  children: React.ReactNode
  className?: string
}

export function ProfileBlock({ children, className = "" }: ProfileBlockProps) {
  return (
    <div className={`backdrop-blur-md bg-white/20 p-6 rounded-lg border border-white/30 ${className}`}>
      {children}
    </div>
  )
}