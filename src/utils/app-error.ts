// AppError จะใช้ใน global error middleware โดย extens จาก Error Class เนื่องจากใน Error Class ไม่มี status บอก

export class AppError extends Error{
    status: number;

    constructor(status: number, message: string){
        super(message);
        this.name = "AppError";
        this.status = status
    }
}