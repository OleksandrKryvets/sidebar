import undoIcon from '@/assets/icons/undo.svg'
import redoIcon from '@/assets/icons/redo.svg'
import { Button } from '@/components/ui/button'

type Props = {
  onUndo?: () => void
  onRedo?: () => void
}


export function UndoRedoButtons({ onUndo, onRedo }: Props) {
  return (
    <div className="absolute bottom-[12px] right-[16px] flex gap-[8px] opacity-100">
      <Button
        type="button"
        variant="ghost"
        aria-label="Undo"
        className="h-[34px] w-[34px]"
        onClick={onUndo}
      >
        <img src={undoIcon} alt="" className="block h-[20px] w-[20px]" aria-hidden />
      </Button>
      <Button
        type="button"
        variant="ghost"
        aria-label="Redo"
        className="h-[34px] w-[34px]"
        onClick={onRedo}
      >
        <img src={redoIcon} alt="" className="block h-[20px] w-[20px]" aria-hidden />
      </Button>
    </div>
  )
}
