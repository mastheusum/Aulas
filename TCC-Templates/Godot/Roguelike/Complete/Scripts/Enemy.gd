extends KinematicBody2D

var player
var speed = 200
var direction = Vector2()

var life = 0

const colors = [
	Color.cyan, Color.green, Color.yellow,
	Color.orange, Color.red
]

func _ready():
	player = get_parent().get_node("Player")
	life = 1 + randi() % 5
	$ColorRect.color = colors[life - 1]

func _process(delta):
	if player != null:
		direction = self.global_position.direction_to(player.global_position)
		var info = move_and_collide( direction * speed * delta )
		if info != null:
			if "Player" in info.collider.name:
				info.collider.set_damage()
				queue_free()
	else:
		queue_free()

func self_destroy():
	life -= 1
	if life <= 0:
		queue_free()
