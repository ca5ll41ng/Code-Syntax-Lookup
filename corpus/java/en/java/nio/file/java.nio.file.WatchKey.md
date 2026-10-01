---
id: "java-en-function-java-nio-file-watchkey"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.WatchKey"
title: "WatchKey"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/WatchKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WatchKey

A token representing the registration of a `Watchable watchable` object
 with a `WatchService`.

 

 A watch key is created when a watchable object is registered with a watch
 service. The key remains `isValid valid` until:
 
   
-  It is cancelled, explicitly, by invoking its `cancel cancel`
     method, or
   
-  Cancelled implicitly, because the object is no longer accessible,
     or 
   
-  By `close closing` the watch service. 
 

 

 A watch key has a state. When initially created the key is said to be
 ready. When an event is detected then the key is signalled
 and queued so that it can be retrieved by invoking the watch service's `poll() poll` or `take() take` methods. Once
 signalled, a key remains in this state until its `reset reset` method
 is invoked to return the key to the ready state. Events detected while the
 key is in the signalled state are queued but do not cause the key to be
 re-queued for retrieval from the watch service. Events are retrieved by
 invoking the key's `pollEvents pollEvents` method. This method
 retrieves and removes all events accumulated for the object. When initially
 created, a watch key has no pending events. Typically events are retrieved
 when the key is in the signalled state leading to the following idiom:

 {@snippet lang=java :
     for (;;) {
         // retrieve key
         WatchKey key = watcher.take();

         // process events
         for (WatchEvent<?> event: key.pollEvents()) {
             :
         }

         // reset the key
         boolean valid = key.reset();
         if (!valid) {
             // object no longer registered
         }
     }
 }

 

 Watch keys are safe for use by multiple concurrent threads. Where there
 are several threads retrieving signalled keys from a watch service then care
 should be taken to ensure that the `reset` method is only invoked after
 the events for the object have been processed. This ensures that one thread
 is processing the events for an object at any time.

> *Since 1.7*
