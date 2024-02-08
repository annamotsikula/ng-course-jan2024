export interface Student {
    studentId: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    enrollmentDate: Date;
    isInternational: boolean;
    favSubject: string[]
    email: string;
    phone: string;
    profileImg?: string;
    extraEmail?: string;
}