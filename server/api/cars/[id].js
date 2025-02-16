export default defineEventHandler(async () => {
    // Fetch data from an API endpoint
    const response = await fetch('https://api.example.com/cars');
    const cars = await response.json();

    // Store the data in the session storage
    return { cars };
});
