import { AnimationOrchestrator } from './components/AnimationOrchestrator';

function App() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-pink-100 via-lavender-100 to-pink-200">
      <AnimationOrchestrator />
    </div>
  );
}

export default App;
