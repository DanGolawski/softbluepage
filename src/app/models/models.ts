export interface CommentDto {
    createdAt?: string;
    email?: string;
    id?: number;
    name?: string;
    text?: string;
}

export interface Experience {
    startDate: number;
    endDate: number;
    title: string;
    companyName: string;
    description: string;
    id: number;
}

export interface Service {
    id: number;
    title: string;
    description: string;
}