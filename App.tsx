
import React, { useState, useEffect } from 'react';
import { SceneId } from './types';
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';
import Finale from './components/Finale';

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<SceneId>(SceneId.ACT_1);
  const [transitioning, setTransitioning] = useState(false);

  const nextScene = (scene: SceneId) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentScene(scene);
      setTransitioning(false);
    }, 500);
  };

  const restartApp = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentScene(SceneId.ACT_1);
      setTransitioning(false);
    }, 500);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-sky-50 flex items-center justify-center">
      <div 
        className={`w-full h-full transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {currentScene === SceneId.ACT_1 && (
          <Scene1 onComplete={() => nextScene(SceneId.ACT_2)} />
        )}
        {currentScene === SceneId.ACT_2 && (
          <Scene2 onComplete={() => nextScene(SceneId.ACT_3)} />
        )}
        {currentScene === SceneId.ACT_3 && (
          <Scene3 onComplete={() => nextScene(SceneId.FINALE)} />
        )}
        {currentScene === SceneId.FINALE && (
          <Finale onRestart={restartApp} />
        )}
      </div>

      {/* Global Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
    </main>
  );
};

export default App;
