/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
 
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

       /***
         * @mExternalDirectory getting Path that used by external storage
         *it has been checked in different devices assuming it may has differd directory name
         *according to directory a path to file would be created
         */
         let mExternalDirectory;
       
            navigator.Env.getExternalStoragePublicDirectory("Download",
                function(fullPath) {
                    try {     
                    let videoele = document.getElementById("VideoPlaying");      
                    let source = document.createElement('source');
                    source.setAttribute('src', fullPath +"/videofortest.mp4");
              
                    console.log("getExternalStoragePublicDirectory(Downloads) returns: " + fullPath);
                    videoele.appendChild(source);
                     videoele.play();
                    alert(fullPath);
                } catch (error) {
                    alert(error)
                }
                 

                }, function (error) {
                alert(error)
                console.log("getExternalStoragePublicDirectory error: " + error);

                }
            );
            // mExternalDirectory=navigator.Env.getExternalStorageDirectory()
            // .getAbsolutePath();
                
 
         
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
     getSdRefAndEmbed:function(){
        cordova.plugins.diagnostic.getExternalSdCardDetails(function(details){
        details.forEach(function(detail){
            if(detail.type === "root"){
            cordova.file.externalSdCardRoot = detail.filePath;
            embedMedia();
            }
        });
        }, function(error){
    