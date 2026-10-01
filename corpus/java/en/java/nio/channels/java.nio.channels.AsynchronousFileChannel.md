---
id: "java-en-function-java-nio-channels-asynchronousfilechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.AsynchronousFileChannel"
title: "AsynchronousFileChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/AsynchronousFileChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AsynchronousFileChannel

An asynchronous channel for reading, writing, and manipulating a file.

 

 An asynchronous file channel is created when a file is opened by invoking
 one of the `open open` methods defined by this class. The file contains
 a variable-length sequence of bytes that can be read and written and whose
 current size can be `size() queried`. The size of the file increases
 when bytes are written beyond its  current size; the size of the file decreases
 when it is `truncate truncated`.

 

 An asynchronous file channel does not have a current position
 within the file. Instead, the file position is specified to each read and
 write method that initiates asynchronous operations. A `CompletionHandler`
 is specified as a parameter and is invoked to consume the result of the I/O
 operation. This class also defines read and write methods that initiate
 asynchronous operations, returning a `Future` to represent the pending
 result of the operation. The `Future` may be used to check if the
 operation has completed, wait for its completion, and retrieve the result.

 

 In addition to read and write operations, this class defines the
 following operations: 

 

   
- 

 Updates made to a file may be `force forced
   out` to the underlying storage device, ensuring that data are not
   lost in the event of a system crash.  

   
- 

 A region of a file may be `lock locked` against
   access by other programs.  

 

 

 An `AsynchronousFileChannel` is associated with a thread pool to
 which tasks are submitted to handle I/O events and dispatch to completion
 handlers that consume the results of I/O operations on the channel. The
 completion handler for an I/O operation initiated on a channel is guaranteed
 to be invoked by one of the threads in the thread pool (This ensures that the
 completion handler is run by a thread with the expected identity).
 Where an I/O operation completes immediately, and the initiating thread is
 itself a thread in the thread pool, then the completion handler may be invoked
 directly by the initiating thread. When an `AsynchronousFileChannel` is
 created without specifying a thread pool then the channel is associated with
 a system-dependent default thread pool that may be shared with other
 channels. The default thread pool is configured by the system properties
 defined by the `AsynchronousChannelGroup` class.

 

 Channels of this type are safe for use by multiple concurrent threads. The
 `close close` method may be invoked at any time, as specified
 by the `Channel` interface. This causes all outstanding asynchronous
 operations on the channel to complete with the exception `AsynchronousCloseException`. Multiple read and write operations may be
 outstanding at the same time. When multiple read and write operations are
 outstanding then the ordering of the I/O operations, and the order that the
 completion handlers are invoked, is not specified; they are not, in particular,
 guaranteed to execute in the order that the operations were initiated. The
 `java.nio.ByteBuffer ByteBuffers` used when reading or writing are not
 safe for use by multiple concurrent I/O operations. Furthermore, after an I/O
 operation is initiated then care should be taken to ensure that the buffer is
 not accessed until after the operation has completed.

 

 As with `FileChannel`, the view of a file provided by an instance of
 this class is guaranteed to be consistent with other views of the same file
 provided by other instances in the same program.  The view provided by an
 instance of this class may or may not, however, be consistent with the views
 seen by other concurrently-running programs due to caching performed by the
 underlying operating system and delays induced by network-filesystem protocols.
 This is true regardless of the language in which these other programs are
 written, and whether they are running on the same machine or on some other
 machine.  The exact nature of any such inconsistencies are system-dependent
 and are therefore unspecified.

> *Since 1.7*
