---
id: "java-en-function-socket-getoutputstream"
language: "java"
lang: "en"
category: "function"
name: "Socket.getOutputStream"
signature: "public OutputStream getOutputStream() throws IOException"
title: "Socket.getOutputStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getOutputStream

```java
public OutputStream getOutputStream() throws IOException
```

Returns an output stream for this socket.

 

 If this socket has an associated channel then the resulting output
 stream delegates all of its operations to the channel.  If the channel
 is in non-blocking mode then the output stream's `write`
 operations will throw an `java.nio.channels.IllegalBlockingModeException`.

 

 Writing to the output stream is `interrupt()
 interruptible` in the following circumstances:
 
   
-  The socket is `socket() associated` with
        a `SocketChannel SocketChannel`.
        In that case, interrupting a thread writing to the output stream
        will close the underlying channel and cause the write method to
        throw `ClosedByInterruptException` with the thread's
        interrupted status set.
   
-  The socket uses the system-default socket implementation and a
        `isVirtual() virtual thread` is writing to the
        output stream. In that case, interrupting the virtual thread will
        cause it to wakeup and close the socket. The write method will then
        throw `SocketException` with the thread's interrupted
        status set.
 

 

 Closing the returned `java.io.OutputStream OutputStream`
 will close the associated socket.

**返回**

- an output stream for writing bytes to this socket.

**异常**

- **IOException** — if an I/O error occurs when creating the output stream, the socket is not connected or the socket is closed.
