class Options {
    constructor(width, height, bg, fontSize, textAlign, content) {
        this.width = width;
        this.height = height;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.content = content;
    }
    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let style = `height: ${this.height}px; width: ${this.width}px; text-align: ${this.textAlign}; fontSize: ${this.fontSize}px; background-color: ${this.bg}`;
        div.style.cssText = style;
    }
}

const element = new Options(20, 20, 'red', 24, 'center');
const element2 = new Options(10, 30, 'yellow', 12, 'center');
const element3 = new Options(40, 60, 'blue', 32, 'center');
const element4 = new Options(80, 20, 'purple', 18, 'center');

element.createDiv();
element2.createDiv();
element3.createDiv();
element4.createDiv();