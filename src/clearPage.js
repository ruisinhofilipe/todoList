export default function removeDom(className) {
    let children = document.querySelectorAll(className);
    children.forEach(child => {
        child.remove();
    });
}