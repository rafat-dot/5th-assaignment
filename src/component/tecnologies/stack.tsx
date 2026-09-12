interface Technology {
  id: string | number;
  icon: string;
  name: string;
  category: string;
}

interface StackProps {
  stack: Technology[];
  onRemoveFromStack: (id: string | number) => void;
  onClearAll: () => void; // Clear All Handler
}

const Stack = ({ stack, onRemoveFromStack, onClearAll }: StackProps) => {
  return (
    <div className="w-80 shrink-0 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b pb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {stack.length}
          </span>
        </div>

       
        {stack.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-red-500 hover:text-red-700 font-medium transition cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Item List */}
      {stack.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-8">
          No technologies added yet.
        </p>
      ) : (
        <div className="space-y-3 max-h-[70vh] overflow-y-auto">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <h4 className="font-semibold text-sm text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-xs text-gray-400">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="text-gray-400 hover:text-red-500 text-sm font-semibold px-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stack;