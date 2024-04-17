extends Node

var enemy = preload("res://Instanciables/Enemy.tscn")

func _on_TimerSpawn_timeout():
	var clone = enemy.instance()
	clone.global_position.x = rand_range(0, 1024)
	clone.global_position.x = rand_range(0, 600)
	clone.player = get_node("Player")
	add_child(clone)
