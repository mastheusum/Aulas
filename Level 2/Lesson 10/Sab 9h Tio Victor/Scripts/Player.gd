extends KinematicBody2D

var direction = Vector2()
var speed = 5

func tio_update_animations():
	if direction.x == 0 and direction.y == 0:
		get_node("AnimatedSprite").animation = "IDLE"
	else:
		get_node("AnimatedSprite").animation = "WALK"
	
	if get_global_mouse_position().x < global_position.x:
		get_node("AnimatedSprite").flip_h = true
	else:
		get_node("AnimatedSprite").flip_h = false

func _process(delta):
	if Input.is_key_pressed(KEY_D):
		direction.x = 1
	elif Input.is_key_pressed(KEY_A):
		direction.x = -1
	else:
		direction.x = 0
	
	if Input.is_key_pressed(KEY_S):
		direction.y = 1
	elif Input.is_key_pressed(KEY_W):
		direction.y = -1
	else:
		direction.y = 0
	
	move_and_collide( direction * speed )
	
	tio_update_animations()

