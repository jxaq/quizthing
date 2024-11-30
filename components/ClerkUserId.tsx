import { currentUser } from '@clerk/nextjs/server';

export default async function getUserId() {
    const user = await currentUser();
    return user ? user.id : null;
}