import { ChangeBackgroundSidebar } from '@/components/sidebars/change-background/ChangeBackground'
import {
  DEFAULT_BACKGROUND_IDEA,
  MOCK_CARDS,
} from '@/mock'

const App: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
    <h1 className="text-2xl font-semibold text-foreground">Sidebar demo</h1>
    <p className="text-muted-foreground">
      Click the button below to open the sidebar.
    </p>
    <ChangeBackgroundSidebar
      backgroundIdea={DEFAULT_BACKGROUND_IDEA}
      triggerLabel="Open sidebar"
      cards={MOCK_CARDS}
    />
  </div>
)

export default App
