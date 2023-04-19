//codigo para mandar a llamar urls con funciones json
try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
} catch (error) {
    console.log(error);
}