using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ButtonHandler : MonoBehaviour
{
    public void OnLogin() {
        ScenesManager.Instance.LoadPreClassScene();
    }
}
