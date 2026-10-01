---
id: "java-en-function-selectablechannel-register"
language: "java"
lang: "en"
category: "function"
name: "SelectableChannel.register"
signature: "public abstract SelectionKey register(Selector sel, int ops, Object att) throws ClosedChannelException"
title: "SelectableChannel.register"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectableChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectableChannel.register

```java
public abstract SelectionKey register(Selector sel, int ops, Object att) throws ClosedChannelException
```

Registers this channel with the given selector, returning a selection
 key.

 

 If this channel is currently registered with the given selector then
 the selection key representing that registration is returned.  The key's
 interest set will have been changed to `ops`, as if by invoking
 the `interestOps` method.  If
 the `att` argument is not `null` then the key's attachment
 will have been set to that value.  A `CancelledKeyException` will
 be thrown if the key has already been cancelled.

 

 Otherwise this channel has not yet been registered with the given
 selector, so it is registered and the resulting new key is returned.
 The key's initial interest set will be `ops` and its attachment
 will be `att`.

 

 This method may be invoked at any time.  If this method is invoked
 while a selection operation is in progress then it has no effect upon
 that operation; the new registration or change to the key's interest set
 will be seen by the next selection operation.  If this method is invoked
 while an invocation of `configureBlocking(boolean) configureBlocking`
 is in progress then it will block until the channel's blocking mode has
 been adjusted.

 

 If this channel is closed while this operation is in progress then
 the key returned by this method will have been cancelled and will
 therefore be invalid.

**参数**

- **sel** — The selector with which this channel is to be registered
- **ops** — The interest set for the resulting key
- **att** — The attachment for the resulting key; may be `null`

**返回**

- A key representing the registration of this channel with the given selector

**异常**

- **ClosedChannelException** — If this channel is closed
- **ClosedSelectorException** — If the selector is closed
- **IllegalBlockingModeException** — If this channel is in blocking mode
- **IllegalSelectorException** — If this channel was not created by the same provider as the given selector
- **CancelledKeyException** — If this channel is currently registered with the given selector but the corresponding key has already been cancelled
- **IllegalArgumentException** — If a bit in the `ops` set does not correspond to an operation that is supported by this channel, that is, if `set & ~validOps() != 0`
