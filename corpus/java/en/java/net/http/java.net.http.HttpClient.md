---
id: "java-en-function-java-net-http-httpclient"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpClient"
title: "HttpClient"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient

An HTTP Client.

 

 An `HttpClient` can be used to send `HttpRequest
 requests` and retrieve their `HttpResponse responses`. An `HttpClient` is created through a `HttpClient.Builder builder`.
 The `newBuilder() newBuilder` method returns a builder that creates
 instances of the default `HttpClient` implementation.
 The builder can be used to configure per-client state, like: the preferred
 protocol version ( HTTP/1.1, HTTP/2 or HTTP/3 ), whether to follow redirects, a
 proxy, an authenticator, etc. Once built, an `HttpClient` is immutable,
 and can be used to send multiple requests.

 

 An `HttpClient` provides configuration information, and resource
 sharing, for all requests sent through it. An `HttpClient` instance
 typically manages its own pools of connections, which it may then reuse
 as and when necessary. Connection pools are  typically not shared between
 `HttpClient` instances. Creating a new client for each operation,
 though possible, will usually prevent reusing such connections.

 

 A `BodyHandler BodyHandler` must be supplied for each `HttpRequest` sent. The `BodyHandler` determines how to handle the
 response body, if any. Once an `HttpResponse` is received, the
 headers, response code, and body (typically) are available. Whether the
 response body bytes have been read or not depends on the type, `T`, of
 the response body.

 

 Requests can be sent either synchronously or asynchronously:
 
     
- `send` blocks
     until the request has been sent and the response has been received.

     
- `sendAsync` sends the
     request and receives the response asynchronously. The `sendAsync`
     method returns immediately with a `CompletableFuture
     CompletableFuture`&lt;`HttpResponse`&gt;. The `CompletableFuture` completes when the response becomes available. The
     returned `CompletableFuture` can be combined in different ways to
     declare dependencies among several asynchronous tasks.
 

 

**Synchronous Example**
 {@snippet :
   HttpClient client = HttpClient.newBuilder()
        .version(Version.HTTP_1_1)
        .followRedirects(Redirect.NORMAL)
        .connectTimeout(Duration.ofSeconds(20))
        .proxy(ProxySelector.of(new InetSocketAddress("proxy.example.com", 80)))
        .authenticator(Authenticator.getDefault())
        .build();

   HttpRequest request = HttpRequest.newBuilder()
       .uri(URI.create("https://foo.com/"))
       .build();
   HttpResponse response = client.send(request, BodyHandlers.ofString());
   System.out.println(response.statusCode());
   System.out.println(response.body());  }

 

**Asynchronous Example**
 {@snippet :
   HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://foo.com/"))
        .timeout(Duration.ofMinutes(2))
        .header("Content-Type", "application/json")
        .POST(BodyPublishers.ofFile(Paths.get("file.json")))
        .build();
   client.sendAsync(request, BodyHandlers.ofString())
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println);  }

 Resources allocated by the `HttpClient` may be
 reclaimed early by `close() closing` the client.

  
  The `BodyHandlers` and `BodySubscribers`
  classes provide some `#streaming-body streaming
  or publishing `BodyHandler` and `BodySubscriber`
  implementations` which allow to stream body data back to the caller.
  In order for the resources associated with these streams to be
  reclaimed, and for the HTTP request to be considered completed,
  a caller must eventually `body()
  obtain the streaming response body` and close, cancel, or
  read the returned streams to exhaustion. Likewise, a custom
  `BodySubscriber` implementation should either `request(long) request` all data until `onComplete() onComplete` or `onError(Throwable) onError` is signalled, or eventually
  `cancel() cancel` its subscription.

 
 The JDK built-in implementation of the `HttpClient` overrides
 `close`, `shutdown`, `shutdownNow`,
 `awaitTermination`, and `isTerminated` to
 provide a best effort implementation. Failing to close, cancel, or
 read `#streaming streaming or publishing bodies` to exhaustion
 may stop delivery of data while leaving the request open, and
 `awaitTermination(Duration) stall an
 orderly shutdown`. The `shutdownNow` method, if called, will
 attempt to cancel any such non-completed requests, but may cause
 abrupt termination of any on going operation.

 
 If not `#closing explicitly closed`, the JDK
 built-in implementation of the `HttpClient` releases
 its resources when an `HttpClient` instance is no longer
 strongly reachable, and all operations started on that instance have
 eventually completed. This relies both on the garbage collector
 to notice that the instance is no longer reachable, and on all
 requests started on the client to eventually complete. Failure
 to properly close `#streaming streaming or publishing bodies`
 may prevent the associated requests from running to completion, and
 prevent the resources allocated by the associated client from
 being reclaimed by the garbage collector.

 
 The default implementation of the `HttpClient` supports HTTP/1.1,
 HTTP/2, and HTTP/3. Which version of the protocol is actually used when sending
 a request can depend on multiple factors. In the case of HTTP/2, it may depend
 on an initial upgrade to succeed (when using a plain connection), or on HTTP/2
 being successfully negotiated during the Transport Layer Security (TLS) handshake.

 

 If `HTTP_2 HTTP/2` is selected over a clear
 connection, and no HTTP/2 connection to the
 origin server
 already exists, the client will create a new connection and attempt an upgrade
 from HTTP/1.1 to HTTP/2.
 If the upgrade succeeds, then the response to this request will use HTTP/2.
 If the upgrade fails, then the response will be handled using HTTP/1.1.

 

 Other constraints may also affect the selection of protocol version.
 For example, if HTTP/2 is requested through a proxy, and if the implementation
 does not support this mode, then HTTP/1.1 may be used.
 

 The HTTP/3 protocol is not selected by default, but can be enabled by setting
 the `version(Version) HttpClient preferred version` or the
 `version(Version) HttpRequest preferred version` to
 `HTTP_3 HTTP/3`. Like for HTTP/2, which protocol version is
 actually used when HTTP/3 is enabled may depend on several factors.
 `H3_DISCOVERY Configuration hints` can
 be `setOption(HttpOption, Object) provided`
 to help the `HttpClient` implementation decide how to establish
 and carry out the HTTP exchange when the HTTP/3 protocol is enabled.
 If no configuration hints are provided, the `HttpClient` will select
 one as explained in the `H3_DISCOVERY H3_DISCOVERY`
 option API documentation.
 
Note that a request whose `getScheme() URI scheme` is not
 `"https"` will never be sent over HTTP/3. In this implementation,
 HTTP/3 is not used if a proxy is selected.

 
 If a concrete instance of `HttpClient` doesn't support sending a
 request through HTTP/3, an `UnsupportedProtocolVersionException` may be
 thrown, either when `build() building` the client with
 a `version(Version) preferred version` set to HTTP/3,
 or when attempting to send a request with `version(Version)
 HTTP/3 enabled` when `HTTP_3_URI_ONLY HTTP_3_URI_ONLY`
 was `setOption(HttpOption, Object) specified`.
 This may typically happen if the `sslContext() SSLContext`
 or `sslParameters() SSLParameters` configured on the client instance cannot
 be used with HTTP/3.

**参见**

- UnsupportedProtocolVersionException
- Builder#version(Version)
- HttpRequest.Builder#version(Version)
- HttpRequest.Builder#setOption(HttpOption, Object)
- HttpOption#H3_DISCOVERY

> *Since 11*
