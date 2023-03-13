using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RaiseHand : MonoBehaviour
{
    Animator animator;
    int questionAskedHash;
    bool questionAsked;

    // Start is called before the first frame update
    void Start()
    {
        animator = GetComponent<Animator>();
        questionAskedHash = Animator.StringToHash("questionAsked");
    }

    // Update is called once per frame
    void Update()
    {
        if (questionAsked) {
            animator.SetBool(questionAskedHash, true);
        } else {
            animator.SetBool(questionAskedHash, false);
        }
    }

    public void ButtonPressed() {
        if (questionAsked) {
            questionAsked = false;
        } else {
            questionAsked = true;
        }
    }
}
