import { useState } from 'react';
import { StepItem } from './StepItem';
import { formatTime } from '../utils/timeCalculations';

export function StepList({ steps, onUpdateStep, onDeleteStep, onAddStep }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newHours, setNewHours] = useState(0);
  const [newMinutes, setNewMinutes] = useState(30);

  const handleAdd = () => {
    const totalMinutes = (parseInt(newHours) || 0) * 60 + (parseInt(newMinutes) || 0);
    if (totalMinutes > 0 && newName.trim()) {
      onAddStep({
        id: Date.now(),
        name: newName.trim(),
        durationMinutes: totalMinutes,
      });
      setNewName('');
      setNewHours(0);
      setNewMinutes(30);
      setShowAddForm(false);
    }
  };

  const lastStep = steps[steps.length - 1];
  const readyTime = lastStep?.endTime;

  return (
    <div className="step-list">
      <div className="step-header">
        <div className="step-time-header">Time</div>
        <div className="step-name-header">Step</div>
        <div className="step-duration-header">Duration</div>
        <div className="step-actions-header"></div>
      </div>

      {steps.map((step) => (
        <StepItem
          key={step.id}
          step={step}
          onUpdate={onUpdateStep}
          onDelete={onDeleteStep}
        />
      ))}

      {readyTime && (
        <div className="step-item ready-step">
          <div className="step-time ready-time">{formatTime(readyTime)}</div>
          <div className="step-name ready-name">Ready to eat!</div>
          <div className="step-duration">-</div>
          <div className="step-actions"></div>
        </div>
      )}

      {showAddForm ? (
        <div className="add-step-form">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Step name"
            className="step-name-input"
          />
          <div className="duration-inputs">
            <input
              type="number"
              min="0"
              max="24"
              value={newHours}
              onChange={(e) => setNewHours(e.target.value)}
              className="duration-input"
            />
            <span>hr</span>
            <input
              type="number"
              min="0"
              max="59"
              value={newMinutes}
              onChange={(e) => setNewMinutes(e.target.value)}
              className="duration-input"
            />
            <span>min</span>
          </div>
          <div className="add-form-actions">
            <button onClick={handleAdd} className="btn-save">Add</button>
            <button onClick={() => setShowAddForm(false)} className="btn-cancel">Cancel</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setShowAddForm(true)} className="btn-add-step">
          + Add Step
        </button>
      )}
    </div>
  );
}
