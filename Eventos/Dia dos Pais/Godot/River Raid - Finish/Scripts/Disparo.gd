extends KinematicBody2D

var speed = 10
var player

func _process(delta):
	var info = move_and_collide( Vector2.UP * speed )
	if info:
		var other = info.collider
		if "Enemy" in other.name:
			player.add_score(50)
			other.queue_free()
			queue_free()
		if "Fuel" in other.name:
			player.add_score(80)
			other.queue_free()
			queue_free()

func _on_Timer_timeout():
	queue_free()
