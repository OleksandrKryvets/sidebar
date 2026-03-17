import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface IProgressCardProps {
  progress: number;
  timeLeft: string;
}

export const ProgressCard: React.FC<IProgressCardProps> = memo(({ progress, timeLeft }) => {
  const safeProgress = Math.min(100, Math.max(0, progress ?? 0))
  const radius = 31
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - safeProgress / 100)

  return (
    <div
      className={cn(
        'relative h-[198px] w-full overflow-hidden rounded-[12px] bg-[var(--gray-light)] relative cursor-pointer',
      )}
    >
      <div className="h-full w-full bg-[var(--primary-btn)] flex items-center justify-center relative">
        <div className="text-white font-medium-small absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {progress}%
        </div>
        <svg width="66" height="65" viewBox="0 0 66 65" fill="none">
          <circle
            opacity="0.2"
            cx="32.5"
            cy="32.5"
            r={radius}
            stroke="white"
            strokeWidth="3"
          />
          <circle
            cx="32.5"
            cy="32.5"
            r={radius}
            stroke="#5BF0A5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 32.5 32.5)"
          />
        </svg>

        <div className="text-white font-demibold-small text-[12px] absolute bottom-[16px] left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          {timeLeft}
        </div>
      </div>
    </div>
  )
})
