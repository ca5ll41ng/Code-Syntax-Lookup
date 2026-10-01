---
id: "java-en-function-selectablechannel-isregistered"
language: "java"
lang: "en"
category: "function"
name: "SelectableChannel.isRegistered"
signature: "public abstract boolean isRegistered()"
title: "SelectableChannel.isRegistered"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectableChannel.isRegistered

```java
public abstract boolean isRegistered()
```

Tells whether or not this channel is currently registered with any
 selectors.  A newly-created channel is not registered.

 

 Due to the inherent delay between key cancellation and channel
 deregistration, a channel may remain registered for some time after all
 of its keys have been cancelled.  A channel may also remain registered
 for some time after it is closed.

**返回**

- `true` if, and only if, this channel is registered
