---
id: "java-en-function-sslengine-getdelegatedtask"
language: "java"
lang: "en"
category: "function"
name: "SSLEngine.getDelegatedTask"
signature: "public abstract Runnable getDelegatedTask()"
title: "SSLEngine.getDelegatedTask"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLEngine.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLEngine.getDelegatedTask

```java
public abstract Runnable getDelegatedTask()
```

Returns a delegated `Runnable` task for
 this `SSLEngine`.
 

 `SSLEngine` operations may require the results of
 operations that block, or may take an extended period of time to
 complete.  This method is used to obtain an outstanding `java.lang.Runnable` operation (task).  Each task must be assigned
 a thread (possibly the current) to perform the `run() run` operation.  Once the
 `run` method returns, the `Runnable` object
 is no longer needed and may be discarded.
 

 A call to this method will return each outstanding task
 exactly once.
 

 Multiple delegated tasks can be run in parallel.

**返回**

- a delegated `Runnable` task, or null if none are available.
