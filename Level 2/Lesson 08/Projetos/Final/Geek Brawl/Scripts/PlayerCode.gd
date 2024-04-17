extends KinematicBody2D

var dir = Vector2()
var speed = 200

func _physics_process(delta):
	if Input.is_key_pressed(KEY_D):
		dir.x = 1
	elif Input.is_key_pressed(KEY_A):
		dir.x = -1
	else:
		dir.x = 0

	if Input.is_key_pressed(KEY_S):
		dir.y = 1
	elif Input.is_key_pressed(KEY_W):
		dir.y = -1
	else:
		dir.y = 0
		
	move_and_slide( dir * speed )
	animate()

func animate():
	if dir.x == 0 and dir.y == 0:
		get_node("AnimatedSprite").animation = "idle"
	else:
		get_node("AnimatedSprite").animation = "walk"
	
	if self.global_position.x > get_global_mouse_position().x:
		get_node("AnimatedSprite").flip_h = true
	else:
		get_node("AnimatedSprite").flip_h = false
