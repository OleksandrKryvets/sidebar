import React, { memo } from 'react';
import { BackgroundCard } from './components/BackgroundCard'
import type { BackgroundCardType } from './components/BackgroundCard'
import { ProgressCard } from './components/ProgressCard'

interface IBackgroundCardsProps {
  title?: string
  cards: BackgroundCardType[]
  selectedCard: BackgroundCardType | null
  onSelectCard: (card: BackgroundCardType) => void
}

export const BackgroundCards: React.FC<IBackgroundCardsProps> =
  memo(({ title = 'Your backgrounds', cards, selectedCard, onSelectCard }) => (
    <div className="mt-[16px]">
      <label className="font-demibold">{title}</label>
      <div className="mt-[10px] grid grid-cols-3 gap-[12px]">
        {cards.map((card) => (
          card.progress && card.progress >= 0 && card.timeLeft ? (
            <ProgressCard key={card.id} progress={card.progress} timeLeft={card.timeLeft} />
          ) : (
            <BackgroundCard key={card.id} card={card} isSelected={selectedCard?.id === card.id} onClick={onSelectCard} />
          )
        ))}
      </div>
    </div>
  ))
