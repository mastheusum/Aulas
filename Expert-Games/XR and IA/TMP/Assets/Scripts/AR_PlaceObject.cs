using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class AR_PlaceObject : MonoBehaviour
{
    public GameObject spawnPlaceObject;
    public GameObject objectToSpawn;

    ARRaycastManager arOrigin;
    Pose spawnPose;
    bool spawnPoseIsValid = false;

    void Start()
    {
        arOrigin = FindObjectOfType<ARRaycastManager>();
    }

    void Update()
    {
        GetPlanePosition();
        UpdateSpawnPlacePosition();

        if (spawnPoseIsValid && Input.touchCount > 0 &&
        Input.GetTouch(0).phase == TouchPhase.Began)
        {
            SpawnObject();
        }
    }

    void GetPlanePosition()
    {
        Vector2 screenCenter = new Vector2(Screen.width/2, Screen.height/2);
        List<ARRaycastHit> hits = new List<ARRaycastHit>();

        arOrigin.Raycast(screenCenter, hits, TrackableType.Planes);

        if (hits.Count > 0)
            spawnPoseIsValid = true;

        if (spawnPoseIsValid)
        {
            spawnPose = hits[0].pose;

            var cameraForward = Camera.current.transform.forward;
            var cameraBearing = new Vector3(cameraForward.x, 0, cameraForward.z).normalized;

            spawnPose.rotation = Quaternion.LookRotation(cameraBearing);
        }
    }

    void UpdateSpawnPlacePosition()
    {
        if (spawnPoseIsValid)
        {
            spawnPlaceObject.SetActive(true);
            spawnPlaceObject.transform.SetPositionAndRotation(spawnPose.position, spawnPose.rotation);
        }
        else
        {
            spawnPlaceObject.SetActive(false);
        }
    }

    void SpawnObject()
    {
        Instantiate(objectToSpawn, spawnPose.position, spawnPose.rotation);
    }
}

