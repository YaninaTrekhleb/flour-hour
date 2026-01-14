import { useState, useEffect } from 'react';
import { PRESET_RECIPES } from '../data/recipes';

const STORAGE_KEY = 'sourdough-recipes';
const VERSION_KEY = 'sourdough-recipes-version';
const CURRENT_VERSION = 4; // Increment this when recipes change

export function useRecipes() {
  const [recipes, setRecipes] = useState(() => {
    const storedVersion = localStorage.getItem(VERSION_KEY);
    const stored = localStorage.getItem(STORAGE_KEY);

    // If version changed, reset to preset recipes
    if (storedVersion !== String(CURRENT_VERSION)) {
      localStorage.setItem(VERSION_KEY, String(CURRENT_VERSION));
      return { ...PRESET_RECIPES };
    }

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { ...PRESET_RECIPES };
      }
    }
    return { ...PRESET_RECIPES };
  });

  const [currentRecipeName, setCurrentRecipeName] = useState('Classic Sourdough');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const currentRecipe = recipes[currentRecipeName] || PRESET_RECIPES['Classic Sourdough'];

  const saveRecipe = (name, recipe) => {
    setRecipes(prev => ({
      ...prev,
      [name]: recipe,
    }));
    setCurrentRecipeName(name);
  };

  const deleteRecipe = (name) => {
    // Don't allow deleting preset recipes
    if (PRESET_RECIPES[name]) return;
    setRecipes(prev => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
    if (currentRecipeName === name) {
      setCurrentRecipeName('Classic Sourdough');
    }
  };

  const updateCurrentRecipe = (updates) => {
    setRecipes(prev => ({
      ...prev,
      [currentRecipeName]: {
        ...prev[currentRecipeName],
        ...updates,
      },
    }));
  };

  const isPresetRecipe = (name) => !!PRESET_RECIPES[name];

  return {
    recipes,
    currentRecipe,
    currentRecipeName,
    setCurrentRecipeName,
    saveRecipe,
    deleteRecipe,
    updateCurrentRecipe,
    isPresetRecipe,
  };
}
