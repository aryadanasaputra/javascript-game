import { GAME_WIDTH, GAME_HEIGHT } from "../core/constants.js"

export class Player {
    constructor() {
        this.x = GAME_WIDTH / 2
        this.y = GAME_HEIGHT / 2
        this.width = 64
        this.height = 64
        this.speed = 5
        this.speedMultiplier = 1
    }
    update(keys) {
        let dx = 0, dy = 0

        if (keys['w'] || keys['arrowup']) dy -= 1
        if (keys['s'] || keys['arrowdown']) dy += 1
        if (keys['a'] || keys['arrowleft']) dx -= 1
        if (keys['d'] || keys['arrowright']) dx += 1
        this.speedMultiplier = keys['shift'] ? 1.5 : 1

        if (dx || dy) {
            // diagonal movement (rumus trigonometris, simple rumus
            // Math.hypot(dx, dy))
            const len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
            dx /= len
            dy /= len

            this.x += dx * this.speed * this.speedMultiplier
            this.y += dy * this.speed * this.speedMultiplier
        }
        // batas map
        this.x = Math.max(0, Math.min(GAME_WIDTH - this.width, this.x))
        this.y = Math.max(0, Math.min(GAME_HEIGHT - this.height, this.y))
    }
}