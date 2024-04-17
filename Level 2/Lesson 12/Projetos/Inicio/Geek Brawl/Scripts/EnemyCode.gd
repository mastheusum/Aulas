extends KinematicBody2D

# Procure no Inspector do Enemy pela propriedade Collision
# nela você verá a opção de Layer e a opção Mask
# Altere a Layer para 3
# Altere a Mask para 1 e 2
# Caso não encontre estas opções você está 
# no Collision errado (sim tem 2 Collision)

var dir = Vector2()
var speed = 150
var player

# Sistema de vida
var life = 30

func _physics_process(delta):
	# o inimigo só pode fazer coisas enquanto estiver vivo
	if life > 0:
		dir = self.global_position.direction_to(player.global_position)
		move_and_slide( dir * speed )
		
		# repita para cada colisão que aconteceu
		for i in range(get_slide_count()):
			var other = get_slide_collision(i).collider
			# a string varia de acordo com o nome que o aluno deu
			# para o node do player
			if "Player" in other.name:
				player.damage(10)
				# depois de causar dano ao plauer
				# deletamos o inimigo da memória do PC
				queue_free()

# para perder vida
func damage(value):
	life -= value
	if life <= 0:
		# primeiro damos energia para o player
		player.add_energy(5)
		# iniciamos a animação de morte
		get_node("AnimatedSprite").animation = "death"

# sinal emitido quando uma animação chega ao fim
func _on_AnimatedSprite_animation_finished():
	# se esta animação tiver o nome "death"
	if get_node("AnimatedSprite").animation == "death":
		# deletamos o inimigo da memória do PC
		queue_free()
