extends KinematicBody2D

var speed = 600

func _ready():
	look_at( get_global_mouse_position() )

func _physics_process(delta):
	move_and_slide( Vector2.RIGHT.rotated(rotation) * speed )
	
	for i in range(get_slide_count()):
		var other = get_slide_collision(i).collider
		# a string varia de acordo com o nome que o aluno deu
		# para o node do player
		if "Enemy" in other.name:
			other.damage(10)
			queue_free()
