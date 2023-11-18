using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class HUD : MonoBehaviour
{
    public Button attackButton, potionButton;
    public GameObject combatPanel;

    public UnityEvent OnCombatPanelActive;
}
