extends KinematicBody2D

var dir = Vector2()
var speed = 200

var fireball = preload("res://Instanciables/FireBall.tscn")

# Sistema de vida e energia
var life_max = 100
var life = 100
var energy_max = 50
var energy = 0

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

# para perder vida
func damage(value):
	life -= value
	if life <= 0:
		# vamos usar o print pois ainda não temos
		# a tela de game over
		print("Player Morreu!")

# para ganhar energia
func add_energy(value):
	energy += value
	if energy >= energy_max:
		# vamos usar o print pois ainda não temos
		# a tela de Win
		print("Player Venceu!")
