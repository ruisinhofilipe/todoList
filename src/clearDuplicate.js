export default function clearDuplicate(name) {
    let array = document.querySelectorAll(name);
    for (let i = 0; i < array.length; i++) {
        array[i].remove();
    }
}