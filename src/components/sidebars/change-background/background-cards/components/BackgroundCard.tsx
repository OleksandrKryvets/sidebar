import { cn } from '@/lib/utils';
import React, { useCallback, memo } from 'react';

export type BackgroundCardType = {
  id: string
  progress?: number
  overlayImageSrc?: string
  frontImageSrc?: string
  timeLeft?: string;
}

interface IBackgroundCardProps {
  onClick: (card: BackgroundCardType) => void;
  isSelected: boolean;
  card: BackgroundCardType;
}

export const BackgroundCard: React.FC<IBackgroundCardProps> = memo(({ card, isSelected, onClick }) => {
  const { overlayImageSrc, id, frontImageSrc } = card;

  const onClickHandler = useCallback(() => {
    onClick(card);
  }, [card, onClick]);

  return (
    <div
      onClick={onClickHandler}
      className={cn(
        'group relative h-[198px] w-full overflow-hidden rounded-[12px] bg-[var(--gray-light)] relative cursor-pointer',
        isSelected && 'border-2 border-[var(--accent-border)]'
      )}
    >
      {!frontImageSrc && (
        <div className="absolute font-weight-[700] text-[10px] line-height-[100%] leading-none top-[5px] left-[5px] bg-[var(--background)] flex items-center justify-center rounded-[5px] px-[4px] pt-[6px] pb-[4px] border border-[var(--secondary-border)]">
          DEFAULT
        </div>
      )}
      {overlayImageSrc && (
        <img
          src={overlayImageSrc}
          alt={id}
          loading="eager"
          className="h-full w-full object-cover"
        />
      )}
      {frontImageSrc && (
        <img
          src={frontImageSrc}
          alt={id}
          loading="eager"
          className="h-full w-full object-cover absolute top-0 left-0"
        />
      )}
    </div>
  )
})
