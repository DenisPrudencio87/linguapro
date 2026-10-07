export interface Course {
    id: number;
    language: string;
    name: string;
    level: string;
    duration: string;
    icon: string;
  }
  
  export interface Teacher {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    initials: string;
  }
  
  export interface Review {
    id: number;
    student: string;
    comment: string;
    rating: number;
  }
  
  export interface Promotion {
    id: number;
    title: string;
    description: string;
    discount: string;
  }
  
  export interface Enrollment {
    id: number;
    name: string;
    email: string;
    phone: string;
    course: string;
  }