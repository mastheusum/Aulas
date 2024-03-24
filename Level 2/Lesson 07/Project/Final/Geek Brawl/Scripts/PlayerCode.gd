extends KinematicBody2D

var dir = Vector2()
var speed = 200

func _physics_process(delta):
	if Input.is_key_pressed(KEY_RIGHT):
		dir.x = 1
	elif Input.is_key_pressed(KEY_LEFT):
		dir.x = -1
	else:
		dir.x = 0

	if Input.is_key_pressed(KEY_DOWN):
		dir.y = 1
	elif Input.is_key_pressed(KEY_UP):
		dir.y = -1
	else:
		dir.y = 0
		
	move_and_slide( dir * speed )
