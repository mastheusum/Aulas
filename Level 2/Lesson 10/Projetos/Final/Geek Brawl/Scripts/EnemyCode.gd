extends KinematicBody2D

# Procure no Inspector do Enemy pela propriedade Collision
# nela você verá a opção de Layer e a opção Mask
# Altere a Layer para 3
# Altere a Mask para 1 e 2
# Caso não encontre estas opções você está 
# no Collision errado (sim tem 2 Collision)

var dir = Vector2()
var speed = 150
var player : KinematicBody2D

func _physics_process(delta):
	dir = self.global_position.direction_to(player.global_position)
	move_and_slide( dir * speed )
