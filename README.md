# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents✒️

- [Overview](#overview)🎯
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)🧩
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard

### Screenshot

![image](https://user-images.githubusercontent.com/86482525/125686926-5dc70f19-d1cb-40e8-bf23-668425f66c31.png)

### Links

- Live Site URL: [https://alvaro-j.github.io/pricing-component/](https://alvaro-j.github.io/pricing-component/)

## My process🧩

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Responsive design with mobile-first workflow

### What I learned

- Use <b>transform</b> to move an element: in this case, i wanted to move the slider to the other side.
```css
input:checked + .slider:before {
  transform: translateX(26px);
}
```
- Use <b>for</b> to select multiples elements: in this case, i wanted to change the text from the price.
```js
if (checkbox.checked == true) {
    for (i = 0; i < price.length; i++) {
        price[0].innerHTML = "19.99";
        price[1].innerHTML = "24.99";
        price[2].innerHTML = "39.99";
    } 
}
```

### Useful resources

- [Toggle example from W3Schools](https://www.w3schools.com/howto/howto_css_switch.asp) - This helped me to learn about a toggle switch button. I really liked this type of button and will use it going forward.

## Author🙋🏻

- Github - [Álvaro J.](https://www.github.com/alvaro-j/)
- Frontend Mentor - [@alvaro-j](https://www.frontendmentor.io/profile/alvaro-j)
