using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraSelector : MonoBehaviour
{
    public Camera teacherCam;
    public Camera[] studentCams;
    private int currentCameraIndex;

    // Start is called before the first frame update
    void Start()
    {
        teacherCam.gameObject.SetActive(false);
        for (int i = 0; i < studentCams.Length; i++) 
        {
            studentCams[i].gameObject.SetActive(false);
        }

        if (RoleManager.username == "teacher") {
            teacherCam.gameObject.SetActive(true);
        } else {
            studentCams[0].gameObject.SetActive(true); // only one student for now
        }
    }
}
