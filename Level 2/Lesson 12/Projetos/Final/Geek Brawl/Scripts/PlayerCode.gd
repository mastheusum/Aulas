extends KinematicBody2D

var dir = Vector2()
var speed = 200

var fireball = preload("res://Instanciables/FireBall.tscn")

var life_max = 100
var life = 100
var energy_max = 50
var energy = 0

# Crie o CanvasLayer como filho do Player
# Crie progress bar no canvas layer para fazer as barras
# e comece configurando com a _ready
# caso prefira, estas configurações podem ser feitas direto no Inspector
func _ready():
	get_node("CanvasLayer/ProgressBar - Life").value = life
	get_node("CanvasLayer/ProgressBar - Life").max_value = life_max
	get_node("CanvasLayer/ProgressBar - Energy").value = energy
	get_node("CanvasLayer/ProgressBar - Energy").max_value = energy_max

func _physics_process(delta):
	if Input.is_key_pressed(KEY_D):
		dir.x = 1
	elif Input.is_key_pressed(KEY_A):
		dir.x = -1
	else:
		dir.x = 0

	if Input.is_key_pressed(KEY_S):
		dir.y = 1
	elif Input.is_key_pressed(KEY_W):
		dir.y = -1
	else:
		dir.y = 0
		
	move_and_slide( dir * speed )
	animate()
	if Input.is_action_just_pressed("shoot"):
		fire()

func animate():
	if dir.x == 0 and dir.y == 0:
		get_node("AnimatedSprite").animation = "idle"
	else:
		get_node("AnimatedSprite").animation = "walk"
	
	if self.global_position.x > get_global_mouse_position().x:
		get_node("AnimatedSprite").flip_h = true
	else:
		get_node("AnimatedSprite").flip_h = false

func fire():
	var clone = fireball.instance()
	clone.global_position = self.global_position
	get_parent().add_child(clone)

func damage(value):
	life -= value
	# sempre que levamos dano atualizamos a barra de vida
	get_node("CanvasLayer/ProgressBar - Life").value = life
	if life <= 0:
		# Faça as cenas do Menu, Win e lose
		# e poderemos mudar de cena
		get_tree().change_scene("res://Scenes/Lose.tscn")

func add_energy(value):
	energy += value
	# sempre que ganhamos energia atualizamos a barra de energia
	get_node("CanvasLayer/ProgressBar - Energy").value = energy
	if energy >= energy_max:
		# Faça as cenas do Menu, Win e lose
		# e poderemos mudar de cena
		get_tree().change_scene("res://Scenes/Win.tscn")
