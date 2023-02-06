using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Chair : MonoBehaviour
{
    public GameObject playerStanding, playerSitting, intText, standText;
    public bool interactable, sitting;

    void OnTriggerStay(Collider other) {
        if (other.CompareTag("Player")) {
            intText.SetActive(true);
            interactable = true;
        }
    }

    void OnTriggerExit(Collider other) {
        if (other.CompareTag("Player")) {
            intText.SetActive(false);
            interactable = false;
        }
    }
    // Update is called once per frame
    void Update()
    {
        if (interactable) {
            if (Input.GetKeyDown(KeyCode.E)) {
                intText.SetActive(false);
                standText.SetActive(true);
                playerSitting.SetActive(true);
                sitting = true;
                playerStanding.SetActive(false);
                interactable = false;
            }
        }

        if (sitting) {
            if (Input.GetKeyDown(KeyCode.Q)) {
                playerSitting.SetActive(false);
                standText.SetActive(false);
                playerStanding.SetActive(true);
                sitting = false; 
            }
        }
    }
}
