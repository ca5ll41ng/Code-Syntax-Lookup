---
id: "java-en-function-abstractselectablechannel-register"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelectableChannel.register"
signature: "public final SelectionKey register(Selector sel, int ops, Object att) throws ClosedChannelException"
title: "AbstractSelectableChannel.register"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelectableChannel.register

```java
public final SelectionKey register(Selector sel, int ops, Object att) throws ClosedChannelException
```

Registers this channel with the given selector, returning a selection key.

 

  This method first verifies that this channel is open and that the
 given initial interest set is valid.

 

 If this channel is already registered with the given selector then
 the selection key representing that registration is returned after
 setting its interest set to the given value.

 

 Otherwise this channel has not yet been registered with the given
 selector, so the `register register` method of
 the selector is invoked while holding the appropriate locks.  The
 resulting key is added to this channel's key set before being returned.

**异常**

- **ClosedSelectorException** — {@inheritDoc}
- **IllegalBlockingModeException** — {@inheritDoc}
- **IllegalSelectorException** — {@inheritDoc}
- **CancelledKeyException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
