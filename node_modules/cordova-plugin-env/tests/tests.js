/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/* jshint jasmine: true */

exports.defineAutoTests = function () {
    "use strict";
    
    describe('Env (navigator.Env)', function () {
        
        it("should exist", function () {
            expect(navigator.Env).toBeDefined();
        });
        
        it("should contain a getExternalStorageState function", function () {
            expect(typeof navigator.Env.getExternalStorageState).toBeDefined();
            expect(typeof navigator.Env.getExternalStorageState).toBe("function");
        });

        it("should contain a isExternalStorageEmulated function", function () {
            expect(typeof navigator.Env.isExternalStorageEmulated).toBeDefined();
            expect(typeof navigator.Env.isExternalStorageEmulated).toBe("function");
        });

        it("should contain a isExternalStorageRemovable function", function () {
            expect(typeof navigator.Env.isExternalStorageRemovable).toBeDefined();
            expect(typeof navigator.Env.isExternalStorageRemovable).toBe("function");
        });
        
        it("should contain a getDirectory function", function () {
            expect(typeof navigator.Env.getDirectory).toBeDefined();
            expect(typeof navigator.Env.getDirectory).toBe("function");
        });
    });
};
    
exports.defineManualTests = function (contentEl, createActionButton) {
    "use strict";
    
    var logMessage = function (message, color) {
        var log = document.getElementById('info'),
            logLine = document.createElement('div');

        if (color) {
            logLine.style.color = color;
        }
        logLine.innerHTML = message;
        log.appendChild(logLine);
    },

        clearLog = function () {
            var log = document.getElementById('info');
            log.innerHTML = '';
        },

        getExternalStorageStateTest = function () {
            clearLog();
            console.log("getExternalStorageStateTest()");
            if (navigator.Env) {
                navigator.Env.getExternalStorageState(
                    function (result) {
                        logMessage("getExternalStorageStateTest() - value returned: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    }
                );
            } else {
                console.log("Plugin error: Environment plugin not found (is it installed?)");
            }
        },

        isExternalStorageEmulatedTest = function () {
            clearLog();
            console.log("isExternalStorageEmulatedTest()");
            if (navigator.Env) {
                navigator.Env.isExternalStorageEmulated(
                    function (result) {
                        logMessage("isExternalStorageEmulatedTest() - value returned: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    }
                );
            } else {
                console.log("Plugin error: Environment plugin not found (is it installed?)");
            }
        },

        isExternalStorageRemovableTest = function () {
            clearLog();
            console.log("isExternalStorageRemovableTest()");
            if (navigator.Env) {
                navigator.Env.isExternalStorageRemovable(
                    function (result) {
                        logMessage("isExternalStorageRemovableTest() - value returned: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    }
                );
            } else {
                console.log("Plugin error: Environment plugin not found (is it installed?)");
            }
        },
        
        getDirectoryTest = function () {
            clearLog();
            console.log("getDirectoryTest()");
            if (navigator.Env) {
                navigator.Env.getDirectory("Alarms",
                    function (result) {
                        logMessage("Alarms directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("DCIM",
                    function (result) {
                        logMessage("DCIM directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Documents",
                    function (result) {
                        logMessage("Documents directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Downloads",
                    function (result) {
                        logMessage("Downloads directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Movies",
                    function (result) {
                        logMessage("Movies directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Music",
                    function (result) {
                        logMessage("Music directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Notifications",
                    function (result) {
                        logMessage("Notifications directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Pictures",
                    function (result) {
                        logMessage("Pictures directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Podcasts",
                    function (result) {
                        logMessage("Podcasts directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
                navigator.Env.getDirectory("Ringtones",
                    function (result) {
                        logMessage("Ringtones directory: " + result);
                    },
                    function (error) {
                        logMessage(error);
                    });
            } else {
                console.log("PLugin error: Environment plugin not found (is is installed?)");
            }
        },
        
        device_tests = '<p/><div id="cdv_storage_state"></div><p/><div id="cdv_storage_emulated"></div><p/><div id="cdv_storage_removable"></div><p/><div id="cdv_directories"></div>';
    
    contentEl.innerHTML = '<div id="info"></div>' + device_tests;

    createActionButton('getExternalStorageState', function () {
        getExternalStorageStateTest();
    }, "cdv_storage_state");

    createActionButton('isExternalStorageEmulated', function () {
        isExternalStorageEmulatedTest();
    }, "cdv_storage_emulated");

    createActionButton('isExternalStorageRemovable', function () {
        isExternalStorageRemovableTest();
    }, "cdv_storage_removable");

    createActionButton('getDirectories', function () {
        getDirectoryTest();
    }, "cdv_directories");
};
