using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RaiseHandDummy : MonoBehaviour
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

    public void OnRaiseHand() {
        questionAsked = true;
    }

    public void OnStop() {
        questionAsked = false;
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
}
