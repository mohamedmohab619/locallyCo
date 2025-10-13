"use client";
export default function AttributeSection({ name, values, selectedValue, onSelect }) {
    // console.log(`AttributeSection - name: ${name}, values: ${values}, selectedValue: ${selectedValue}`);
    return (
        <AttributesSection name={name}>
            {getSelector(name, values, selectedValue, onSelect)}
        </AttributesSection>
    );
}

function AttributesSection({ name, children }) {
    return (
        <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">{name}</h3>
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
}

function getSelector(attributeName, values, selectedValue, onSelect) {
    let arr = [];

    switch (attributeName.toLowerCase()) {
        case "size":
            values.forEach((v, i) => arr.push(<RectangularButton key={i} attributeName={attributeName} text={v} selected={selectedValue} onSelect={onSelect} />));
            return arr;
        case "color":
            values.forEach((v, i) => arr.push(<ColorButton key={i} attributeName={attributeName} color={v} selectedColor={selectedValue} onSelect={onSelect} />))
            return arr;
        default:
            return arr;
    }
}

// [____ Buttons ____]
function RectangularButton({ attributeName, text, selected, onSelect }) {
    return (
        <button
            onClick={() => onSelect(attributeName, text)}
            className={`px-3 py-2 rounded-md border focus:outline-none uppercase cursor-pointer ${selected.toLowerCase() === text.toLowerCase() ? "bg-gray-900 text-white" : "bg-white text-gray-700"}`}>
            {text}
        </button>
    );
}

function ColorButton({ attributeName, color, selectedColor, onSelect}) {
    return (
        <button
            key={color}
            onClick={() => onSelect(attributeName, color)}
            className={`w-8 h-8 rounded-full border-2 focus:outline-none cursor-pointer ${selectedColor.toLowerCase() === color.toLowerCase() ? "ring-2 ring-gray-900" : ""}`}
            style={{ backgroundColor: color }}
        />
    );
}