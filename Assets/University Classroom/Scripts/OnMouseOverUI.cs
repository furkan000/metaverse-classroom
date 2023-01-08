using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

 public class OnMouseOverUI : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler{
     private bool mouse_over = false;
    public Texture2D cursorTexture;
    public CursorMode cursorMode = CursorMode.Auto;
    public Vector2 hotSpot = Vector2.zero;
     void Update()
     {
         if (mouse_over)
         {
           Cursor.SetCursor(cursorTexture, hotSpot, cursorMode);
         }
         Cursor.SetCursor(null, Vector2.zero, cursorMode);
     }

     public void OnPointerEnter(PointerEventData eventData)
     {
         mouse_over = true;
         Debug.Log("Mouse enter");
     }

     public void OnPointerExit(PointerEventData eventData)
     {
         mouse_over = false;
         Debug.Log("Mouse exit");
     }
 }