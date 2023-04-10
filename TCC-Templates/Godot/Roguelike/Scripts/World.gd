extends Node2D

var enemy_pre = preload("res://Instances/Enemy.tscn")

func _on_Spawner_timeout():
	var enemy = enemy_pre.instance()
	enemy.global_position.x = rand_range(0, 1024)
	enemy.global_position.y = rand_range(0, 600)
	add_child(enemy)
