---
id: "java-en-function-java-nio-channels-selector"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.Selector"
title: "Selector"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector

A multiplexor of `SelectableChannel` objects.

 

 A selector may be created by invoking the `open open` method of
 this class, which will use the system's default `java.nio.channels.spi.SelectorProvider selector provider` to
 create a new selector.  A selector may also be created by invoking the
 `openSelector openSelector`
 method of a custom selector provider.  A selector remains open until it is
 closed via its `close close` method.

 

 

 A selectable channel's registration with a selector is represented by a
 `SelectionKey` object.  A selector maintains three sets of selection
 keys:

 

   
- 

 The key set contains the keys representing the current
   channel registrations of this selector.  This set is returned by the
   `keys() keys` method. 

   
- 

 The selected-key set is the set of keys such that each
   key's channel was detected to be ready for at least one of the operations
   identified in the key's interest set during a prior selection operation
   that adds keys or updates keys in the set.
   This set is returned by the `selectedKeys() selectedKeys` method.
   The selected-key set is always a subset of the key set. 

   
- 

 The cancelled-key set is the set of keys that have been
   cancelled but whose channels have not yet been deregistered.  This set is
   not directly accessible.  The cancelled-key set is always a subset of the
   key set. 

 

 

 All three sets are empty in a newly-created selector.

 

 A key is added to a selector's key set as a side effect of registering a
 channel via the channel's `register(Selector,int)
 register` method.  Cancelled keys are removed from the key set during
 selection operations.  The key set itself is not directly modifiable.

 

 A key is added to its selector's cancelled-key set when it is cancelled,
 whether by closing its channel or by invoking its `cancel
 cancel` method.  Cancelling a key will cause its channel to be deregistered
 during the next selection operation, at which time the key will be removed
 from all of the selector's key sets.

 

 Keys are added to the selected-key set by selection
 operations.  A key may be removed directly from the selected-key set by
 invoking the set's `remove(java.lang.Object) remove`
 method or by invoking the `remove() remove` method
 of an `java.util.Iterator iterator` obtained from the set.
 All keys may be removed from the selected-key set by invoking the set's
 `clear() clear` method.  Keys may not be added directly
 to the selected-key set. 

 
 Selection

 

 A selection operation queries the underlying operating system for an
 update as to the readiness of each registered channel to perform any of the
 operations identified by its key's interest set.  There are two forms of
 selection operation:

 

   
- 

 The `select`, `select`, and `selectNow`
   methods add the keys of channels ready to perform an operation to the
   selected-key set, or update the ready-operation set of keys already in the
   selected-key set. 

   
- 

 The `select`, `select`, and
   `selectNow` methods perform an action on the key
   of each channel that is ready to perform an operation.  These methods do
   not add to the selected-key set. 

 

 Selection operations that add to the selected-key set

 

 During each selection operation, keys may be added to and removed from a
 selector's selected-key set and may be removed from its key and
 cancelled-key sets.  Selection is performed by the `select`, `select`, and `selectNow` methods, and involves three steps:
 

 

   
- 

 Each key in the cancelled-key set is removed from each key set of
   which it is a member, and its channel is deregistered.  This step leaves
   the cancelled-key set empty. 

   
- 

 The underlying operating system is queried for an update as to the
   readiness of each remaining channel to perform any of the operations
   identified by its key's interest set as of the moment that the selection
   operation began.  For a channel that is ready for at least one such
   operation, one of the following two actions is performed: 

   

     
- 

 If the channel's key is not already in the selected-key set then
     it is added to that set and its ready-operation set is modified to
     identify exactly those operations for which the channel is now reported
     to be ready.  Any readiness information previously recorded in the ready
     set is discarded.  

     
- 

 Otherwise the channel's key is already in the selected-key set,
     so its ready-operation set is modified to identify any new operations
     for which the channel is reported to be ready.  Any readiness
     information previously recorded in the ready set is preserved; in other
     words, the ready set returned by the underlying system is
     bitwise-disjoined into the key's current ready set. 

   

   If all of the keys in the key set at the start of this step have empty
   interest sets then neither the selected-key set nor any of the keys'
   ready-operation sets will be updated.

   
- 

 If any keys were added to the cancelled-key set while step (2) was
   in progress then they are processed as in step (1). 

 

 

 Whether or not a selection operation blocks to wait for one or more
 channels to become ready, and if so for how long, is the only essential
 difference between the three selection methods. 

 Selection operations that perform an action on selected keys

 

 During each selection operation, keys may be removed from the selector's
 key, selected-key, and cancelled-key sets.  Selection is performed by the
 `select`, `select`, and `selectNow` methods, and involves three steps:  

 

   
- 

 Each key in the cancelled-key set is removed from each key set of
   which it is a member, and its channel is deregistered.  This step leaves
   the cancelled-key set empty. 

   
- 

 The underlying operating system is queried for an update as to the
   readiness of each remaining channel to perform any of the operations
   identified by its key's interest set as of the moment that the selection
   operation began.

   

 For a channel that is ready for at least one such operation, the
   ready-operation set of the channel's key is set to identify exactly the
   operations for which the channel is ready and the action specified
   to the `select` method is invoked to consume the channel's key.  Any
   readiness information previously recorded in the ready set is discarded
   prior to invoking the action.

   

 Alternatively, where a channel is ready for more than one operation,
   the action may be invoked more than once with the channel's key and
   ready-operation set modified to a subset of the operations for which the
   channel is ready.  Where the action is invoked more than once for
   the same key then its ready-operation set never contains operation bits
   that were contained in the set at previous calls to the action
   in the same selection operation.  

   
- 

 If any keys were added to the cancelled-key set while step (2) was
   in progress then they are processed as in step (1). 

 

 Concurrency

 

 A Selector and its key set are safe for use by multiple concurrent
 threads.  Its selected-key set and cancelled-key set, however, are not.

 

 The selection operations synchronize on the selector itself, on the
 selected-key set, in that order.  They also synchronize on the cancelled-key
 set during steps (1) and (3) above.

 

 Changes made to the interest sets of a selector's keys while a
 selection operation is in progress have no effect upon that operation; they
 will be seen by the next selection operation.

 

 Keys may be cancelled and channels may be closed at any time.  Hence the
 presence of a key in one or more of a selector's key sets does not imply
 that the key is valid or that its channel is open. Application code should
 be careful to synchronize and check these conditions as necessary if there
 is any possibility that another thread will cancel a key or close a channel.

 

 A thread blocked in a selection operation may be interrupted by some
 other thread in one of three ways:

 

   
- 

 By invoking the selector's `wakeup wakeup` method,
   

   
- 

 By invoking the selector's `close close` method, or
   

   
- 

 By invoking the blocked thread's `interrupt() interrupt` method, in which case its
   interrupted status will be set and the selector's `wakeup wakeup`
   method will be invoked. 

 

 

 The `close close` method synchronizes on the selector and its
 selected-key set in the same order as in a selection operation.

 
 

 A Selector's key set is safe for use by multiple concurrent threads.
 Retrieval operations from the key set do not generally block and so may
 overlap with new registrations that add to the set, or with the cancellation
 steps of selection operations that remove keys from the set.  Iterators and
 spliterators return elements reflecting the state of the set at some point at
 or since the creation of the iterator/spliterator.  They do not throw
 `java.util.ConcurrentModificationException ConcurrentModificationException`.

 
 

 A selector's selected-key set is not, in general, safe for use by
 multiple concurrent threads.  If such a thread might modify the set directly
 then access should be controlled by synchronizing on the set itself.  The
 iterators returned by the set's `iterator() iterator`
 methods are fail-fast: If the set is modified after the iterator is
 created, in any way except by invoking the iterator's own `remove() remove` method, then a `java.util.ConcurrentModificationException` will be thrown.

**参见**

- SelectableChannel
- SelectionKey

> *Since 1.4*
