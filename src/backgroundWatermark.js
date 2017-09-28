export default function backgroundWatermark(text) {
    if (text) {
        let base64Text = btoa('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><text font-size="30" fill-opacity="0.50" fill="gray" text-anchor="middle" transform="translate(100,100)rotate(-45)">' + text + '</text></svg>');
        document.body.style.backgroundImage = " url(data:image/svg+xml;base64," + base64Text + ")";
    }
}