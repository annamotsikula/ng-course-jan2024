export interface Laptop {
    brand: string;
    year: number;
    hasFrontCamera: boolean;
    keyboardType: Keyboard;
    color?: string
}

type Keyboard = 'long' | 'short'