export default async function copyToClipboard(content) {
    return await
    navigator.clipboard.writeText(content.toString())
}