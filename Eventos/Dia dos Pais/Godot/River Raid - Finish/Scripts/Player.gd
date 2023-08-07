extends KinematicBody2D

var motion = Vector2()
var speed = 4

var combustivel = 200
var score = 0

var current_fire = null
var fire = preload("res://Instances/Disparo.tscn")

func enche_o_tanque(quantidade):
	if combustivel < 200:
		combustivel = combustivel + quantidade

func add_score(pontos):
	score += pontos

func _process(delta):
	if Input.is_action_pressed("ui_right"):
		motion.x = 1
	elif Input.is_action_pressed("ui_left"):
		motion.x = -1
	else:
		motion.x = 0
	
	move_and_collide( motion * speed )


func _on_Timer_timeout():
	combustivel -= 0.75
	print(combustivel)
