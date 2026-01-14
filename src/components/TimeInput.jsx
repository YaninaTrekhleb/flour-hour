export function TimeInput({ anchorType, anchorTime, onAnchorTypeChange, onAnchorTimeChange }) {
  const timeValue = anchorTime.toTimeString().slice(0, 5);

  const handleTimeChange = (e) => {
    const [hours, minutes] = e.target.value.split(':').map(Number);
    const newDate = new Date(anchorTime);
    newDate.setHours(hours, minutes, 0, 0);
    onAnchorTimeChange(newDate);
  };

  return (
    <div className="time-input-container">
      <div className="anchor-type-toggle">
        <button
          className={`anchor-btn ${anchorType === 'start' ? 'active' : ''}`}
          onClick={() => onAnchorTypeChange('start')}
        >
          Set Start Time
        </button>
        <button
          className={`anchor-btn ${anchorType === 'bake' ? 'active' : ''}`}
          onClick={() => onAnchorTypeChange('bake')}
        >
          Set Bake Time
        </button>
      </div>

      <div className="time-picker">
        <label>
          {anchorType === 'start' ? 'I want to start at:' : 'I want bread ready by:'}
        </label>
        <input
          type="time"
          value={timeValue}
          onChange={handleTimeChange}
          className="time-input"
        />
      </div>
    </div>
  );
}
