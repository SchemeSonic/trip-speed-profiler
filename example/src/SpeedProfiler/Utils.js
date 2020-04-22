export default class Utils {
  static setTooltip(container, content, x, y) {
    if (!container) return
    const el = document.getElementById(container)

    if (content) {
      el.innerHTML = content
      el.style.display = 'block'
      el.style.left = x + 'px'
      el.style.top = y + 'px'
    } else {
      el.style.display = 'none'
    }
  }
}
