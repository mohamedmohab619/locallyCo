type Discount = {
    id: number,
    name: string,
    type: string, // e.g., percentage, amount
    value: number, // e.g., 10 for 10% or $10
    startDate: Date,
    endDate: Date,
    isActive: boolean,
    appliesToType: string, // e.g., product, category, brand, cart/order/payment
    minPurchaseAmountCents: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}

export function getBestDiscountAmount(price: number, discounts: Discount[]) {
    const discountAmounts: number[] = [];

    if (!discounts || discounts.length < 1) return [0, null];

    discounts?.forEach((dis) => {
        discountAmounts.push(calcDiscountAmount(price, dis.type, dis.value));
    });

    // TODO: return the corresponding discount data using the index of the chosen amount (if needed)

    let maxIdx = 0;
    for(let i = 1; i < discountAmounts.length; i++) {
        if (discountAmounts[i] > discountAmounts[maxIdx]) maxIdx = i;
    }
    return [discountAmounts[maxIdx], discounts[maxIdx]];
}

export function calcDiscountAmount(price: number, discountType: string, discountValue: number): number {
    switch (discountType.toLowerCase()) {
        case 'percentage':
            const discountPercentage = discountValue / 100;
            return price * discountPercentage;
        case 'amount':
            return discountValue;
        default:
            return 0;
    }
}