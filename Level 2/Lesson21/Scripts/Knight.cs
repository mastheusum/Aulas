using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

// Explicar que o Script e a Classe devem ter os nomes escritos igualmente
public class Knight : MonoBehaviour
{
    // Atributos públicos
    public string nome;
    public int maxLife;
    // aqui mostramos como criar mais de um atributo na mesma linha
    public int attack, defense;

    // Atributos privados
    // este tipo de atributo só pode ser acessado Objeto pelo dono do atributo
    private int life;

    // O método Start é padrão da Unity 
    // é executado quando o objeto está pronto na cena
    private void Start()
    {
        // iniciando a variável life
        life = maxLife;
    }

    // Para que o cavaleiro possa atacar ele vai precisar saber quem é o alvo do seu ataque
    public void OnAttack(Knight target)
    {
        // O combate resume-se em aplicar o ataque do cavaleiro a devesa do alvo
        target.OnDefense( attack );
    }

    // Para se defender ele precisa saber de quanto será o ataque que irá receber
    public void OnDefense(int attackValue)
    {
        // Se o ataque supera a defesa o dano é aplicado
        if (attackValue > defense)
        {
            life = life - (attackValue - defense);
        }
        // se o ataque não supera a defesa o cavaleiro perde apenas 1 de vida
        else
        {
            life = life - 1;
        }
        // Este print pode ser simplificado dependendo da decisão do instrutor
        // O objetivo dele é apenas mostrar o nome do cavaleiro e a vida atual
        print($"Nome: {nome} ({life}/{maxLife})");
    }
}
