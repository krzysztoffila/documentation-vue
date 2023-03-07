export default function copyToClipboard() {
    navigator.clipboard.writeText(this.code)
        .then(() => {
            this.message = 'Copied!';
        })
        .catch(() => {
            this.message = 'Sorry, unable to copy to clipboard.'
        });
}