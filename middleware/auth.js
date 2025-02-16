export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser(); // Получаем текущего пользователя

    if (!user.value) {
        return navigateTo('/login'); // Если нет пользователя, редирект на логин
    }
});
