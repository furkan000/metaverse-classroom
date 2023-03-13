using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Animations : MonoBehaviour
{
    Animator animator;

    // Start is called before the first frame update
    void Start()
    {
        if (RoleManager.username != "teacher" && RoleManager.username != "Teacher") { this.enabled = false; }
        Transform furkanTransform = transform.Find("furkan");
        animator = furkanTransform.GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        bool isMovementPressed = Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.D);
        bool isRunPressed = Input.GetKey(KeyCode.LeftShift);
        bool isWalking = animator.GetBool("isWalking");
        bool isRunning = animator.GetBool("isWalking");


        if (isMovementPressed && !isWalking) {
            animator.SetBool("isWalking", true);
        } else if (!isMovementPressed && isWalking) {
            animator.SetBool("isWalking", false);
        }

        if ((isMovementPressed && isRunPressed) && !isRunning) {
            animator.SetBool("isRunning", true);
        } else if ((!isMovementPressed || !isRunPressed) && isRunning) {
            animator.SetBool("isRunning", false);
        }
    }
}
