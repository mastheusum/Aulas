using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Stats : MonoBehaviour
{
    public Animator anima;
    public float hp = 100;
    [SerializeField] float maxHp = 100, attack = 10, attackDelay = 1, potions = 5;
    [SerializeField] bool isPlayer = true;

    void Start()
    {
        if (isPlayer)
        {
            HUD hud = GameObject.Find("Canvas").GetComponent<HUD>();
            hud.combatPanel.SetActive( true );
            hud.OnCombatPanelActive.Invoke();
            hud.attackButton.onClick.AddListener( Attack );
            hud.potionButton.onClick.AddListener( UsePotion );
        }
    }
    public void UsePotion()
    {
        if (potions > 0)
        {
            hp += 20;
            hp = Mathf.Clamp(hp, 0, maxHp);
            potions -= 1;
        }
    }

    public void Attack()
    {
        if (!anima.GetBool("isAttacking"))
        {
            anima.SetBool("isAttacking", true);
            Invoke("ResetAttack", attackDelay);
        }
    }

    void ResetAttack()
    {
        anima.SetBool("isAttacking", false);
    }
}
