import { useState } from 'react';
import { getRecipesByType, PRESET_RECIPES } from '../data/recipes';

export function RecipeSelector({
  recipes,
  currentRecipeName,
  onSelect,
  onSaveNew,
  onDelete,
  isPresetRecipe,
}) {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [newRecipeName, setNewRecipeName] = useState('');

  const { sourdough, yeasted } = getRecipesByType();

  // Get custom recipes (user-created)
  const customRecipes = Object.keys(recipes).filter(name => !PRESET_RECIPES[name]);

  const handleSave = () => {
    if (newRecipeName.trim() && !recipes[newRecipeName.trim()]) {
      onSaveNew(newRecipeName.trim());
      setNewRecipeName('');
      setShowSaveDialog(false);
    }
  };

  return (
    <div className="recipe-selector">
      <div className="recipe-controls">
        <select
          value={currentRecipeName}
          onChange={(e) => onSelect(e.target.value)}
          className="recipe-dropdown"
        >
          <optgroup label="Sourdough">
            {sourdough.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Yeasted">
            {yeasted.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </optgroup>
          {customRecipes.length > 0 && (
            <optgroup label="My Recipes">
              {customRecipes.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </optgroup>
          )}
        </select>

        <button
          onClick={() => setShowSaveDialog(true)}
          className="btn-save-recipe"
        >
          Save as New
        </button>

        {!isPresetRecipe(currentRecipeName) && (
          <button
            onClick={() => onDelete(currentRecipeName)}
            className="btn-delete-recipe"
          >
            Delete
          </button>
        )}
      </div>

      {showSaveDialog && (
        <div className="save-dialog">
          <input
            type="text"
            value={newRecipeName}
            onChange={(e) => setNewRecipeName(e.target.value)}
            placeholder="Recipe name"
            className="recipe-name-input"
          />
          <button onClick={handleSave} className="btn-save">Save</button>
          <button onClick={() => setShowSaveDialog(false)} className="btn-cancel">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
