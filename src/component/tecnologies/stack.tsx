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
      <h2 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h2>
      <p className="text-sm text-gray-400 mb-5">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-2xl py-10 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Your stack is empty.</span>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3 border border-gray-100 rounded-2xl bg-white shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onClearAll}
          className="w-full mt-4 py-3 border border-red-200 rounded-xl text-red-500 hover:bg-red-50 font-medium text-sm transition cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default Stack;
