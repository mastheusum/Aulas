extends Node2D

var enemy_pre = preload("res://Instances/Enemy.tscn")
var count = 2
var spawn_time = 2

func _ready():
	$Spawner.start(spawn_time)

func _on_Spawner_timeout():
	var enemy = enemy_pre.instance()
	enemy.global_position.x = rand_range(0, 1024)
	enemy.global_position.y = rand_range(0, 600)
	add_child(enemy)
	if count > 0:
		count -= 1
	else:
		count = 10
		spawn_time *= 0.7
	$Spawner.start(spawn_time)
