extends KinematicBody2D

var speed = 600

func _ready():
	look_at( get_global_mouse_position() )

func _physics_process(delta):
	move_and_slide( Vector2.RIGHT.rotated(rotation) * speed )
