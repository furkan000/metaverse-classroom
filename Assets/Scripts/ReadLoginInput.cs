using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ReadLoginInput : MonoBehaviour
{

    private string username;
    private string password;
    
    public void ReadUsername(string str) {
        username = str;
    }

    public void ReadPassword(string str) {
        password = str;
    }

    public void Login() {
        RoleManager.Init(username, password);
    }
}
