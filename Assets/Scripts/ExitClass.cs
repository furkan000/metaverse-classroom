using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ExitClass : MonoBehaviour
{
    // Update is called once per frame
    void Update()
    {
        // Q pressed and sitting
        if (Input.GetKey("q")) {
            ScenesManager.Instance.LoadPreClassScene();
        } 
    }
}
