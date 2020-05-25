import Phaser from 'phaser'

import SceneKeys from '../consts/SceneKeys'

export default class GameOver extends Phaser.Scene
{
	constructor()
	{
		super(SceneKeys.GameOver)
	}

	create()
	{
		const { width, height } = this.scale

		const x = width * 0.5
		const y = height * 0.5

		this.add.text(x, y,  'Press SPACE to Play Again', {
			fontSize: '32px',
			color: '#FFFFFF',
			backgroundColor: '#000000',
			shadow: { fill: true, blur: 0, offsetY: 0 },
			padding: { left: 15, right: 15, top: 10, bottom: 10 }
		})
		.setOrigin(0.5)

		this.input.keyboard.once('keydown-SPACE', () => {
			this.scene.stop(SceneKeys.GameOver)
			this.scene.stop(SceneKeys.Game)
			this.scene.start(SceneKeys.Game)
		})
	}
}
