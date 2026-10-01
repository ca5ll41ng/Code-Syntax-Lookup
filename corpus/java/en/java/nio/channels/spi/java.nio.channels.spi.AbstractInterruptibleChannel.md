---
id: "java-en-function-java-nio-channels-spi-abstractinterruptiblechannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.spi.AbstractInterruptibleChannel"
title: "AbstractInterruptibleChannel"
directive: "type"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractInterruptibleChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractInterruptibleChannel

Base implementation class for interruptible channels.

 

 This class encapsulates the low-level machinery required to implement
 the asynchronous closing and interruption of channels.  A concrete channel
 class must invoke the `begin begin` and `end end` methods
 before and after, respectively, invoking an I/O operation that might block
 indefinitely.  In order to ensure that the `end end` method is always
 invoked, these methods should be used within a
 `try`&nbsp;...&nbsp;`finally` block:

 {@snippet lang=java id="be" :
     boolean completed = false;
     try {
         begin();
         completed = ...;    // Perform blocking I/O operation
         return ...;         // Return result
     } finally {
         end(completed);
     }
 }

 

 The `completed` argument to the `end end` method tells
 whether or not the I/O operation actually completed, that is, whether it had
 any effect that would be visible to the invoker.  In the case of an
 operation that reads bytes, for example, this argument should be
 `true` if, and only if, some bytes were actually transferred into the
 invoker's target buffer.

 

 A concrete channel class must also implement the `implCloseChannel implCloseChannel` method in such a way that if it is
 invoked while another thread is blocked in a native I/O operation upon the
 channel then that operation will immediately return, either by throwing an
 exception or by returning normally.  If a thread is interrupted or the
 channel upon which it is blocked is asynchronously closed then the channel's
 `end end` method will throw the appropriate exception.

 

 This class performs the synchronization required to implement the `java.nio.channels.Channel` specification.  Implementations of the `implCloseChannel implCloseChannel` method need not synchronize against
 other threads that might be attempting to close the channel.

> *Since 1.4*
