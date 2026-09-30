export interface JobFormData  {
    fullName:string;
    email:string;
    phone:string;
    jobRole:string;
    experience:number;
    skills:string;
    resume:File | null;
    coverLetter:string;
};