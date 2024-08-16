import React, { useEffect, useState } from 'react';
import useWeatherStore from '../Zustand/useWeatherStore';

const Guides = () => {
    const [condition, setCondition] = useState(null);
    const currentConditions = useWeatherStore((state) => state.currentConditions);

    useEffect(() => {
        const fetchCondition = async () => {
            if (currentConditions && currentConditions.conditions) {
                setCondition(currentConditions.conditions.toLowerCase());
            }
        };
        fetchCondition();
    }, [currentConditions]);

    // Define the guides for different conditions
    const weatherGuides = {
        "rain, partially cloudy": [
            "Stay Dry: Carry an umbrella or wear a raincoat to stay dry.",
            "Be Cautious: Roads may be slippery, so drive carefully if you need to travel.",
            "Visibility: If you're driving, ensure your windshield wipers are working properly to maintain visibility.",
            "Enjoy the Outdoors: If you plan to be outside, dress in layers as it may be cool, and enjoy the occasional breaks in the clouds."
        ],
        "partially cloudy": [
            "Sun Protection: Use sunscreen to protect your skin from UV rays, as the sun can be strong even with some clouds.",
            "Dress Comfortably: Wear lightweight, breathable clothing.",
            "Enjoy Outdoor Activities: This is a great time for outdoor activities like walking, jogging, or visiting a park.",
            "Stay Hydrated: Drink plenty of water to stay hydrated, especially if you’re active."
        ],
        "overcast": [
            "Light Layers: Wear layers since the temperature may be cooler and the cloud cover can block warmth from the sun.",
            "Mood: Overcast weather can sometimes affect mood; consider activities that boost your mood, like reading or a hobby.",
            "Indoor Activities: It’s a good time for indoor activities like cooking or visiting a museum."
        ],
        "rain, overcast": [
            "Stay Dry: Use an umbrella or wear waterproof clothing to protect yourself from the rain.",
            "Be Prepared: Check for any potential flooding or drainage issues if you're going out.",
            "Drive Carefully: Roads can be slippery; drive cautiously and keep a safe distance from other vehicles.",
            "Indoor Enjoyment: Consider indoor activities like watching movies or playing games."
        ],
        "rain": [
            "Stay Dry: An umbrella and raincoat are essential to keep yourself dry.",
            "Watch for Flooding: Be aware of any potential flooding, especially in low-lying areas.",
            "Be Careful: Roads can be slippery, so exercise caution if driving or walking.",
            "Indoor Activities: Rainy weather is perfect for indoor activities such as reading, crafting, or baking."
        ],
        "clear": [
            "Sun Protection: Wear sunglasses and sunscreen to protect against UV rays.",
            "Outdoor Fun: This is an ideal day for outdoor activities like hiking, biking, or picnicking.",
            "Hydrate: Make sure to stay hydrated, especially if you’re spending a lot of time outside.",
            "Comfortable Clothing: Dress in lightweight and breathable clothing to stay cool."
        ],
    };

    // Determine the guide to display based on the current condition
    const selectedGuide = condition ? weatherGuides[condition] || [] : [];

    return (
        <div className="p-4 mx-20 border rounded mb-5">
            <h2 className="text-lg font-semibold mb-2">Weather Guide</h2>
            {selectedGuide.length > 0 ? (
                <ul className="list-disc pl-5">
                    {selectedGuide.map((guide, index) => (
                        <li key={index} className="mb-1">{guide}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Guides;
