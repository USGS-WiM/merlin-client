export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    groups: [];
    user_permissions: [];
    is_superuser: boolean;
    is_staff: boolean;
    is_active: boolean;
}
