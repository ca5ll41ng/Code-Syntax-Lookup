---
id: "java-en-function-javax-net-ssl-sslsocket"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLSocket"
title: "SSLSocket"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLSocket

This class extends Socket and provides secure
 sockets using protocols such as the "Secure
 Sockets Layer" (SSL) or IETF "Transport Layer Security" (TLS) protocols.
 

 Such sockets are normal stream sockets, but they
 add a layer of security protections over the underlying network transport
 protocol, such as TCP.  Those protections include: 

      
-  Integrity Protection.  SSL protects against
      modification of messages by an active wiretapper.

      
-  Authentication.  In most modes, SSL provides
      peer authentication.  Servers are usually authenticated,
      and clients may be authenticated as requested by servers.

      
-  Confidentiality (Privacy Protection).  In most
      modes, SSL encrypts data being sent between client and server.
      This protects the confidentiality of data, so that passive
      wiretappers won't see sensitive data such as financial
      information or personal information of many kinds.

      

 

These kinds of protection are specified by a "cipher suite", which
 is a combination of cryptographic algorithms used by a given SSL connection.
 During the negotiation process, the two endpoints must agree on
 a ciphersuite that is available in both environments.
 If there is no such suite in common, no SSL connection can
 be established, and no data can be exchanged.

 

 The cipher suite used is established by a negotiation process
 called "handshaking".  The goal of this
 process is to create or rejoin a "session", which may protect many
 connections over time.  After handshaking has completed, you can access
 session attributes by using the getSession method.
 The initial handshake on this connection can be initiated in
 one of three ways: 

      
-  calling startHandshake which explicitly
              begins handshakes, or
      
-  any attempt to read or write application data on
              this socket causes an implicit handshake, or
      
-  a call to getSession tries to set up a session
              if there is no currently valid session, and
              an implicit handshake is done.
 

 

If handshaking fails for any reason, the SSLSocket
 is closed, and no further communications can be done.

 

There are two groups of cipher suites which you will need to know
 about when managing cipher suites: 

      
-  Supported cipher suites:  all the suites which are
      supported by the SSL implementation.  This list is reported
      using getSupportedCipherSuites.

      
-  Enabled cipher suites, which may be fewer
      than the full set of supported suites.  This group is
      set using the setEnabledCipherSuites method, and
      queried using the getEnabledCipherSuites method.
      Initially, a default set of cipher suites will be enabled on
      a new socket that represents the minimum suggested configuration.

      

 

 Implementation defaults require that only cipher
 suites which authenticate servers and provide confidentiality
 be enabled by default.
 Only if both sides explicitly agree to unauthenticated and/or
 non-private (unencrypted) communications will such a ciphersuite be
 selected.

 

When an SSLSocket is first created, no handshaking
 is done so that applications may first set their communication
 preferences:  what cipher suites to use, whether the socket should be
 in client or server mode, etc.
 However, security is always provided by the time that application data
 is sent over the connection.

 

 You may register to receive event notification of handshake
 completion.  This involves
 the use of two additional classes.  HandshakeCompletedEvent
 objects are passed to HandshakeCompletedListener instances,
 which are registered by users of this API.

 An SSLSocket is created by SSLSocketFactory,
 or by accepting a connection from a
 SSLServerSocket.

 

A SSL socket must choose to operate in the client or server mode.
 This will determine who begins the handshaking process, as well
 as which messages should be sent by each party.  Each
 connection must have one client and one server, or handshaking
 will not progress properly.  Once the initial handshaking has started, a
 socket can not switch between client and server modes, even when
 performing renegotiations.

 

 The ApplicationProtocol `String` values returned by the methods
 in this class are in the network byte representation sent by the peer.
 The bytes could be directly compared, or converted to its Unicode
 `String` format for comparison.

 
```

     String networkString = sslSocket.getHandshakeApplicationProtocol();
     byte[] bytes = networkString.getBytes(StandardCharsets.ISO_8859_1);

     //
     // Match using bytes:
     //
     //   "http/1.1"                       (7-bit ASCII values same in UTF-8)
     //   MEETEI MAYEK LETTERS "HUK UN I"  (Unicode 0xabcd->0xabcf)
     //
     String HTTP1_1 = "http/1.1";
     byte[] HTTP1_1_BYTES = HTTP1_1.getBytes(StandardCharsets.UTF_8);

     byte[] HUK_UN_I_BYTES = new byte[] {
         (byte) 0xab, (byte) 0xcd,
         (byte) 0xab, (byte) 0xce,
         (byte) 0xab, (byte) 0xcf};

     if ((Arrays.compare(bytes, HTTP1_1_BYTES) == 0 )
             || Arrays.compare(bytes, HUK_UN_I_BYTES) == 0) {
        ...
     }

     //
     // Alternatively match using string.equals() if we know the ALPN value
     // was encoded from a `String` using a certain character set,
     // for example `UTF-8`.  The ALPN value must first be properly
     // decoded to a Unicode `String` before use.
     //
     String unicodeString = new String(bytes, StandardCharsets.UTF_8);
     if (unicodeString.equals(HTTP1_1)
             || unicodeString.equals("\u005cuabcd\u005cuabce\u005cuabcf")) {
         ...
     }
 
```

 When the connection is no longer needed, the client and server
 applications should each close both sides of their respective connection.
 This can be done either in one shot by calling `close`,
 or by closing each side individually using
 `shutdownOutput` / `shutdownInput` which is
 useful for protocol versions that can support half-closed connections.

 

 Note that in some cases, closing the input stream may depend on the
 peer's output stream being closed first.  If the connection is not closed
 in an orderly manner (for example `shutdownInput` is called
 before the peer's write closure notification has been received), exceptions
 may be raised to indicate that an error has occurred.

 

 Once an `SSLSocket` is closed, it is not reusable: a new
 `SSLSocket` must be created.

**参见**

- java.net.Socket
- SSLServerSocket
- SSLSocketFactory

> *Since 1.4*
