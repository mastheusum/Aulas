extends Control

func _on_btnPlay_pressed():
	get_tree().change_scene("res://Scenes/Mundo.tscn")

func _on_btnExit_pressed():
	get_tree().quit()
