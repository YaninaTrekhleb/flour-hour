import { useState } from 'react';
import { formatTime, formatDuration } from '../utils/timeCalculations';

export function StepItem({ step, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [editName, setEditName] = useState(step.name);
  const [editHours, setEditHours] = useState(Math.floor(step.durationMinutes / 60));
  const [editMinutes, setEditMinutes] = useState(step.durationMinutes % 60);

  const handleSave = () => {
    const totalMinutes = (parseInt(editHours) || 0) * 60 + (parseInt(editMinutes) || 0);
    if (totalMinutes > 0 && editName.trim()) {
      onUpdate({
        ...step,
        name: editName.trim(),
        durationMinutes: totalMinutes,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditName(step.name);
    setEditHours(Math.floor(step.durationMinutes / 60));
    setEditMinutes(step.durationMinutes % 60);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="step-item editing">
        <div className="step-time">{formatTime(step.startTime)}</div>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className="step-name-input"
          placeholder="Step name"
        />
        <div className="duration-inputs">
          <input
            type="number"
            min="0"
            max="24"
            value={editHours}
            onChange={(e) => setEditHours(e.target.value)}
            className="duration-input"
          />
          <span>hr</span>
          <input
            type="number"
            min="0"
            max="59"
            value={editMinutes}
            onChange={(e) => setEditMinutes(e.target.value)}
            className="duration-input"
          />
          <span>min</span>
        </div>
        <div className="step-actions">
          <button onClick={handleSave} className="btn-save">Save</button>
          <button onClick={handleCancel} className="btn-cancel">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`step-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="step-time">{formatTime(step.startTime)}</div>
      <div
        className="step-name-wrapper"
        onClick={() => step.details && setIsExpanded(!isExpanded)}
      >
        <div className="step-name">{step.name}</div>
        {isExpanded && step.details && (
          <div className="step-details">{step.details}</div>
        )}
      </div>
      <div
        className="step-duration"
        onClick={() => step.details && setIsExpanded(!isExpanded)}
        style={{ cursor: step.details ? 'pointer' : 'default' }}
      >
        {step.details && <span className="expand-icon">{isExpanded ? '−' : '+'}</span>}
        {formatDuration(step.durationMinutes)}
      </div>
      <div className="step-actions">
        <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
        <button onClick={() => onDelete(step.id)} className="btn-delete">Delete</button>
      </div>
    </div>
  );
}
