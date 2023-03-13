using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraSelector : MonoBehaviour
{
    public Camera teacherCam;
    public Camera studentCam;
    private int currentCameraIndex;

    // Start is called before the first frame update
    void Start()
    {
        teacherCam.gameObject.SetActive(false);
        studentCam.gameObject.SetActive(false);

        if (RoleManager.username == "teacher" || RoleManager.username == "Teacher") {
            teacherCam.gameObject.SetActive(true);
        } else {
            studentCam.gameObject.SetActive(true); // only one student for now
        }
    }
}
