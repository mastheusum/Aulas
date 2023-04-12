extends KinematicBody2D

var speed = 200
var direction = Vector2()

var shoot_pre = preload("res://Instances/Shoot.tscn")
var total_time = 0

func _process(delta):
	if Input.is_action_pressed("ui_right"):
		direction.x = 1
	elif Input.is_action_pressed("ui_left"):
		direction.x = -1
	else:
		direction.x = 0
	
	if Input.is_action_pressed("ui_down"):
		direction.y = 1
	elif Input.is_action_pressed("ui_up"):
		direction.y = -1
	else:
		direction.y = 0
	
	if Input.is_action_just_pressed("fire"):
		fire()
	
	move_and_collide( direction * speed * delta )
	

func fire():
	var shoot = shoot_pre.instance()
	# posiciona o tiro no mesmo local do Player
	shoot.global_position = self.global_position
	# pega o pai do Player (a cena) e adiciona o tiro
	get_parent().add_child( shoot )

func set_damage():
	get_node("CanvasLayer/LifeBar").value -= 1
	if get_node("CanvasLayer/LifeBar").value <= 0:
		get_tree().change_scene("res://Scenes/Start.tscn")


func _on_Timer_timeout():
	total_time += 1
	get_node("CanvasLayer/TotalTime").bbcode_text = "[center]" + str(total_time)
