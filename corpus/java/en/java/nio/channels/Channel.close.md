---
id: "java-en-function-channel-close"
language: "java"
lang: "en"
category: "function"
name: "Channel.close"
signature: "public void close() throws IOException"
title: "Channel.close"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Channel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Channel.close

```java
public void close() throws IOException
```

Closes this channel.

 

 After a channel is closed, any further attempt to invoke I/O
 operations upon it will cause a `ClosedChannelException` to be
 thrown.

 

 If this channel is already closed then invoking this method has no
 effect.

 

 This method may be invoked at any time.  If some other thread has
 already invoked it, however, then another invocation will block until
 the first invocation is complete, after which it will return without
 effect.

**异常**

- **IOException** — If an I/O error occurs
