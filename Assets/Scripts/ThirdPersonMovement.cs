using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThirdPersonMovement : MonoBehaviour
{
    public CharacterController controller;
    Animator animator;
    public Transform cam;

    public float speed = 6f;

    public float turnSmoothTime = 0.1f;
    float turnSmoothVelocity;

    int isWalkingHash;
    int isRunningHash;



    public float walkingSpeed = 7.5f;
    public float runningSpeed = 11.5f;
    public float jumpSpeed = 8.0f;
    public float gravity = 20.0f;
    public Camera playerCamera;
    public float lookSpeed = 2.0f;
    public float lookXLimit = 45.0f;

    CharacterController characterController;
    Vector3 moveDirection = Vector3.zero;
    // float rotationX = 0;

    [HideInInspector]
    public bool canMove = true;



    void Start() {
        animator = GetComponent<Animator>();
        isWalkingHash = Animator.StringToHash("isWalking");
        isRunningHash = Animator.StringToHash("isRunning");
    }
    

    void handleAnimation(bool isMovementPressed, bool isRunPressed) {
        
        bool isWalking = animator.GetBool(isWalkingHash);
        bool isRunning = animator.GetBool(isRunningHash);


        if (isMovementPressed && !isWalking) {
            animator.SetBool(isWalkingHash, true);
        } else if (!isMovementPressed && isWalking) {
            animator.SetBool(isWalkingHash, false);
        }

        if ((isMovementPressed && isRunPressed) && !isRunning) {
            animator.SetBool(isRunningHash, true);
        } else if ((!isMovementPressed || !isRunPressed) && isRunning) {
            animator.SetBool(isRunningHash, false);
        }
    }

    /* void handleGravity() {
        if (controller.isGrounded) {
            float groundedGravity = -.05f;
            currentMovement.y = groundedGravity;
            currentRunMovement.y = groundedGravity;
        } else {
            float gravity = -9.8f;
            currentMovement.y += gravity;
            currentRunMovement.y += gravity;
        }
    } */

    // Update is called once per frame
    void Update()
    {
        // We are grounded, so recalculate move direction based on axes
        Vector3 forward = transform.TransformDirection(Vector3.forward);
        Vector3 right = transform.TransformDirection(Vector3.right);

        bool isRunning = Input.GetKey(KeyCode.LeftShift);

        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        float curSpeedX = canMove ? (isRunning ? runningSpeed : walkingSpeed) * horizontal : 0;
        float curSpeedY = canMove ? (isRunning ? runningSpeed : walkingSpeed) * vertical : 0;

        Vector3 direction = new Vector3(horizontal, 0f, vertical).normalized;

        bool isMoving = (direction.magnitude >= 0.1f);
        // bool isRunning = Input.GetKey("left shift");

        handleAnimation(isMoving, isRunning);

        if (isMoving) {
            float targetAngle = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg + cam.eulerAngles.y;
            float angle = Mathf.SmoothDampAngle(transform.eulerAngles.y, targetAngle, ref turnSmoothVelocity, turnSmoothTime);
            transform.rotation = Quaternion.Euler(0f, angle, 0f);

            Vector3 moveDir = Quaternion.Euler(0f, targetAngle, 0f) * Vector3.forward;
            controller.Move(moveDir.normalized * speed * Time.deltaTime);
        }


        // E pressed and standing
        if (Input.GetKey("e")) {
            ScenesManager.Instance.LoadSittingScene();
        }

        // Enter pressed and standing
        if (Input.GetKeyDown(KeyCode.Return)) {
            ScenesManager.Instance.LoadDuringClassScene();
        }

        // Q pressed and sitting
        if (Input.GetKey("q")) {
            ScenesManager.Instance.LoadPreClassScene();
        } 
    }
}
