---
id: "java-en-function-java-lang-processhandle"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ProcessHandle"
title: "ProcessHandle"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle

ProcessHandle identifies and provides control of native processes. Each
 individual process can be monitored for liveness, list its children,
 get information about the process or destroy it.
 By comparison, `java.lang.Process Process` instances were started
 by the current process and additionally provide access to the process
 input, output, and error streams.
 

 The native process ID is an identification number that the
 operating system assigns to the process.
 The range for process id values is dependent on the operating system.
 For example, an embedded system might use a 16-bit value.
 Status information about a process is retrieved from the native system
 and may change asynchronously; processes may be created or terminate
 spontaneously.
 The time between when a process terminates and the process id
 is reused for a new process is unpredictable.
 Race conditions can exist between checking the status of a process and
 acting upon it. When using ProcessHandles avoid assumptions
 about the liveness or identity of the underlying process.
 

 Each ProcessHandle identifies and allows control of a process in the native
 system. ProcessHandles are returned from the factory methods `current`,
 `of`,
 `children`, `descendants`, `parent` and
 `allProcesses`.
 

 The `Process` instances created by `ProcessBuilder` can be queried
 for a ProcessHandle that provides information about the Process.
 ProcessHandle references should not be freely distributed.

 

 A `java.util.concurrent.CompletableFuture` available from `onExit`
 can be used to wait for process termination, and possibly trigger dependent
 actions.
 

 The ability to control processes may be restricted by the native system,
 ProcessHandle provides no more access to, or control over, the native process
 than would be allowed by a native application.

 In the case where ProcessHandles cannot be supported then the factory
 methods must consistently throw `java.lang.UnsupportedOperationException`.
 The methods of this class throw `java.lang.UnsupportedOperationException`
 if the operating system does not allow access to query or kill a process.

 

 The `ProcessHandle` static factory methods return instances that are
 value-based,
 immutable and thread-safe. Programmers should treat instances that are
 `equals(Object) equal` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may occur.
 For example, in a future release, synchronization may fail.
 Use the `equals` or `compareTo(ProcessHandle) compareTo` methods
 to compare ProcessHandles.

**参见**

- Process

> *Since 9*
