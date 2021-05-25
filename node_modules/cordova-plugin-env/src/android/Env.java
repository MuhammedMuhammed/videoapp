/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/

package org.adaptit.cordova.environment;
 
import android.os.Environment;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Env extends CordovaPlugin {
    public static final String GETEXTERNALSTORAGESTATE = "getExternalStorageState";
    public static final String EXTERNALSTORAGEEMULATED = "isExternalStorageEmulated";
    public static final String EXTERNALSTORAGEREMOVABLE = "isExternalStorageRemovable";
    public static final String GETEXTERNALSTORAGEPUBLICDIRECTORY = "getExternalStoragePublicDirectory";
    public static final String GETDIRECTORY = "getDirectory";
    public static final String DIRECTORY_ALARMS = "Alarms";
    public static final String DIRECTORY_DCIM = "DCIM";
    public static final String DIRECTORY_DOCUMENTS = "Documents";
    public static final String DIRECTORY_DOWNLOADS = "Downloads";
    public static final String DIRECTORY_MOVIES = "Movies";
    public static final String DIRECTORY_MUSIC = "Music";
    public static final String DIRECTORY_NOTIFICATIONS = "Notifications";
    public static final String DIRECTORY_PICTURES = "Pictures";
    public static final String DIRECTORY_PODCASTS = "Podcasts";
    public static final String DIRECTORY_RINGTONES = "Ringtones";
    public CallbackContext callbackContext;

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        try {
            if (action.equals(GETEXTERNALSTORAGESTATE)) {
                cordova.getThreadPool().execute(
                    new Runnable() {
                        public void run() {
                            final String results = Environment.getExternalStorageState();
                            System.out.println("results: " + results.toString());
                            callbackContext.success(results);
                        }
                    }
                );
                return true;
            } else if (action.equals(EXTERNALSTORAGEEMULATED)) {
                cordova.getThreadPool().execute(
                    new Runnable() {
                        public void run() {
                            final String results = String.valueOf(Environment.isExternalStorageEmulated());
                            System.out.println("results: " + results.toString());
                            callbackContext.success(results);
                        }
                    }
                );
                return true;
            } else if (action.equals(EXTERNALSTORAGEREMOVABLE)) {
                cordova.getThreadPool().execute(
                    new Runnable() {
                        public void run() {
                            final String results = String.valueOf(Environment.isExternalStorageRemovable());
                            System.out.println("results: " + results.toString());
                            callbackContext.success(results);
                        }
                    }
                );
                return true;
            } else if (action.equals(GETDIRECTORY)) {
                final String strDir = args.getString(0);
                cordova.getThreadPool().execute(
                    new Runnable() {
                        public void run() {
                            final String results = getDirectory(strDir);
                            System.out.println("results: " + results.toString());
                            callbackContext.success(results);
                        }
                    }
                );
                return true;
            } else if (action.equals(GETEXTERNALSTORAGEPUBLICDIRECTORY)) {
                final String strDir = args.getString(0);
                System.out.println("WARNING: getExternalStoragePublidDirectory() is deprecated as of API level 29.");
                cordova.getThreadPool().execute(
                    new Runnable() {
                        public void run() {
                            final String results = String.valueOf(Environment.getExternalStoragePublicDirectory(strDir));
                            System.out.println("results: " + results.toString());
                            callbackContext.success(results);
                        }
                    }
                );
                return true;
            } else {
                return false;
            }
        } catch(Exception e) {
            System.err.println("Exception: " + e.getMessage());
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        } 
        return true;
	}
    
    private String getDirectory(String path) {
        System.out.println("getDirectory(): entry");
        String result = "";
        // note: switch() not supported until -source 1.7
        if (path.equals(DIRECTORY_ALARMS)) {
            result = Environment.DIRECTORY_ALARMS;
        } else if (path.equals(DIRECTORY_DCIM)) {
            result = Environment.DIRECTORY_DCIM;
        } else if (path.equals(DIRECTORY_DOCUMENTS)) {
            result = Environment.DIRECTORY_DOCUMENTS;
        } else if (path.equals(DIRECTORY_DOWNLOADS)) {
            result = Environment.DIRECTORY_DOWNLOADS;
        } else if (path.equals(DIRECTORY_MOVIES)) {
            result = Environment.DIRECTORY_MOVIES;
        } else if (path.equals(DIRECTORY_MUSIC)) {
            result = Environment.DIRECTORY_MUSIC;            
        } else if (path.equals(DIRECTORY_NOTIFICATIONS)) {
            result = Environment.DIRECTORY_NOTIFICATIONS;
        } else if (path.equals(DIRECTORY_PICTURES)) {
            result = Environment.DIRECTORY_PICTURES;
        } else if (path.equals(DIRECTORY_PODCASTS)) {
            result = Environment.DIRECTORY_PODCASTS;
        } else if (path.equals(DIRECTORY_RINGTONES)) {
            result = Environment.DIRECTORY_RINGTONES;
        } else {
            result = "";
        }
        return result; 
    }

}

