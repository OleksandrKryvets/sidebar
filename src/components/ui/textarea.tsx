import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'flex h-[195px] w-full max-w-full resize-none rounded-[12px] border border-[var(--textarea-border)]',
      'bg-[var(--textarea-background)] p-[16px] text-sm text-[var(--textarea-color)] m-0',
      'placeholder:text-[var(--textarea-placeholder-color)] placeholder:opacity-50 focus-visible:outline-none',
      className
    )}
    ref={ref}
    {...props}
  />
))
Textarea.displayName = 'Textarea'

export { Textarea }
