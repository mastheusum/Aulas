extends KinematicBody2D

var speed = 500

func _ready():
	look_at( get_global_mouse_position() )

func _process(delta):
	var info = move_and_collide( Vector2.RIGHT.rotated(rotation) * speed * delta)
	if info != null:
		if "Enemy" in info.collider.name:
			info.collider.self_destroy()
			queue_free()

func _on_AutoDestroy_timeout():
	queue_free()
