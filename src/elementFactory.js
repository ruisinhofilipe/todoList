const elementFactory = (type, attributes, textContent, ...children) => {
    const element = document.createElement(type);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    element.textContent = textContent;

    children.forEach(child => {
        element.appendChild(child)
    });

    return element;
}

export default elementFactory;