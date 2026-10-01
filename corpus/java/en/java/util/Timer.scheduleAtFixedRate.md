---
id: "java-en-function-timer-scheduleatfixedrate"
language: "java"
lang: "en"
category: "function"
name: "Timer.scheduleAtFixedRate"
signature: "public void scheduleAtFixedRate(TimerTask task, long delay, long period)"
title: "Timer.scheduleAtFixedRate"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.scheduleAtFixedRate

```java
public void scheduleAtFixedRate(TimerTask task, long delay, long period)
```

Schedules the specified task for repeated fixed-rate execution,
 beginning after the specified delay.  Subsequent executions take place
 at approximately regular intervals, separated by the specified period.

 

In fixed-rate execution, each execution is scheduled relative to the
 scheduled execution time of the initial execution.  If an execution is
 delayed for any reason (such as garbage collection or other background
 activity), two or more executions will occur in rapid succession to
 "catch up."  In the long run, the frequency of execution will be
 exactly the reciprocal of the specified period (assuming the system
 clock underlying `Object.wait(long)` is accurate).

 

Fixed-rate execution is appropriate for recurring activities that
 are sensitive to absolute time, such as ringing a chime every
 hour on the hour, or running scheduled maintenance every day at a
 particular time.  It is also appropriate for recurring activities
 where the total time to perform a fixed number of executions is
 important, such as a countdown timer that ticks once every second for
 ten seconds.  Finally, fixed-rate execution is appropriate for
 scheduling multiple repeating timer tasks that must remain synchronized
 with respect to one another.

**参数**

- **task** — task to be scheduled.
- **delay** — delay in milliseconds before task is to be executed.
- **period** — time in milliseconds between successive task executions.

**异常**

- **IllegalArgumentException** — if `delay < 0`, or `delay + System.currentTimeMillis() < 0`, or `period <= 0`
- **IllegalStateException** — if task was already scheduled or cancelled, timer was cancelled, or timer thread terminated.
- **NullPointerException** — if `task` is null
