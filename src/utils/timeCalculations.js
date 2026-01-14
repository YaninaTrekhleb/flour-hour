export const DEFAULT_STEPS = [
  {
    id: 1,
    name: 'Feed starter',
    durationMinutes: 300,
    details: 'Mix equal parts flour and water with your starter. Let it double in size before using.'
  },
  {
    id: 2,
    name: 'Mix dough',
    durationMinutes: 30,
    details: 'Combine starter, water, and flour until no dry flour remains. Do not add salt yet. Cover with a damp towel and rest.'
  },
  {
    id: 3,
    name: 'Add salt',
    durationMinutes: 30,
    details: 'Sprinkle salt over dough. Wet your hand and pinch/squeeze to mix thoroughly (2-3 min). Cover and rest.'
  },
  {
    id: 4,
    name: 'Fold set 1',
    durationMinutes: 30,
    details: 'Grab the dough on one side, pull it up high, and fold it over the center. Turn the bowl and repeat on all 4 sides. Cover & wait.'
  },
  {
    id: 5,
    name: 'Fold set 2',
    durationMinutes: 30,
    details: 'Repeat the stretching and folding on all 4 sides. Cover & wait.'
  },
  {
    id: 6,
    name: 'Fold set 3',
    durationMinutes: 0,
    details: 'Final set of stretches on all 4 sides. Cover the bowl. This completes strength building.'
  },
  {
    id: 7,
    name: 'Bulk ferment',
    durationMinutes: 270,
    details: 'Leave covered on counter. Done when dough has grown 50-75%, looks bubbly, and jiggles like Jell-O. At 68-70°F takes ~4.5 hrs.'
  },
  {
    id: 8,
    name: 'Shape & fridge',
    durationMinutes: 600,
    details: 'Fold sides into center like envelope, flip smooth-side up, pull toward you to tighten. Place in floured basket seam-up. Refrigerate overnight.'
  },
  {
    id: 9,
    name: 'Bake',
    durationMinutes: 65,
    details: 'Preheat Dutch oven at 450°F for 45 min. Score dough. Bake 20 min with lid, 20-25 min without until golden. Cool 1 hour before cutting.'
  },
];

export function calculateTimesForward(steps, startTime) {
  let currentTime = new Date(startTime);

  return steps.map(step => {
    const stepStart = new Date(currentTime);
    currentTime = new Date(currentTime.getTime() + step.durationMinutes * 60000);
    return {
      ...step,
      startTime: stepStart,
      endTime: new Date(currentTime),
    };
  });
}

export function calculateTimesBackward(steps, endTime) {
  let currentTime = new Date(endTime);

  const reversedSteps = [...steps].reverse().map(step => {
    const stepEnd = new Date(currentTime);
    currentTime = new Date(currentTime.getTime() - step.durationMinutes * 60000);
    return {
      ...step,
      startTime: new Date(currentTime),
      endTime: stepEnd,
    };
  });

  return reversedSteps.reverse();
}

export function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatDuration(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours} hr${hours > 1 ? 's' : ''}`;
  }
  return `${hours} hr ${mins} min`;
}

export function getTotalDuration(steps) {
  return steps.reduce((sum, step) => sum + step.durationMinutes, 0);
}
