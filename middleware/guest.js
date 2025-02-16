export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser(); // Получаем текущего пользователя

    if (user.value) {
        return navigateTo('/profile'); // Если пользователь авторизован, редирект на профиль
    }
});
