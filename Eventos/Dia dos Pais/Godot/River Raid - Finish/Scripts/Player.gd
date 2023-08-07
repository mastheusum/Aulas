extends KinematicBody2D

var motion = Vector2()
var speed = 4

func _process(delta):
	if Input.is_action_pressed("ui_right"):
		motion.x = 1
	elif Input.is_action_pressed("ui_left"):
		motion.x = -1
	else:
		motion.x = 0
	
	move_and_collide( motion * speed )
