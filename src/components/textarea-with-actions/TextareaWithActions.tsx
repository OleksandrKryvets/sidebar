import React, { memo } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { UndoRedoButtons } from './UndoRedoButtons'

type ITextareaWithActionsProps = {
  id?: string
  label?: string
  value: string
  onChange: (value: string) => void
  onUndo?: () => void
  onRedo?: () => void
  placeholder?: string
  rows?: number
  className?: string
  textareaClassName?: string
  children?: React.ReactNode
  hasDefaultActions?: boolean
}

export const TextareaWithActions: React.FC<ITextareaWithActionsProps> = memo(({
  id = 'textarea-with-actions',
  label,
  value,
  onChange,
  onUndo,
  onRedo,
  placeholder = 'Describe your idea...',
  rows = 4,
  className,
  children: AdditionalActions,
  hasDefaultActions = true,
}) => (
  <div className={cn('flex flex-col gap-[12px]', className)}>
    {label ? (
      <label
        className="font-demibold"
        htmlFor={id}
      >
        {label}
      </label>
    ) : null}
    <div className="relative">
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
      />
      {AdditionalActions}

      {hasDefaultActions ? (
        <UndoRedoButtons onUndo={onUndo} onRedo={onRedo} />
      ) : null}
    </div>
  </div>
))
