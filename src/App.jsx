import { useState, useMemo, useEffect } from 'react';
import { useRecipes } from './hooks/useRecipes';
import { TimeInput } from './components/TimeInput';
import { StepList } from './components/StepList';
import { RecipeSelector } from './components/RecipeSelector';
import { ToolsSection } from './components/ToolsSection';
import { Footer } from './components/Footer';
import { IngredientsSection } from './components/IngredientsSection';
import {
  calculateTimesForward,
  calculateTimesBackward,
  formatDuration,
  getTotalDuration,
} from './utils/timeCalculations';

function App() {
  const {
    recipes,
    currentRecipe,
    currentRecipeName,
    setCurrentRecipeName,
    saveRecipe,
    deleteRecipe,
    updateCurrentRecipe,
    isPresetRecipe,
  } = useRecipes();

  const [anchorTime, setAnchorTime] = useState(() => {
    const now = new Date();
    now.setHours(8, 0, 0, 0);
    return now;
  });

  const [anchorType, setAnchorType] = useState(currentRecipe.anchorType || 'start');

  useEffect(() => {
    // Add theme stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${import.meta.env.BASE_URL}src/styles/tuscan-garden.css`;
    link.setAttribute('data-theme', 'tuscan-garden');
    document.head.appendChild(link);
  }, []);

  const stepsWithTimes = useMemo(() => {
    if (anchorType === 'start') {
      return calculateTimesForward(currentRecipe.steps, anchorTime);
    } else {
      return calculateTimesBackward(currentRecipe.steps, anchorTime);
    }
  }, [currentRecipe.steps, anchorTime, anchorType]);

  const totalDuration = getTotalDuration(currentRecipe.steps);

  const handleUpdateStep = (updatedStep) => {
    const newSteps = currentRecipe.steps.map((s) =>
      s.id === updatedStep.id ? updatedStep : s
    );
    updateCurrentRecipe({ steps: newSteps });
  };

  const handleDeleteStep = (stepId) => {
    const newSteps = currentRecipe.steps.filter((s) => s.id !== stepId);
    updateCurrentRecipe({ steps: newSteps });
  };

  const handleAddStep = (newStep) => {
    updateCurrentRecipe({ steps: [...currentRecipe.steps, newStep] });
  };

  const handleSaveNewRecipe = (name) => {
    saveRecipe(name, {
      name,
      type: 'custom',
      steps: currentRecipe.steps,
      anchorType,
    });
  };

  const handleAnchorTypeChange = (type) => {
    setAnchorType(type);
    updateCurrentRecipe({ anchorType: type });
  };

  // Get recipe type label
  const recipeTypeLabel = currentRecipe.type === 'sourdough' ? 'Sourdough' :
                          currentRecipe.type === 'yeasted' ? 'Yeasted' : 'Custom';

  return (
    <div className="app">
      <header className="app-header">
        <h1>Flour Hour</h1>
        <p className="total-time">Total time: {formatDuration(totalDuration)}</p>
        <a
          href="https://buymeacoffee.com/home_full_of_recipes"
          target="_blank"
          rel="noopener noreferrer"
          className="coffee-link"
        >
          ☕ Buy me a coffee
        </a>
      </header>

      <RecipeSelector
        recipes={recipes}
        currentRecipeName={currentRecipeName}
        onSelect={setCurrentRecipeName}
        onSaveNew={handleSaveNewRecipe}
        onDelete={deleteRecipe}
        isPresetRecipe={isPresetRecipe}
      />

      <h2 className="recipe-title">{currentRecipeName}</h2>
      <p className="recipe-type">{recipeTypeLabel}</p>

      <IngredientsSection ingredients={currentRecipe.ingredients} />

      <TimeInput
        anchorType={anchorType}
        anchorTime={anchorTime}
        onAnchorTypeChange={handleAnchorTypeChange}
        onAnchorTimeChange={setAnchorTime}
      />

      <StepList
        steps={stepsWithTimes}
        onUpdateStep={handleUpdateStep}
        onDeleteStep={handleDeleteStep}
        onAddStep={handleAddStep}
      />

      <ToolsSection />

      <Footer />
    </div>
  );
}

export default App;
