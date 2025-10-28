"use client";
import { Badge } from "flowbite-react";

export default function ProductPrice({ finalPrice, originalPrice, discountType, discountValue }) {
    const hasDiscount = finalPrice < originalPrice;

    const formatPrice = (price) => {
        return price?.toLocaleString('en-EG', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) || '0.00';
    };

    const getBadgeContent = () => {
        if (!hasDiscount) return null;

        // Handle case where we have both discountType and discountValue
        if (discountType && discountValue !== undefined) {
            switch (discountType.toLowerCase()) {
                case 'percentage':
                    return `Save ${discountValue}%`;
                case 'amount':
                    return `Save EGP ${formatPrice(discountValue/100)}`;
                case 'bogo':
                    return 'Buy One Get One';
                case 'free_shipping':
                    return 'Free Shipping';
                case 'clearance':
                    return 'Clearance Sale';
                case 'seasonal':
                    return 'Seasonal Offer';
                default:
                    return `Special Offer (${discountType})`;
            }
        }

        // Handle case where we only know there's a discount but no specific type
        if (hasDiscount) {
            return 'Special Offer';
        }

        return null;
    };

    const badgeContent = getBadgeContent();

    return (
        <div className="flex items-center gap-3 mt-2 flex-wrap">
            <p className="text-2xl font-bold text-gray-900">
                EGP {formatPrice(finalPrice)}
            </p>

            {hasDiscount && (
                <>
                    <p className="line-through text-gray-400 text-lg">
                        EGP {formatPrice(originalPrice)}
                    </p>
                    {badgeContent && (
                        <Badge color="success" className="text-green-500">
                            {badgeContent}
                        </Badge>
                    )}
                </>
            )}
        </div>
    );
}