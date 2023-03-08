export default function copyToClipboard(content) {
    navigator.clipboard.writeText(content.toString())
        .then(() => {
            this.message = 'Copied!';
        })
        .catch(() => {
            this.message = 'Sorry, unable to copy to clipboard.'
        });
}