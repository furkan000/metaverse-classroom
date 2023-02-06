using UnityEngine;
 using System.Collections;
 using Random = System.Random;
 
 public class CameraController : MonoBehaviour {
     public Camera[] cameras;
     private int currentCameraIndex;

     public static int RandomNumber(int min, int max) {
       Random random = new Random();
       return random.Next(min, max);
    }
     
     // Use t$$anonymous$$s for initialization
     void Start () {
        /*  currentCameraIndex = 0;
         
         //Turn all cameras off, except the first default one
         for (int i=1; i<cameras.Length; i++) 
         {
             cameras[i].gameObject.SetActive(false);
         }
         
         //If any cameras were added to the controller, enable the first one
         if (cameras.Length>0)
         {
             cameras [0].gameObject.SetActive (true);
             Debug.Log ("Camera with name: " + cameras [0].GetComponent<Camera>().name + ", is now enabled");
         } */

         for (int i=0; i<cameras.Length; i++) 
        {
            cameras[i].gameObject.SetActive(false);
        }

        currentCameraIndex = RandomNumber(0, cameras.Length);

        if (currentCameraIndex >= 0 && currentCameraIndex < cameras.Length) {
            cameras[currentCameraIndex].gameObject.SetActive(true);
            Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent<Camera>().name + ", is now enabled");
        } else {
            Debug.Log ("Camera with name: " + currentCameraIndex + ", could not be enabled");
        }
     }
     
     // Update is called once per frame
     void Update () {
         //If the c button is pressed, switch to the next camera
         //Set the camera at the current index to inactive, and set the next one in the array to active
         //When we reach the end of the camera array, move back to the beginning or the array.
         /* if (Input.GetKeyDown(KeyCode.C))
         {
             currentCameraIndex ++;
             Debug.Log ("C button has been pressed. Switc$$anonymous$$ng to the next camera");
             if (currentCameraIndex < cameras.Length)
             {
                 cameras[currentCameraIndex-1].gameObject.SetActive(false);
                 cameras[currentCameraIndex].gameObject.SetActive(true);
                 Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent<Camera>().name + ", is now enabled");
             }
             else
             {
                 cameras[currentCameraIndex-1].gameObject.SetActive(false);
                 currentCameraIndex = 0;
                 cameras[currentCameraIndex].gameObject.SetActive(true);
                 Debug.Log ("Camera with name: " + cameras [currentCameraIndex].GetComponent<Camera>().name + ", is now enabled");
             }
         } */
     }
 }
