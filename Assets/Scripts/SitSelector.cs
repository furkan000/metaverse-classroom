using UnityEngine;
 using System.Collections;
 using Random = System.Random;
 
public class SitSelector : MonoBehaviour {

    public Camera[] cameras;
    public bool isTeacher = true;
    private int currentCameraIndex;

    public static int RandomNumber(int min, int max) {
       Random random = new Random();
       return random.Next(min, max);
    }
    
    // Use t$$anonymous$$s for initialization
    void Start () {
        
        //Turn all cameras off, except the first default one
        for (int i=0; i<cameras.Length; i++) 
        {
            cameras[i].gameObject.SetActive(false);
        }

        if (isTeacher) {
            currentCameraIndex = 0;
            cameras[currentCameraIndex].gameObject.SetActive(true);
            Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent<Camera>().name + ", is now enabled");

        } else {
            currentCameraIndex = RandomNumber(1, cameras.Length);

            if (currentCameraIndex >= 1 && currentCameraIndex < cameras.Length) {
                cameras[currentCameraIndex].gameObject.SetActive(true);
                Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent<Camera>().name + ", is now enabled");
            } else {
                Debug.Log ("Camera with name: " + currentCameraIndex + ", could not be enabled");
            }
        }
        
    }
}
