// All preset recipes - Sourdough and Yeasted breads

export const PRESET_RECIPES = {
  // ============ SOURDOUGH RECIPES ============
  'Classic Sourdough': {
    name: 'Classic Sourdough',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '350g bread flour',
      '250g water (room temp)',
      '8g salt',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 300, details: 'Mix equal parts flour and water with your starter. Let it double in size before using.' },
      { id: 2, name: 'Mix dough', durationMinutes: 30, details: 'Combine starter, water, and flour until no dry flour remains. Do not add salt yet. Cover with a damp towel and rest.' },
      { id: 3, name: 'Add salt', durationMinutes: 30, details: 'Sprinkle salt over dough. Wet your hand and pinch/squeeze to mix thoroughly (2-3 min). Cover and rest.' },
      { id: 4, name: 'Fold set 1', durationMinutes: 30, details: 'Grab the dough on one side, pull it up high, and fold it over the center. Turn the bowl and repeat on all 4 sides. Cover & wait.' },
      { id: 5, name: 'Fold set 2', durationMinutes: 30, details: 'Repeat the stretching and folding on all 4 sides. Cover & wait.' },
      { id: 6, name: 'Fold set 3', durationMinutes: 0, details: 'Final set of stretches on all 4 sides. Cover the bowl. This completes strength building.' },
      { id: 7, name: 'Bulk ferment', durationMinutes: 270, details: 'Leave covered on counter. Done when dough has grown 50-75%, looks bubbly, and jiggles like Jell-O. At 68-70°F takes ~4.5 hrs.' },
      { id: 8, name: 'Shape & fridge', durationMinutes: 600, details: 'Fold sides into center like envelope, flip smooth-side up, pull toward you to tighten. Place in floured basket seam-up. Refrigerate overnight.' },
      { id: 9, name: 'Bake', durationMinutes: 65, details: 'Preheat Dutch oven at 450°F for 45 min. Score dough. Bake 20 min with lid, 20-25 min without until golden. Cool 1 hour before cutting.' },
    ],
    anchorType: 'start',
  },

  'Same-Day Sourdough': {
    name: 'Same-Day Sourdough',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '350g bread flour',
      '250g water (room temp)',
      '8g salt',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter in the morning, let double.' },
      { id: 2, name: 'Mix dough', durationMinutes: 30, details: 'Combine flour and water, autolyse, then add starter and salt.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 240, details: 'Stretch and fold every 30-45 min.' },
      { id: 4, name: 'Pre-shape', durationMinutes: 20, details: 'Shape into round, bench rest.' },
      { id: 5, name: 'Final shape', durationMinutes: 10, details: 'Shape and place in banneton.' },
      { id: 6, name: 'Warm proof', durationMinutes: 120, details: 'Room temperature proof until puffy.' },
      { id: 7, name: 'Bake', durationMinutes: 45, details: '250°C covered 20 min, uncovered 25 min.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Focaccia': {
    name: 'Sourdough Focaccia',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '500g bread flour',
      '400g water (room temp)',
      '10g salt',
      '50ml olive oil',
      'Flaky sea salt for topping',
      'Fresh rosemary for topping',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter, let double.' },
      { id: 2, name: 'Mix dough', durationMinutes: 10, details: 'Combine flour, water, starter, salt, olive oil.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 240, details: 'Stretch and fold every 45 min.' },
      { id: 4, name: 'Transfer to pan', durationMinutes: 10, details: 'Pour into oiled baking pan, spread gently.' },
      { id: 5, name: 'Cold proof', durationMinutes: 720, details: 'Cover and refrigerate overnight.' },
      { id: 6, name: 'Warm up', durationMinutes: 60, details: 'Remove from fridge, let rise at room temp.' },
      { id: 7, name: 'Dimple & top', durationMinutes: 10, details: 'Press fingers into dough, add olive oil, salt, rosemary.' },
      { id: 8, name: 'Bake', durationMinutes: 25, details: '220°C until golden.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Bagels': {
    name: 'Sourdough Bagels',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '500g bread flour',
      '250g water (room temp)',
      '10g salt',
      '30g honey or malt syrup',
      '1 tbsp malt syrup for boiling water',
      'Seeds or seasonings for topping',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter, let double.' },
      { id: 2, name: 'Mix dough', durationMinutes: 15, details: 'Combine flour, water, starter, salt, malt syrup.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 180, details: 'Let rise, fold once halfway.' },
      { id: 4, name: 'Divide & shape', durationMinutes: 20, details: 'Divide into portions, shape into rings.' },
      { id: 5, name: 'Cold proof', durationMinutes: 720, details: 'Place on tray, cover, refrigerate overnight.' },
      { id: 6, name: 'Prep boiling water', durationMinutes: 15, details: 'Boil water with malt syrup or honey.' },
      { id: 7, name: 'Boil bagels', durationMinutes: 20, details: 'Boil each side 60 seconds.' },
      { id: 8, name: 'Add toppings', durationMinutes: 5, details: 'Dip in seeds or seasonings.' },
      { id: 9, name: 'Bake', durationMinutes: 25, details: '220°C until deep golden.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Pizza Dough': {
    name: 'Sourdough Pizza Dough',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '500g bread flour or 00 flour',
      '325g water (room temp)',
      '10g salt',
      '15ml olive oil',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter, let double.' },
      { id: 2, name: 'Mix dough', durationMinutes: 10, details: 'Combine flour, water, starter, salt, olive oil.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 180, details: 'Stretch and fold every 45 min.' },
      { id: 4, name: 'Divide into balls', durationMinutes: 15, details: 'Portion into individual pizza balls.' },
      { id: 5, name: 'Cold proof', durationMinutes: 1440, details: 'Refrigerate 24 hrs for flavor development.' },
      { id: 6, name: 'Warm up', durationMinutes: 60, details: 'Remove from fridge, let relax at room temp.' },
      { id: 7, name: 'Stretch & top', durationMinutes: 15, details: 'Stretch dough, add sauce and toppings.' },
      { id: 8, name: 'Bake', durationMinutes: 10, details: 'Highest oven temp or pizza oven until charred.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Discard Pancakes': {
    name: 'Sourdough Discard Pancakes',
    type: 'sourdough',
    ingredients: [
      '150g sourdough discard',
      '100g all-purpose flour',
      '1 large egg',
      '120ml milk',
      '20g sugar',
      '3g baking soda',
      '2g salt',
      '30g melted butter',
    ],
    steps: [
      { id: 1, name: 'Mix batter', durationMinutes: 5, details: 'Combine discard, flour, egg, milk, sugar, baking soda.' },
      { id: 2, name: 'Rest batter', durationMinutes: 10, details: 'Let sit to activate baking soda.' },
      { id: 3, name: 'Cook pancakes', durationMinutes: 15, details: 'Cook on medium griddle, flip when bubbles form.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Discard Waffles': {
    name: 'Sourdough Discard Waffles',
    type: 'sourdough',
    ingredients: [
      '150g sourdough discard',
      '100g all-purpose flour',
      '1 large egg',
      '120ml milk',
      '30g sugar',
      '3g baking soda',
      '2g salt',
      '60g melted butter',
    ],
    steps: [
      { id: 1, name: 'Mix batter', durationMinutes: 5, details: 'Combine discard, flour, egg, melted butter, milk, sugar, baking soda.' },
      { id: 2, name: 'Rest batter', durationMinutes: 10, details: 'Let sit while waffle iron heats.' },
      { id: 3, name: 'Cook waffles', durationMinutes: 15, details: 'Cook in waffle iron until golden and crisp.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Cinnamon Rolls': {
    name: 'Sourdough Cinnamon Rolls',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '400g all-purpose flour',
      '120ml whole milk (warm)',
      '1 large egg',
      '60g sugar',
      '60g unsalted butter (soft)',
      '5g salt',
      '80g unsalted butter (soft, for filling)',
      '150g brown sugar (for filling)',
      '15g cinnamon (for filling)',
      '120g cream cheese (for glaze)',
      '60g unsalted butter (soft, for glaze)',
      '200g powdered sugar (for glaze)',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter, let double.' },
      { id: 2, name: 'Mix enriched dough', durationMinutes: 15, details: 'Combine flour, starter, butter, sugar, egg, milk, salt.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 180, details: 'Let rise until doubled.' },
      { id: 4, name: 'Roll out', durationMinutes: 15, details: 'Roll dough into large rectangle.' },
      { id: 5, name: 'Add filling', durationMinutes: 10, details: 'Spread butter, sugar, cinnamon.' },
      { id: 6, name: 'Roll & cut', durationMinutes: 10, details: 'Roll into log, cut into portions.' },
      { id: 7, name: 'Cold proof', durationMinutes: 720, details: 'Place in pan, cover, refrigerate overnight.' },
      { id: 8, name: 'Warm up', durationMinutes: 60, details: 'Remove from fridge, let rise at room temp.' },
      { id: 9, name: 'Bake', durationMinutes: 30, details: '180°C until golden.' },
      { id: 10, name: 'Glaze', durationMinutes: 5, details: 'Top with cream cheese glaze.' },
    ],
    anchorType: 'start',
  },

  'Sourdough Sandwich Loaf': {
    name: 'Sourdough Sandwich Loaf',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '450g bread flour',
      '280g water (room temp)',
      '30g unsalted butter (soft)',
      '20g honey',
      '9g salt',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter, let double.' },
      { id: 2, name: 'Mix dough', durationMinutes: 15, details: 'Combine flour, water, starter, salt, butter.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 240, details: 'Stretch and fold every 45 min.' },
      { id: 4, name: 'Shape into pan', durationMinutes: 15, details: 'Shape and place in greased loaf tin.' },
      { id: 5, name: 'Cold proof', durationMinutes: 720, details: 'Cover and refrigerate overnight.' },
      { id: 6, name: 'Warm up', durationMinutes: 60, details: 'Remove from fridge, let rise to top of pan.' },
      { id: 7, name: 'Bake', durationMinutes: 40, details: '190°C until deep golden and hollow sounding.' },
      { id: 8, name: 'Cool', durationMinutes: 30, details: 'Remove from pan, cool on rack before slicing.' },
    ],
    anchorType: 'start',
  },

  'Sourdough English Muffins': {
    name: 'Sourdough English Muffins',
    type: 'sourdough',
    ingredients: [
      '100g active sourdough starter',
      '300g all-purpose flour',
      '120ml whole milk',
      '30g unsalted butter (soft)',
      '15g sugar',
      '5g salt',
      'Cornmeal for dusting',
    ],
    steps: [
      { id: 1, name: 'Feed starter', durationMinutes: 240, details: 'Feed starter, let double.' },
      { id: 2, name: 'Mix dough', durationMinutes: 15, details: 'Combine flour, starter, milk, butter, sugar, salt.' },
      { id: 3, name: 'Bulk ferment', durationMinutes: 180, details: 'Let rise until doubled.' },
      { id: 4, name: 'Roll & cut', durationMinutes: 15, details: 'Roll out, cut rounds with cutter.' },
      { id: 5, name: 'Rest on cornmeal', durationMinutes: 30, details: 'Place on cornmeal-dusted tray, dust tops.' },
      { id: 6, name: 'Cold proof', durationMinutes: 480, details: 'Cover and refrigerate overnight.' },
      { id: 7, name: 'Warm up', durationMinutes: 30, details: 'Remove from fridge, let come to room temp.' },
      { id: 8, name: 'Cook on griddle', durationMinutes: 20, details: 'Medium-low heat, 7-8 min per side.' },
      { id: 9, name: 'Cool', durationMinutes: 10, details: 'Let cool before splitting with fork.' },
    ],
    anchorType: 'start',
  },

  // ============ YEASTED RECIPES ============
  'Simple White Bread': {
    name: 'Simple White Bread',
    type: 'yeasted',
    ingredients: [
      '500g all-purpose flour',
      '300ml warm water',
      '7g instant yeast',
      '10g salt',
      '30g sugar',
      '30g unsalted butter (soft)',
    ],
    steps: [
      { id: 1, name: 'Mix & knead', durationMinutes: 15, details: 'Combine flour, water, yeast, salt, sugar, butter; knead until smooth.' },
      { id: 2, name: 'First rise', durationMinutes: 90, details: 'Cover and let double in warm spot.' },
      { id: 3, name: 'Punch down & shape', durationMinutes: 10, details: 'Deflate dough, shape into loaf.' },
      { id: 4, name: 'Second rise', durationMinutes: 60, details: 'Let rise in pan until doubled.' },
      { id: 5, name: 'Bake', durationMinutes: 35, details: '190°C until golden and hollow sounding.' },
      { id: 6, name: 'Cool', durationMinutes: 30, details: 'Cool on rack before slicing.' },
    ],
    anchorType: 'start',
  },

  'Overnight No-Knead Bread': {
    name: 'Overnight No-Knead Bread',
    type: 'yeasted',
    ingredients: [
      '400g bread flour',
      '300g water (room temp)',
      '2g instant yeast',
      '8g salt',
    ],
    steps: [
      { id: 1, name: 'Mix dough', durationMinutes: 10, details: 'Combine flour, water, yeast, salt; stir until shaggy.' },
      { id: 2, name: 'Overnight rise', durationMinutes: 720, details: 'Cover and let rise at room temp 12 hrs.' },
      { id: 3, name: 'Shape', durationMinutes: 10, details: 'Turn out, fold into ball, place on parchment.' },
      { id: 4, name: 'Rest', durationMinutes: 60, details: 'Let rest while oven preheats.' },
      { id: 5, name: 'Preheat Dutch oven', durationMinutes: 30, details: 'Heat Dutch oven at 230°C.' },
      { id: 6, name: 'Bake covered', durationMinutes: 30, details: 'Bake with lid on for steam.' },
      { id: 7, name: 'Bake uncovered', durationMinutes: 15, details: 'Remove lid, bake until deep brown.' },
      { id: 8, name: 'Cool', durationMinutes: 15, details: 'Cool on rack before slicing.' },
    ],
    anchorType: 'start',
  },

  'French Baguettes': {
    name: 'French Baguettes',
    type: 'yeasted',
    ingredients: [
      '500g bread flour',
      '350g water (room temp)',
      '7g instant yeast',
      '10g salt',
    ],
    steps: [
      { id: 1, name: 'Mix dough', durationMinutes: 15, details: 'Combine flour, water, yeast, salt; knead until smooth.' },
      { id: 2, name: 'First rise', durationMinutes: 90, details: 'Cover and let double.' },
      { id: 3, name: 'Divide', durationMinutes: 10, details: 'Cut into 3-4 portions.' },
      { id: 4, name: 'Pre-shape', durationMinutes: 10, details: 'Shape into rough logs, rest 15 min.' },
      { id: 5, name: 'Final shape', durationMinutes: 15, details: 'Roll and stretch into baguette shape.' },
      { id: 6, name: 'Proof', durationMinutes: 45, details: 'Let rise on couche or parchment.' },
      { id: 7, name: 'Score', durationMinutes: 5, details: 'Slash tops with blade at shallow angle.' },
      { id: 8, name: 'Bake with steam', durationMinutes: 25, details: '230°C with steam for first 10 min.' },
    ],
    anchorType: 'start',
  },

  'Brioche': {
    name: 'Brioche',
    type: 'yeasted',
    ingredients: [
      '500g all-purpose flour',
      '10g instant yeast',
      '50g sugar',
      '10g salt',
      '6 large eggs',
      '250g unsalted butter (soft)',
      '60ml whole milk',
    ],
    steps: [
      { id: 1, name: 'Mix dough', durationMinutes: 20, details: 'Combine flour, yeast, eggs, sugar, salt; add butter gradually.' },
      { id: 2, name: 'First rise', durationMinutes: 120, details: 'Let double at room temp.' },
      { id: 3, name: 'Cold proof', durationMinutes: 480, details: 'Refrigerate overnight for easier handling.' },
      { id: 4, name: 'Shape', durationMinutes: 20, details: 'Divide and shape into brioche rolls or loaf.' },
      { id: 5, name: 'Final proof', durationMinutes: 90, details: 'Let rise until puffy.' },
      { id: 6, name: 'Egg wash', durationMinutes: 5, details: 'Brush with beaten egg.' },
      { id: 7, name: 'Bake', durationMinutes: 25, details: '180°C until deep golden.' },
    ],
    anchorType: 'start',
  },

  'Ciabatta': {
    name: 'Ciabatta',
    type: 'yeasted',
    ingredients: [
      '500g bread flour',
      '400g water (room temp)',
      '7g instant yeast',
      '10g salt',
      '15ml olive oil',
    ],
    steps: [
      { id: 1, name: 'Mix wet dough', durationMinutes: 15, details: 'Combine flour, water, yeast, salt; mix well (very sticky).' },
      { id: 2, name: 'Bulk ferment', durationMinutes: 180, details: 'Stretch and fold every 30 min.' },
      { id: 3, name: 'Turn out', durationMinutes: 10, details: 'Gently tip onto floured surface.' },
      { id: 4, name: 'Divide', durationMinutes: 10, details: 'Cut into rectangles, do not reshape.' },
      { id: 5, name: 'Proof', durationMinutes: 30, details: 'Let rest until slightly puffy.' },
      { id: 6, name: 'Bake', durationMinutes: 25, details: '220°C until golden with crisp crust.' },
    ],
    anchorType: 'start',
  },

  'Soft Dinner Rolls': {
    name: 'Soft Dinner Rolls',
    type: 'yeasted',
    ingredients: [
      '450g all-purpose flour',
      '180ml whole milk (warm)',
      '7g instant yeast',
      '60g unsalted butter (soft)',
      '50g sugar',
      '1 large egg',
      '6g salt',
      '30g melted butter (for brushing)',
    ],
    steps: [
      { id: 1, name: 'Mix & knead', durationMinutes: 15, details: 'Combine flour, milk, yeast, butter, sugar, salt; knead until soft.' },
      { id: 2, name: 'First rise', durationMinutes: 60, details: 'Cover and let double.' },
      { id: 3, name: 'Divide & shape', durationMinutes: 15, details: 'Cut into portions, roll into balls.' },
      { id: 4, name: 'Arrange & proof', durationMinutes: 45, details: 'Place in pan, let rise until touching.' },
      { id: 5, name: 'Butter wash', durationMinutes: 5, details: 'Brush tops with melted butter.' },
      { id: 6, name: 'Bake', durationMinutes: 20, details: '190°C until golden.' },
      { id: 7, name: 'Brush again', durationMinutes: 5, details: 'Brush with more butter while warm.' },
    ],
    anchorType: 'start',
  },

  'Yeasted Cinnamon Rolls': {
    name: 'Yeasted Cinnamon Rolls',
    type: 'yeasted',
    ingredients: [
      '400g all-purpose flour',
      '180ml whole milk (warm)',
      '7g instant yeast',
      '60g unsalted butter (soft)',
      '50g sugar',
      '1 large egg',
      '5g salt',
      '60g unsalted butter (soft, for filling)',
      '120g brown sugar (for filling)',
      '10g cinnamon (for filling)',
      '150g powdered sugar (for glaze)',
      '30ml milk (for glaze)',
    ],
    steps: [
      { id: 1, name: 'Mix & knead', durationMinutes: 15, details: 'Combine flour, milk, yeast, butter, sugar, egg, salt.' },
      { id: 2, name: 'First rise', durationMinutes: 60, details: 'Cover and let double.' },
      { id: 3, name: 'Roll out', durationMinutes: 10, details: 'Roll dough into large rectangle.' },
      { id: 4, name: 'Add filling', durationMinutes: 10, details: 'Spread butter, sugar, cinnamon.' },
      { id: 5, name: 'Roll & cut', durationMinutes: 10, details: 'Roll into log, cut into portions.' },
      { id: 6, name: 'Proof', durationMinutes: 30, details: 'Place in pan, let rise until puffy.' },
      { id: 7, name: 'Bake', durationMinutes: 25, details: '180°C until golden.' },
      { id: 8, name: 'Glaze', durationMinutes: 5, details: 'Top with icing while warm.' },
    ],
    anchorType: 'start',
  },

  'Challah': {
    name: 'Challah',
    type: 'yeasted',
    ingredients: [
      '500g all-purpose flour',
      '120ml warm water',
      '7g instant yeast',
      '3 large eggs',
      '60g sugar',
      '80ml vegetable oil',
      '8g salt',
      '1 egg (for egg wash)',
      'Sesame or poppy seeds (optional)',
    ],
    steps: [
      { id: 1, name: 'Mix & knead', durationMinutes: 15, details: 'Combine flour, water, yeast, eggs, sugar, oil, salt.' },
      { id: 2, name: 'First rise', durationMinutes: 90, details: 'Cover and let double.' },
      { id: 3, name: 'Divide', durationMinutes: 10, details: 'Cut into 3-6 strands depending on braid.' },
      { id: 4, name: 'Braid', durationMinutes: 15, details: 'Braid strands, tuck ends under.' },
      { id: 5, name: 'Proof', durationMinutes: 45, details: 'Let rise until puffy.' },
      { id: 6, name: 'Egg wash', durationMinutes: 5, details: 'Brush with beaten egg, add seeds if desired.' },
      { id: 7, name: 'Bake', durationMinutes: 30, details: '180°C until deep golden brown.' },
    ],
    anchorType: 'start',
  },

  'Croissants': {
    name: 'Croissants',
    type: 'yeasted',
    ingredients: [
      '500g all-purpose flour',
      '250ml whole milk (cold)',
      '10g instant yeast',
      '50g sugar',
      '10g salt',
      '280g unsalted butter (cold, for laminating)',
      '1 egg (for egg wash)',
    ],
    steps: [
      { id: 1, name: 'Mix détrempe', durationMinutes: 15, details: 'Combine flour, milk, yeast, sugar, salt.' },
      { id: 2, name: 'First rise', durationMinutes: 60, details: 'Let double at room temp.' },
      { id: 3, name: 'Cold rest', durationMinutes: 60, details: 'Refrigerate dough.' },
      { id: 4, name: 'Prepare butter block', durationMinutes: 15, details: 'Pound butter into flat square.' },
      { id: 5, name: 'Enclose butter', durationMinutes: 10, details: 'Wrap dough around butter block.' },
      { id: 6, name: 'First fold', durationMinutes: 15, details: 'Roll out, fold in thirds.' },
      { id: 7, name: 'Rest', durationMinutes: 60, details: 'Refrigerate.' },
      { id: 8, name: 'Second fold', durationMinutes: 15, details: 'Roll out, fold in thirds.' },
      { id: 9, name: 'Rest', durationMinutes: 60, details: 'Refrigerate.' },
      { id: 10, name: 'Third fold', durationMinutes: 15, details: 'Roll out, fold in thirds.' },
      { id: 11, name: 'Cold rest', durationMinutes: 120, details: 'Refrigerate until firm.' },
      { id: 12, name: 'Roll & cut', durationMinutes: 20, details: 'Roll thin, cut triangles.' },
      { id: 13, name: 'Shape', durationMinutes: 20, details: 'Roll each triangle into croissant shape.' },
      { id: 14, name: 'Cold proof', durationMinutes: 480, details: 'Refrigerate overnight.' },
      { id: 15, name: 'Warm up & proof', durationMinutes: 90, details: 'Let rise at room temp until jiggly.' },
      { id: 16, name: 'Egg wash', durationMinutes: 5, details: 'Brush with beaten egg.' },
      { id: 17, name: 'Bake', durationMinutes: 20, details: '200°C until deep golden and flaky.' },
    ],
    anchorType: 'start',
  },

  'English Muffins': {
    name: 'English Muffins',
    type: 'yeasted',
    ingredients: [
      '450g all-purpose flour',
      '240ml whole milk (warm)',
      '7g instant yeast',
      '30g unsalted butter (soft)',
      '20g sugar',
      '6g salt',
      'Cornmeal for dusting',
    ],
    steps: [
      { id: 1, name: 'Mix dough', durationMinutes: 15, details: 'Combine flour, milk, yeast, butter, sugar, salt.' },
      { id: 2, name: 'First rise', durationMinutes: 60, details: 'Cover and let double.' },
      { id: 3, name: 'Roll & cut', durationMinutes: 15, details: 'Roll out, cut rounds with cutter.' },
      { id: 4, name: 'Rest on cornmeal', durationMinutes: 30, details: 'Place on cornmeal-dusted tray, dust tops.' },
      { id: 5, name: 'Cold proof', durationMinutes: 480, details: 'Cover and refrigerate overnight.' },
      { id: 6, name: 'Warm up', durationMinutes: 30, details: 'Remove from fridge, let come to room temp.' },
      { id: 7, name: 'Cook on griddle', durationMinutes: 20, details: 'Medium-low heat, 7-8 min per side.' },
      { id: 8, name: 'Cool', durationMinutes: 10, details: 'Let cool before splitting with fork.' },
    ],
    anchorType: 'start',
  },

  'Flatbread / Lavash': {
    name: 'Flatbread / Lavash',
    type: 'yeasted',
    ingredients: [
      '300g all-purpose flour',
      '180ml warm water',
      '3g instant yeast',
      '5g salt',
      '15ml olive oil',
    ],
    steps: [
      { id: 1, name: 'Mix dough', durationMinutes: 10, details: 'Combine flour, water, yeast, salt, olive oil.' },
      { id: 2, name: 'Rest', durationMinutes: 60, details: 'Cover and let relax.' },
      { id: 3, name: 'Divide', durationMinutes: 10, details: 'Cut into small portions.' },
      { id: 4, name: 'Roll thin', durationMinutes: 15, details: 'Roll each piece paper thin.' },
      { id: 5, name: 'Cook', durationMinutes: 15, details: 'Bake at 230°C or cook on hot griddle until blistered.' },
    ],
    anchorType: 'start',
  },

  'Pull-Apart Garlic Bread': {
    name: 'Pull-Apart Garlic Bread',
    type: 'yeasted',
    ingredients: [
      '400g all-purpose flour',
      '180ml whole milk (warm)',
      '7g instant yeast',
      '30g unsalted butter (soft)',
      '30g sugar',
      '5g salt',
      '120g unsalted butter (melted, for garlic butter)',
      '6 cloves garlic (minced)',
      '15g fresh parsley (chopped)',
      '3g salt (for garlic butter)',
    ],
    steps: [
      { id: 1, name: 'Mix & knead', durationMinutes: 15, details: 'Combine flour, milk, yeast, butter, sugar, salt.' },
      { id: 2, name: 'First rise', durationMinutes: 60, details: 'Cover and let double.' },
      { id: 3, name: 'Make garlic butter', durationMinutes: 10, details: 'Mix melted butter, garlic, parsley, salt.' },
      { id: 4, name: 'Divide & coat', durationMinutes: 20, details: 'Cut dough into small pieces, coat each in garlic butter.' },
      { id: 5, name: 'Arrange in pan', durationMinutes: 10, details: 'Layer pieces in bundt or round pan.' },
      { id: 6, name: 'Proof', durationMinutes: 45, details: 'Let rise until puffy.' },
      { id: 7, name: 'Bake', durationMinutes: 30, details: '180°C until golden.' },
      { id: 8, name: 'Invert & serve', durationMinutes: 5, details: 'Turn out onto plate while warm.' },
    ],
    anchorType: 'start',
  },

  'Pita Bread': {
    name: 'Pita Bread',
    type: 'yeasted',
    ingredients: [
      '400g all-purpose flour',
      '240ml warm water',
      '7g instant yeast',
      '8g salt',
      '15ml olive oil',
      '5g sugar',
    ],
    steps: [
      { id: 1, name: 'Mix & knead', durationMinutes: 15, details: 'Combine flour, water, yeast, salt, olive oil.' },
      { id: 2, name: 'First rise', durationMinutes: 60, details: 'Cover and let double.' },
      { id: 3, name: 'Divide', durationMinutes: 10, details: 'Cut into 8 portions.' },
      { id: 4, name: 'Rest', durationMinutes: 15, details: 'Let balls relax.' },
      { id: 5, name: 'Roll flat', durationMinutes: 15, details: 'Roll each ball into 6-inch circle.' },
      { id: 6, name: 'Preheat', durationMinutes: 15, details: 'Heat oven to max with baking stone or tray.' },
      { id: 7, name: 'Bake', durationMinutes: 15, details: 'Bake 2-3 min each until puffed.' },
    ],
    anchorType: 'start',
  },
};

// Get all recipe names grouped by type
export function getRecipesByType() {
  const sourdough = [];
  const yeasted = [];

  Object.entries(PRESET_RECIPES).forEach(([name, recipe]) => {
    if (recipe.type === 'sourdough') {
      sourdough.push(name);
    } else {
      yeasted.push(name);
    }
  });

  return { sourdough, yeasted };
}

// Get all recipe names
export function getAllRecipeNames() {
  return Object.keys(PRESET_RECIPES);
}
