extends KinematicBody2D

# Procure no Inspector da FireBall pela propriedade Collision
# nela você verá a opção de Layer e a opção Mask
# Altere a Layer para 2
# Altere a Mask para 3
# Caso não encontre estas opções você está 
# no Collision errado (sim tem 2 Collision)

var speed = 600

func _ready():
	look_at( get_global_mouse_position() )

func _physics_process(delta):
	move_and_slide( Vector2.RIGHT.rotated(rotation) * speed )
