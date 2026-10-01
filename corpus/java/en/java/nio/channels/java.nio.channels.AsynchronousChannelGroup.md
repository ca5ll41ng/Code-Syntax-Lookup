---
id: "java-en-function-java-nio-channels-asynchronouschannelgroup"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.AsynchronousChannelGroup"
title: "AsynchronousChannelGroup"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousChannelGroup.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousChannelGroup

A grouping of asynchronous channels for the purpose of resource sharing.

 

 An asynchronous channel group encapsulates the mechanics required to
 handle the completion of I/O operations initiated by `AsynchronousChannel
 asynchronous channels` that are bound to the group. A group has an associated
 thread pool to which tasks are submitted to handle I/O events and dispatch to
 `CompletionHandler completion-handlers` that consume the result of
 asynchronous operations performed on channels in the group. In addition to
 handling I/O events, the pooled threads may also execute other tasks required
 to support the execution of asynchronous I/O operations.

 

 An asynchronous channel group is created by invoking the `withFixedThreadPool withFixedThreadPool` or `withCachedThreadPool
 withCachedThreadPool` methods defined here. Channels are bound to a group by
 specifying the group when constructing the channel. The associated thread
 pool is owned by the group; termination of the group results in the
 shutdown of the associated thread pool.

 

 In addition to groups created explicitly, the Java virtual machine
 maintains a system-wide default group that is constructed
 automatically. Asynchronous channels that do not specify a group at
 construction time are bound to the default group. The default group has an
 associated thread pool that creates new threads as needed. The default group
 may be configured by means of system properties defined in the table below.
 Where the `java.util.concurrent.ThreadFactory ThreadFactory` for the
 default group is not configured then the pooled threads of the default group
 are `isDaemon daemon` threads.

 
 System properties
   
   
     System property
     Description
   
   
   
   
     
       {@systemProperty java.nio.channels.DefaultThreadPool.threadFactory}
     
      The value of this property is taken to be the fully-qualified name
     of a concrete `java.util.concurrent.ThreadFactory ThreadFactory`
     class. The class is loaded using the system class loader and instantiated.
     The factory's `newThread
     newThread` method is invoked to create each thread for the default
     group's thread pool. If the process to load and instantiate the value
     of the property fails then an unspecified error is thrown during the
     construction of the default group. 
   
   
     
       {@systemProperty java.nio.channels.DefaultThreadPool.initialSize}
     
      The value of the `initialSize` parameter for the default
     group (see `withCachedThreadPool withCachedThreadPool`).
     The value of the property is taken to be the `String`
     representation of an `Integer` that is the initial size parameter.
     If the value cannot be parsed as an `Integer` it causes an
     unspecified error to be thrown during the construction of the default
     group. 
   
   
 

 Threading

 

 The completion handler for an I/O operation initiated on a channel bound
 to a group is guaranteed to be invoked by one of the pooled threads in the
 group. This ensures that the completion handler is run by a thread with the
 expected identity.

 

 Where an I/O operation completes immediately, and the initiating thread
 is one of the pooled threads in the group then the completion handler may
 be invoked directly by the initiating thread. To avoid stack overflow, an
 implementation may impose a limit as to the number of activations on the
 thread stack. Some I/O operations may prohibit invoking the completion
 handler directly by the initiating thread (see `accept(Object,CompletionHandler) accept`).

 Shutdown and Termination

 

 The `shutdown() shutdown` method is used to initiate an orderly
 shutdown of a group. An orderly shutdown marks the group as shutdown;
 further attempts to construct a channel that binds to the group will throw
 `ShutdownChannelGroupException`. Whether or not a group is shutdown can
 be tested using the `isShutdown() isShutdown` method. Once shutdown,
 the group terminates when all asynchronous channels that are bound to
 the group are closed, all actively executing completion handlers have run to
 completion, and resources used by the group are released. No attempt is made
 to stop or interrupt threads that are executing completion handlers. The
 `isTerminated() isTerminated` method is used to test if the group has
 terminated, and the `awaitTermination awaitTermination` method can be
 used to block until the group has terminated.

 

 The `shutdownNow() shutdownNow` method can be used to initiate a
 forceful shutdown of the group. In addition to the actions performed
 by an orderly shutdown, the `shutdownNow` method closes all open channels
 in the group as if by invoking the `close close`
 method.

**参见**

- AsynchronousSocketChannel#open(AsynchronousChannelGroup)
- AsynchronousServerSocketChannel#open(AsynchronousChannelGroup)

> *Since 1.7*
