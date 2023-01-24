import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const remainingDays = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  );
  const pastDays = formatDistanceToNow(new Date(taskObj.deadline));
  return (
    <div className="p-6 bg-white rounded-md leading-normal my-4 shadow-md">
      <h3 className="text-lg">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        {remainingDays === 0 && <span className="bg-lessThan1">today</span>}
        {remainingDays < 3 && remainingDays > 0 && (
          <span className="bg-lessThan1">{remainingDays} days later</span>
        )}
        {remainingDays > 3 && (
          <span className="bg-moreThan3">{remainingDays} days later</span>
        )}
        {remainingDays < 0 && (
          <span className="bg-lessThan1">{pastDays} ago</span>
        )}
      </div>
      <p className="px-2 text-sm text-stone-700">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="bg-lightOrange p-2 block ml-auto rounded cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
