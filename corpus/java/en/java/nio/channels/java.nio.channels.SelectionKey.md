---
id: "java-en-function-java-nio-channels-selectionkey"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.SelectionKey"
title: "SelectionKey"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey

A token representing the registration of a `SelectableChannel` with a
 `Selector`.

 

 A selection key is created each time a channel is registered with a
 selector.  A key remains valid until it is cancelled by invoking its
 `cancel cancel` method, by closing its channel, or by closing its
 selector.  Cancelling a key does not immediately remove it from its
 selector; it is instead added to the selector's cancelled-key set for removal during the
 next selection operation.  The validity of a key may be tested by invoking
 its `isValid isValid` method.

 

 

 A selection key contains two operation sets represented as
 integer values.  Each bit of an operation set denotes a category of
 selectable operations that are supported by the key's channel.

 

   
- 

 The interest set determines which operation categories will
   be tested for readiness the next time one of the selector's selection
   methods is invoked.  The interest set is initialized with the value given
   when the key is created; it may later be changed via the `interestOps` method. 

   
- 

 The ready set identifies the operation categories for which
   the key's channel has been detected to be ready by the key's selector.
   The ready set is initialized to zero when the key is created; it may later
   be updated by the selector during a selection operation, but it cannot be
   updated directly. 

 

 

 That a selection key's ready set indicates that its channel is ready for
 some operation category is a hint, but not a guarantee, that an operation in
 such a category may be performed by a thread without causing the thread to
 block.  A ready set is most likely to be accurate immediately after the
 completion of a selection operation.  It is likely to be made inaccurate by
 external events and by I/O operations that are invoked upon the
 corresponding channel.

 

 This class defines all known operation-set bits, but precisely which
 bits are supported by a given channel depends upon the type of the channel.
 Each subclass of `SelectableChannel` defines a `validOps` method which returns a set
 identifying just those operations that are supported by the channel.  An
 attempt to set or test an operation-set bit that is not supported by a key's
 channel will result in an appropriate run-time exception.

 

 It is often necessary to associate some application-specific data with a
 selection key, for example an object that represents the state of a
 higher-level protocol and handles readiness notifications in order to
 implement that protocol.  Selection keys therefore support the
 attachment of a single arbitrary object to a key.  An object can be
 attached via the `attach attach` method and then later retrieved via
 the `attachment() attachment` method.

 

 Selection keys are safe for use by multiple concurrent threads.  A
 selection operation will always use the interest-set value that was current
 at the moment that the operation began.

**参见**

- SelectableChannel
- Selector

> *Since 1.4*
