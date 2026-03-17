import React, { memo } from 'react';
import { TextareaWithActions } from '@/components/textarea-with-actions'
import { RegenerateButton } from './RegenerateButton'

interface IIdeaFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
  onRegenerate?: () => void
  onUndo: () => void
  onRedo: () => void
}

export const IdeaField: React.FC<IIdeaFieldProps> = memo(({
  label = 'Background idea',
  value,
  onChange,
  onRegenerate,
  onUndo,
  onRedo,
}) => {
  return (
    <TextareaWithActions
      id="background-idea"
      label={label}
      value={value}
      onChange={onChange}
      onUndo={onUndo}
      onRedo={onRedo}
      placeholder="Describe your background idea..."
    >
      {onRegenerate && <RegenerateButton onRegenerate={onRegenerate} />}
    </TextareaWithActions>
  )
})
