using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Combat : MonoBehaviour
{
    // Aqui mostramos como uma classe pode ser utilizada para criar atributos
    public Knight p1;
    public Knight p2;

    private void Start() {
        p1 = new Knight(); // como criar um objeto
        p1.nome = "Lord Audi";
        p1.maxLife = 100;
        p1.attack = 10;
        p1.defense = 5;

        p2 = new(); // uma forma mais rápida de criar um objeto
        p2.nome = "Lord Harley";
        p2.maxLife = 100;
        p2.attack = 12;
        p2.defense = 3;
    }

    // O Update é outro método padrão da Unity e é executado quando o máximo de vezes por segundo
    private void Update()
    {
        // se a tecla Space for pressionada nós fazemos os cavaleiros se atacarem
        if (Input.GetKeyDown(KeyCode.Space))
        {
            p1.OnAttack(p2);
            p2.OnAttack(p1);
        }
    }
}
