---
id: "java-en-function-asynchronouschannelgroup-shutdown"
language: "java"
lang: "en"
category: "function"
name: "AsynchronousChannelGroup.shutdown"
signature: "public abstract void shutdown()"
title: "AsynchronousChannelGroup.shutdown"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup.shutdown

```java
public abstract void shutdown()
```

Initiates an orderly shutdown of the group.

 

 This method marks the group as shutdown. Further attempts to construct
 channel that binds to this group will throw `ShutdownChannelGroupException`.
 The group terminates when all asynchronous channels in the group are
 closed, all actively executing completion handlers have run to completion,
 and all resources have been released. This method has no effect if the
 group is already shutdown.
