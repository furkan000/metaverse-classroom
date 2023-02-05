using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RoleManager : MonoBehaviour
{
    public static RoleManager Instance;

    public static string username;
    public static string password;

    void Awake() {
        // DontDestroyOnLoad(transform.gameObject);
        Instance = this;
    }

    public static void Init(string usrn, string pwd) {
        username = usrn;
        password = pwd;

        SceneManager.LoadScene("DuringClass");

        Debug.Log("RM: Username is " + username);
        Debug.Log("RM: Password is " + password);
    }
}
