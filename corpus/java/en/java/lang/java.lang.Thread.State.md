---
id: "java-en-function-java-lang-thread-state"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Thread.State"
title: "State"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# State

A thread state.  A thread can be in one of the following states:
 
 
- `NEW`

     A thread that has not yet started is in this state.
     
 
- `RUNNABLE`

     A thread executing in the Java virtual machine is in this state.
     
 
- `BLOCKED`

     A thread that is blocked waiting for a monitor lock
     is in this state.
     
 
- `WAITING`

     A thread that is waiting indefinitely for another thread to
     perform a particular action is in this state.
     
 
- `TIMED_WAITING`

     A thread that is waiting for another thread to perform an action
     for up to a specified waiting time is in this state.
     
 
- `TERMINATED`

     A thread that has exited is in this state.
     
 

 

 A thread can be in only one state at a given point in time.
 These states are virtual machine states which do not reflect
 any operating system thread states.

**参见**

- #getState

> *Since 1.5*
