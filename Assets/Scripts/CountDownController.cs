using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CountDownController : MonoBehaviour
{
    public int countdownTime;
    public Text countdownDisplay;

    IEnumerator CountDownToStart() {
        while (countdownTime > 0)
        {
            countdownDisplay.text = "Class will start in " + countdownTime.ToString();
            yield return new WaitForSeconds(1f);

            countdownTime--;
        }

        countdownDisplay.text = "Class is starting!";

        yield return new WaitForSeconds(3f);
        countdownDisplay.gameObject.SetActive(false);

        ScenesManager.Instance.LoadDuringClassScene();

        
        
        
    }

    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(CountDownToStart());
    }

}
