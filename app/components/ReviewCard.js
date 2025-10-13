import { Badge } from "flowbite-react";

// TODO: add the rating stars (parameter and view)
export default function ReviewCard({ name, time, text }) {
    return (
        <div className="border rounded 2xl p-4">
            <div className="flex items-center justify-between">
                <div className="font-medium">
                    {name} <Badge color="gray">Verified</Badge>
                </div>
                <div className="text-xs text-gray-500">{time}</div>
            </div>
            <p className="mt-2 text-gray-700">{text}</p>
        </div>
    );
}