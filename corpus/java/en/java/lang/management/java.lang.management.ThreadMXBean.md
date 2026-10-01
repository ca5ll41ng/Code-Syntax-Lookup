---
id: "java-en-function-java-lang-management-threadmxbean"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.ThreadMXBean"
title: "ThreadMXBean"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean

The management interface for the thread system of the Java virtual machine.

 

 `ThreadMXBean` supports monitoring and management of
 `#platform-threads platform threads` in the Java
 virtual machine. Platform threads are typically mapped to kernel
 threads scheduled by the operating system.  `ThreadMXBean`
 does not support monitoring or management of `#virtual-threads virtual threads`.

 

 A Java virtual machine has a single instance of the implementation
 class of this interface.  This instance implementing this interface is
 an MXBean
 that can be obtained by calling
 the `getThreadMXBean` method or
 from the `getPlatformMBeanServer
 platform MBeanServer` method.

 

The `ObjectName` for uniquely identifying the MXBean for
 the thread system within an MBeanServer is:
 
    `THREAD_MXBEAN_NAME
           java.lang:type=Threading`
 

 It can be obtained by calling the
 `getObjectName` method.

 Thread ID
 Thread ID is a positive long value returned by calling the thread's
 `threadId` method.
 The thread ID is unique during its lifetime.  When the thread terminates,
 its thread ID may be reused.

 

 Some methods in this interface take a thread ID or an array
 of thread IDs as the input parameter and return per-thread information.

 Thread CPU time
 A Java virtual machine implementation may support measuring the CPU time
 for the current platform thread, for any platform thread, or for no threads.

 

 The `isThreadCpuTimeSupported` method can be used to determine
 if a Java virtual machine supports measuring of the CPU time for any
 platform thread.  The `isCurrentThreadCpuTimeSupported` method
 can be used to determine if a Java virtual machine supports measuring of
 the CPU time with the `getCurrentThreadCpuTime` and
 `getCurrentThreadUserTime` methods from a platform thread.

 

 The CPU time provided by this interface has nanosecond precision
 but not necessarily nanosecond accuracy.

 

 A Java virtual machine may disable CPU time measurement
 by default.
 The `isThreadCpuTimeEnabled` and `setThreadCpuTimeEnabled`
 methods can be used to test if CPU time measurement is enabled
 and to enable/disable this support respectively.
 Enabling thread CPU measurement could be expensive in some
 Java virtual machine implementations.

 Thread Contention Monitoring
 Some Java virtual machines may support thread contention monitoring.
 When thread contention monitoring is enabled, the accumulated elapsed
 time that the thread has blocked for synchronization or waited for
 notification will be collected and returned in the
 `ThreadInfo` object.
 

 The `isThreadContentionMonitoringSupported` method can be used to
 determine if a Java virtual machine supports thread contention monitoring.
 The thread contention monitoring is disabled by default.  The
 `setThreadContentionMonitoringEnabled` method can be used to enable
 thread contention monitoring.

 Synchronization Information and Deadlock Detection
 Some Java virtual machines may support monitoring of
 `isObjectMonitorUsageSupported object monitor usage` and
 `isSynchronizerUsageSupported ownable synchronizer usage`.
 The `getThreadInfo` and
 `dumpAllThreads` methods can be used to obtain the thread stack trace
 and synchronization information including which
 `LockInfo lock` a thread is blocked to
 acquire or waiting on and which locks the thread currently owns.
 

 The `ThreadMXBean` interface provides the
 `findMonitorDeadlockedThreads` and
 `findDeadlockedThreads` methods to find deadlocks in
 the running application.

**参见**

- ManagementFactory#getPlatformMXBeans(Class)
- JMX Specification.
- Ways to Access MXBeans

> *Since 1.5*
