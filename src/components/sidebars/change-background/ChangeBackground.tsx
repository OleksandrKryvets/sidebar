import React, { useState, memo, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import closeIcon from '@/assets/icons/close.svg'
import starIcon from '@/assets/icons/star.svg'
import type { BackgroundCardType } from './background-cards/components/BackgroundCard'
import { BackgroundCards } from './background-cards/BackgroundCards'
import { IdeaField } from './idea-field/IdeaField'

interface IChangeBackgroundSidebarProps {
  triggerLabel: string
  backgroundIdea: string
  cards: BackgroundCardType[]
}

export const ChangeBackgroundSidebar: React.FC<IChangeBackgroundSidebarProps> = memo(({
  triggerLabel,
  backgroundIdea,
  cards,
}) => {
  const [idea, setIdea] = useState<string>(backgroundIdea)
  const [selectedCard, setSelectedCard] = useState<BackgroundCardType | null>(cards[0])

  useEffect(() => {
    const firstReadyCard = cards.find((card) => card.overlayImageSrc);

    if (firstReadyCard) {
      setSelectedCard(firstReadyCard)
    }
  }, [cards])

  const onSelectCard = useCallback((card: BackgroundCardType) => {
    setSelectedCard(card)
  }, [])

  const onIdeaChange = useCallback((value: string) => {
    setIdea(value)
  }, [])

  const onUndo = useCallback(() => { }, [])
  const onRedo = useCallback(() => { }, [])
  const onRegenerate = useCallback(() => { }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="light" size="lg">
          {triggerLabel}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex min-w-[400px] max-w-[400px] max-w-full flex-col overflow-y-auto border-l"
        showCloseButton={false}
      >
        <SheetHeader className="space-y-0 text-left">
          <div className="flex items-center justify-between gap-4">
            <SheetTitle asChild>
              <h2>Change background</h2>
            </SheetTitle>
            <SheetClose asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center bg-background transition-colors"
                aria-label="Close"
              >
                <img
                  src={closeIcon}
                  alt="close icon"
                  className="h-[24px] w-[24px]"
                  aria-hidden
                />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="flex flex-1 flex-col gap-[24px]">
          <IdeaField
            value={idea}
            onChange={onIdeaChange}
            onUndo={onUndo}
            onRedo={onRedo}
            onRegenerate={onRegenerate}
          />

          <Button variant="primary" className="w-full" size="lg">
            <img src={starIcon} alt="" className="h-4 w-4" aria-hidden />
            Generate BG for 1 credit
          </Button>

          <BackgroundCards cards={cards} selectedCard={selectedCard} onSelectCard={onSelectCard} />
        </div>
      </SheetContent>
    </Sheet>
  )
})
