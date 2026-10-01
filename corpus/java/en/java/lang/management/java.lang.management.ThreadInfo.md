---
id: "java-en-function-java-lang-management-threadinfo"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.ThreadInfo"
title: "ThreadInfo"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo

Thread information. `ThreadInfo` contains the information
 about a thread including:
 General thread information
 
   
- Thread ID.
   
- Name of the thread.
   
- Whether a thread is a daemon thread
 

 Execution information
 
   
- Thread state.
   
- The object upon which the thread is blocked due to:
       
       
- waiting to enter a synchronization block/method, or
       
- waiting to be notified in a `wait Object.wait` method,
           or
       
- parking due to a `park
           LockSupport.park` call.
       

   
   
- The ID of the thread that owns the object
       that the thread is blocked.
   
- Stack trace of the thread.
   
- List of object monitors locked by the thread.
   
- List of 
       ownable synchronizers locked by the thread.
   
- Thread priority
 

 Synchronization Statistics
 
   
- The number of times that the thread has blocked for
       synchronization or waited for notification.
   
- The accumulated elapsed time that the thread has blocked
       for synchronization or waited for notification
       since `setThreadContentionMonitoringEnabled
       thread contention monitoring`
       was enabled. Some Java virtual machine implementation
       may not support this.  The
       `isThreadContentionMonitoringSupported`
       method can be used to determine if a Java virtual machine
       supports this.
 

 

This thread information class is designed for use in monitoring of
 the system, not for synchronization control.

 MXBean Mapping
 `ThreadInfo` is mapped to a `CompositeData CompositeData`
 with attributes as specified in
 the `from from` method.

**参见**

- ThreadMXBean#getThreadInfo
- ThreadMXBean#dumpAllThreads

> *Since 1.5*
