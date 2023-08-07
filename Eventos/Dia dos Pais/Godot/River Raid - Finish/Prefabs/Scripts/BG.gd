extends ParallaxBackground

export var speed_y : int = 200

func _process(delta):
	scroll_offset.y += speed_y * delta
