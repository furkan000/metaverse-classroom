using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using Random = System.Random;

public class ScenesManager : MonoBehaviour
{
    public enum Scene {
        MainScene,
        Sitting,
        PreClass,
        DuringClass
    }

    public static ScenesManager Instance; 
    // Start is called before the first frame update
    
    void Awake()
    {
        Instance = this;
    }


    public void LoadScene(Scene scene) {
        SceneManager.LoadScene(scene.ToString());
    }

    public void LoadMainScene() {
        SceneManager.LoadScene(Scene.MainScene.ToString());
    }
    
    public void LoadSittingScene() {
        SceneManager.LoadScene(Scene.Sitting.ToString());
    }

    public void LoadPreClassScene() {
        SceneManager.LoadScene(Scene.PreClass.ToString());
    }

    public void LoadDuringClassScene() {        
        SceneManager.LoadScene(Scene.DuringClass.ToString());
    }
}
