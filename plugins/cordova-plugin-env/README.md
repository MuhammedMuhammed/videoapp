<!---
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
-->

# cordova-plugin-env

| Download Activity | Travis CI | Snyk |
|:-:|:-:|:-:|
| [![npm](https://img.shields.io/npm/dm/cordova-plugin-env.svg)](https://www.npmjs.com/package/cordova-plugin-env) | [![Build Status](https://travis-ci.org/adapt-it/cordova-env.svg?branch=master)](https://travis-ci.org/adapt-it/cordova-env) | [![Known Vulnerabilities](https://snyk.io/test/github/adapt-it/cordova-env/badge.svg)](https://snyk.io/test/github/adapt-it/cordova-env) |

A small Cordova plugin that exposes Android's Environment object directories.

This plugin defines a global `Environment` object, which provides access to the common directories available on Android's Environment object. The `Environment` object is available from the `navigator` object after the `deviceready` event fires.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.Env);
    }

## Installation

From the Command line:

    cordova plugin add cordova-plugin-env

Config.xml for PhoneGap Build:

    <gap:plugin name="cordova-plugin-env" source="npm" />
    
These commands will install the plugin from npm. You can find this plugin up on npm [here](https://www.npmjs.com/package/cordova-plugin-env), or by searching for `ecosystem:cordova` in the npm registry like [this](https://www.npmjs.com/search?q=ecosystem%3Acordova). 


## Supported Platform

- Android

# Env

The `Env` object provides a way to access the directories exposed by the Environment object.

## Methods

Currently this plugin provides Four methods:

- getExternalStorageState
- isExternalStorageEmulated
- isExternalStorageRemovable
- getDirectory

### getExternalStorageState

**Parameters:** 

- **successCallback**: Callback that returns the string value of the External Storage State. See https://developer.android.com/reference/android/os/Environment.html#getExternalStorageState() for possible result values.
- **errorCallback:** Callback that executes if an error occurs during the call.

### Example

    if (navigator.Env) {
        console.log("Env object in navigator");
        navigator.Env.getExternalStorageState(
            function (state) {
                if (state) {
                    console.log("External storage state: " + state);
                }
            },
            function (error) {
                console.log("getExternalStorageState error: " + error);
            }
        );
    } else {
        console.log("Plugin error: Env plugin not found (is it installed?)");
    }

### isExternalStorageEmulated

**Parameters:** 

- **successCallback**: Callback that returns "true" if the external storage is emulated.
- **errorCallback:** Callback that executes if an error occurs during the call.

### Example

    if (navigator.Env) {
        console.log("Env object in navigator");
        navigator.Env.isExternalStorageEmulated(
            function (result) {
                if (result) {
                    console.log("isExternalStorageEmulated returns: " + result);
                }
            },
            function (error) {
                console.log("isExternalStorageEmulated error: " + error);
            }
        );
    } else {
        console.log("Plugin error: Env plugin not found (is it installed?)");
    }

### isExternalStorageRemovable

**Parameters:** 

- **successCallback**: Callback that returns "true" if the external storage is removable.
- **errorCallback:** Callback that executes if an error occurs during the call.

### Example

    if (navigator.Env) {
        console.log("Env object in navigator");
        navigator.Env.isExternalStorageRemovable(
            function (result) {
                if (result) {
                    console.log("isExternalStorageRemovable returns: " + result);
                }
            },
            function (error) {
                console.log("isExternalStorageRemovable error: " + error);
            }
        );
    } else {
        console.log("Plugin error: Env plugin not found (is it installed?)");
    }

### getDirectory

**Parameters:** 

- **directory**: (string) Special directory to look up (see "Directories" below).
- **successCallback**: Callback that returns the string name of the specified directory on this device.
- **errorCallback:** Callback that executes if an error occurs during the call.

### Directories

Following are valid string values for the **directory** parameter above:

| String value | Android directory | 
|:-:|:-:|
| "Alarms" | DIRECTORY_ALARMS |
| "DCIM" | DIRECTORY_DCIM |
| "Documents" | DIRECTORY_DOCUMENTS |
| "Downloads" | DIRECTORY_DOWNLOADS |
| "Movies" | DIRECTORY_MOVIES |
| "Music" | DIRECTORY_MUSIC |
| "Notifications" | DIRECTORY_NOTIFICATIONS |
| "Pictures" | DIRECTORY_PICTURES |
| "Podcasts" | DIRECTORY_PODCASTS |
| "Ringtones" | DIRECTORY_RINGTONES |

### Example

    if (navigator.Env) {
        console.log("Env object in navigator");
        navigator.Env.getDirectory("Documents", 
            function (path) {
                if (path) {
                    console.log("getDirectory(Documents) returns: " + path);
                }
            },
            function (error) {
                console.log("getDirectory error: " + error);
            }
        );
    } else {
        console.log("Plugin error: Env plugin not found (is it installed?)");
    }

### getExternalStoragePublicDirectory

**DEPRECATION WARNING**
This method has been deprecated on Android API 29 and later. 

**Parameters:** 

- **directory**: (string) Directory to look up. This needs to be one of the strings returned by the getDirectory() call above.
- **successCallback**: Callback that returns the full path string of the specified directory on this device.
- **errorCallback:** Callback that executes if an error occurs during the call.


### Example

    if (navigator.Env) {
        console.log("Env object in navigator");
        // attempt to get Environment.DIRECTORY_DOWNLOADS
        navigator.Env.getDirectory("Downloads", 
            function (dirName) {
                if (dirName) {
                    console.log("getDirectory(Downloads) returns: " + dirName);
                    // success -- now try to get the full path for the shared Downloads directory
                    navigator.Env.getExternalStoragePublicDirectory(dirName,
                        function(fullPath) {
                            console.log("getExternalStoragePublicDirectory(Downloads) returns: " + fullPath);
                        }, function (error) {
                            console.log("getExternalStoragePublicDirectory error: " + error);
                        }
                    );
                }
            },
            function (error) {
                console.log("getDirectory error: " + error);
            }
        );
    } else {
        console.log("Plugin error: Env plugin not found (is it installed?)");
    }
