---
id: "java-en-function-asynchronouschannelgroup-awaittermination"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.awaitTermination"
signature: "public abstract boolean awaitTermination(long timeout, TimeUnit unit) throws InterruptedException"
title: "AsynchronousChannelGroup.awaitTermination"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.awaitTermination

```java
public abstract boolean awaitTermination(long timeout, TimeUnit unit) throws InterruptedException
```

Awaits termination of the group.

 

 This method blocks until the group has terminated, or the timeout
 occurs, or the current thread is interrupted, whichever happens first.

**参数**

- **timeout** — The maximum time to wait, or zero or less to not wait
- **unit** — The time unit of the timeout argument

**返回**

- `true` if the group has terminated; `false` if the timeout elapsed before termination

**异常**

- **InterruptedException** — If interrupted while waiting
