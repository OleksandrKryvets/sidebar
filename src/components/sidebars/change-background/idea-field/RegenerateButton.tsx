import React, { memo } from 'react'
import sparkleIcon from '@/assets/icons/sparkle.svg'
import { Button } from '@/components/ui/button'


interface IRegenerateButtonProps {
  label?: string;
  onRegenerate?: () => void;
}

export const RegenerateButton: React.FC<IRegenerateButtonProps> = memo(({
  label = 'Regenerate',
  onRegenerate,
}) => (
  <div className="absolute bottom-[12px] left-[12px] ">
    <Button
      type="button"
      variant="ghost"
      aria-label="Regenerate"
      className=" font-demibold h-[34px] pl-[7px] pr-[12px] py-[7px]"
      onClick={onRegenerate}
    >
      <img src={sparkleIcon} alt="" className="h-[18px] w-[18px]" aria-hidden />
      {label}
    </Button>
  </div>
))

