export default function copyToClipboard(content) {
    navigator.clipboard.writeText(this.coloredCode)
        .then(() => {
            this.message = 'Copied!';
        })
        .catch(() => {
            this.message = 'Sorry, unable to copy to clipboard.'
        });
}