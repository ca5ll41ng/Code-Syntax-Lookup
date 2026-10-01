---
id: "java-en-function-socket-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "Socket.getInputStream"
signature: "public InputStream getInputStream() throws IOException"
title: "Socket.getInputStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getInputStream

```java
public InputStream getInputStream() throws IOException
```

Returns an input stream for this socket.

 

 If this socket has an associated channel then the resulting input
 stream delegates all of its operations to the channel.  If the channel
 is in non-blocking mode then the input stream's `read` operations
 will throw an `java.nio.channels.IllegalBlockingModeException`.

 

 Reading from the input stream is `interrupt()
 interruptible` in the following circumstances:
 
   
-  The socket is `socket() associated` with
        a `SocketChannel SocketChannel`.
        In that case, interrupting a thread reading from the input stream
        will close the underlying channel and cause the read method to
        throw `ClosedByInterruptException` with the thread's
        interrupted status set.
   
-  The socket uses the system-default socket implementation and a
        `isVirtual() virtual thread` is reading from the
        input stream. In that case, interrupting the virtual thread will
        cause it to wakeup and close the socket. The read method will then
        throw `SocketException` with the thread's interrupted
        status set.
 

 

Under abnormal conditions the underlying connection may be
 broken by the remote host or the network software (for example
 a connection reset in the case of TCP connections). When a
 broken connection is detected by the network software the
 following applies to the returned input stream :-

 

   
- 

The network software may discard bytes that are buffered
   by the socket. Bytes that aren't discarded by the network
   software can be read using `read read`.

   
- 

If there are no bytes buffered on the socket, or all
   buffered bytes have been consumed by
   `read read`, then all subsequent
   calls to `read read` will throw an
   `java.io.IOException IOException`.

   
- 

If there are no bytes buffered on the socket, and the
   socket has not been closed using `close close`, then
   `available available` will
   return `0`.

 

 

 Closing the returned `java.io.InputStream InputStream`
 will close the associated socket.

**返回**

- an input stream for reading bytes from this socket.

**异常**

- **IOException** — if an I/O error occurs when creating the input stream, the socket is closed, the socket is not connected, or the socket input has been shutdown using `shutdownInput`
