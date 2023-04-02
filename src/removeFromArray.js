export default function removeTodo(className,) {
    const array = document.querySelectorAll(className);
    array.forEach(element => {
        element.addEventListener('click', () => {
            console.log('working');
        });
    });
}