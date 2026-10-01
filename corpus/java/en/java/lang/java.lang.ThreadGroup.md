---
id: "java-en-function-java-lang-threadgroup"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ThreadGroup"
title: "ThreadGroup"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ThreadGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadGroup

A thread group represents a set of threads. In addition, a thread group can
 also include other thread groups. The thread groups form a tree in which
 every thread group except the initial thread group has a parent.

 

 A thread group has a name and maximum priority. The name is specified
 when creating the group and cannot be changed. The group's maximum priority
 is the maximum priority for threads created in the group. It is initially
 inherited from the parent thread group but may be changed using the `setMaxPriority(int) setMaxPriority` method.

 

 A thread group is weakly 
 reachable from its parent group so that it is eligible for garbage
 collection when there are no `isAlive() live` threads in the
 group and the thread group is otherwise unreachable.

 

 Unless otherwise specified, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be thrown.

 Thread groups and virtual threads
 The Java runtime creates a special thread group for
 virtual threads. This group is
 returned by the `getThreadGroup() Thread.getThreadGroup` method
 when invoked on a virtual thread. The thread group differs to other thread
 groups in that its maximum priority is fixed and cannot be changed with the
 `setMaxPriority(int) setMaxPriority` method.
 Virtual threads are not included in the estimated thread count returned by the
 `activeCount() activeCount` method, are not enumerated by the `enumerate(Thread[]) enumerate` method, and are not interrupted by the `interrupt() interrupt` method.

 Thread groups provided a way in early Java releases to group threads and provide
 a form of job control for threads. Thread groups supported the isolation
 of applets and defined methods intended for diagnostic purposes. It should be
 rare for new applications to create ThreadGroups and interact with this API.

> *Since 1.0*
