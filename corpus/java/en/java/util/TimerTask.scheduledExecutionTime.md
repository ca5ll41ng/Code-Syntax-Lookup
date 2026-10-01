---
id: "java-en-function-timertask-scheduledexecutiontime"
language: "java"
lang: "en"
category: "function"
name: "TimerTask.scheduledExecutionTime"
signature: "public long scheduledExecutionTime()"
title: "TimerTask.scheduledExecutionTime"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimerTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerTask.scheduledExecutionTime

```java
public long scheduledExecutionTime()
```

Returns the scheduled execution time of the most recent
 actual execution of this task.  (If this method is invoked
 while task execution is in progress, the return value is the scheduled
 execution time of the ongoing task execution.)

 

This method is typically invoked from within a task's run method, to
 determine whether the current execution of the task is sufficiently
 timely to warrant performing the scheduled activity:
 
```
`public void run() {
       if (System.currentTimeMillis() - scheduledExecutionTime() >=
           MAX_TARDINESS)
               return;  // Too late; skip this execution.
       // Perform the task
   `
 }
```

 This method is typically not used in conjunction with
 fixed-delay execution repeating tasks, as their scheduled
 execution times are allowed to drift over time, and so are not terribly
 significant.

**返回**

- the time at which the most recent execution of this task was scheduled to occur, in the format returned by Date.getTime(). The return value is undefined if the task has yet to commence its first execution.

**参见**

- Date#getTime()
