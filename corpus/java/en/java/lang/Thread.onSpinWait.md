---
id: "java-en-function-thread-onspinwait"
language: "java"
lang: "en"
category: "function"
name: "Thread.onSpinWait"
signature: "public static void onSpinWait()"
title: "Thread.onSpinWait"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.onSpinWait

```java
public static void onSpinWait()
```

Indicates that the caller is momentarily unable to progress, until the
 occurrence of one or more actions on the part of other activities. By
 invoking this method within each iteration of a spin-wait loop construct,
 the calling thread indicates to the runtime that it is busy-waiting.
 The runtime may take action to improve the performance of invoking
 spin-wait loop constructions.

 As an example consider a method in a class that spins in a loop until
 some flag is set outside of that method. A call to the `onSpinWait`
 method should be placed inside the spin loop.
 {@snippet :
     class EventHandler {
         volatile boolean eventNotificationNotReceived;
         void waitForEventAndHandleIt() {
             while ( eventNotificationNotReceived ) {
                 Thread.onSpinWait();
             }
             readAndProcessEvent();
         }

         void readAndProcessEvent() {
             // Read event from some source and process it
              . . .
         }
     }
 }
 

 The code above would remain correct even if the `onSpinWait`
 method was not called at all. However on some architectures the Java
 Virtual Machine may issue the processor instructions to address such
 code patterns in a more beneficial way.

> *Since 9*
