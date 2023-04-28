extends KinematicBody2D

var direction = Vector2()
var speed = 5

func _process(delta):
	if Input.is_key_pressed(KEY_RIGHT):
		direction.x = 1
	elif Input.is_key_pressed(KEY_LEFT):
		direction.x = -1
	else:
		direction.x = 0
	
	if Input.is_key_pressed(KEY_DOWN):
		direction.y = 1
	elif Input.is_key_pressed(KEY_UP):
		direction.y = -1
	else:
		direction.y = 0
	
	move_and_collide( direction * speed )
	animate()

func animate():
	if direction.x == 0 and direction.y == 0:
		get_child(0).animation = "IDLE"
	else:
		get_child(0).animation = "WALK"
	if global_position.x > get_global_mouse_position().x :
		get_child(0).flip_h = true
	else:
		get_child(0).flip_h = false
