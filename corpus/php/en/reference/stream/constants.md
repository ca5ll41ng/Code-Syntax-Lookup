---
id: "en-php-guide-stream-constants"
language: "php"
lang: "en"
category: "guide"
name: "stream.constants"
title: "Predefined Constants"
module: "stream"
source_url: "https://www.php.net/manual/en/stream.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`STREAM_CLIENT_ASYNC_CONNECT` (`int`)** — Open client socket asynchronously. This option must be used together with the `STREAM_CLIENT_CONNECT` flag.
- **`STREAM_CLIENT_CONNECT` (`int`)** — Open client socket connection. Client sockets should always include this flag.
- **`STREAM_CLIENT_PERSISTENT` (`int`)** — Client socket should remain persistent between page loads.

- **`STREAM_SERVER_BIND` (`int`)** — Indicates that a stream should bind to the specified target. Server sockets should always include this flag.
- **`STREAM_SERVER_LISTEN` (`int`)** — Indicates that a stream bound using `STREAM_SERVER_BIND` flag to start listening to the socket. Connection-orientated transports (such as TCP) must use this flag, otherwise the server socket will not be enabled. Using this flag for connect-less transports (such as UDP) is an error.

- **`STREAM_SHUT_RD` (`int`)** — Disable further receptions.
- **`STREAM_SHUT_WR` (`int`)** — Disable further transmissions.
- **`STREAM_SHUT_RDWR` (`int`)** — Disable further receptions and transmissions.

- **`STREAM_OOB` (`int`)** — Process OOB (`out-of-band`) data.
- **`STREAM_PEEK` (`int`)** — Retrieve data from the socket, but do not consume the buffer. — Subsequent calls to `fread()` or `stream_socket_recvfrom()` will see the same data.
  > Is not a valid flag for `stream_socket_sendto()`.



- **`STREAM_FILTER_READ` (`int`)** — Indicate that the specified filter should only be applied when *reading*.
- **`STREAM_FILTER_WRITE` (`int`)** — Indicate that the specified filter should only be applied when *writing*.
- **`STREAM_FILTER_ALL` (`int`)** — Equivalent to STREAM_FILTER_READ | STREAM_FILTER_WRITE.

- **`STREAM_CRYPTO_METHOD_ANY_CLIENT` (`int`)** — Any TLS or SSL version on a client stream.
- **`STREAM_CRYPTO_METHOD_SSLv2_CLIENT` (`int`)** — SSL 2 on a client stream.
- **`STREAM_CRYPTO_METHOD_SSLv3_CLIENT` (`int`)** — SSL 3 on a client stream.
- **`STREAM_CRYPTO_METHOD_SSLv23_CLIENT` (`int`)** — TLS 1.0, 1.1 or 1.2 on a client stream.
- **`STREAM_CRYPTO_METHOD_TLS_CLIENT` (`int`)** — Any TLS version on a client stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_0_CLIENT` (`int`)** — TLS 1.0 on a client stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT` (`int`)** — TLS 1.1 on a client stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT` (`int`)** — TLS 1.2 on a client stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT` (`int`)** — TLS 1.3 on a client stream.
- **`STREAM_CRYPTO_METHOD_ANY_SERVER` (`int`)** — Any TLS or SSL version on a server stream.
- **`STREAM_CRYPTO_METHOD_SSLv2_SERVER` (`int`)** — SSL 2 on a server stream.
- **`STREAM_CRYPTO_METHOD_SSLv3_SERVER` (`int`)** — SSL 3 on a server stream.
- **`STREAM_CRYPTO_METHOD_SSLv23_SERVER` (`int`)** — TLS 1.0, 1.1 or 1.2 on a server stream.
- **`STREAM_CRYPTO_METHOD_TLS_SERVER` (`int`)** — Any TLS version on a server stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_0_SERVER` (`int`)** — TLS 1.0 on a server stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_1_SERVER` (`int`)** — TLS 1.1 on a server stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_2_SERVER` (`int`)** — TLS 1.2 on a server stream.
- **`STREAM_CRYPTO_METHOD_TLSv1_3_SERVER` (`int`)** — TLS 1.3 on a server stream.
- **`STREAM_CRYPTO_PROTO_SSLv3` (`int`)** —  `STREAM_CRYPTO_METHOD_SSLv3_SERVER`.
- **`STREAM_CRYPTO_PROTO_TLSv1_0` (`int`)** —  `STREAM_CRYPTO_METHOD_TLSv1_0_SERVER`.
- **`STREAM_CRYPTO_PROTO_TLSv1_1` (`int`)** —  `STREAM_CRYPTO_METHOD_TLSv1_1_SERVER`.
- **`STREAM_CRYPTO_PROTO_TLSv1_2` (`int`)** —  `STREAM_CRYPTO_METHOD_TLSv1_2_SERVER`.
- **`STREAM_CRYPTO_PROTO_TLSv1_3` (`int`)** —  `STREAM_CRYPTO_METHOD_TLSv1_3_SERVER`.

- **`STREAM_MUST_SEEK` (`int`)** — Ensure stream is seekable. This may result in a copy of the stream being created.
- **`STREAM_IGNORE_URL` (`int`)** — Do not use plugin wrappers.

 TODO: Need to prevent chunking 

  Constants used with `stream_socket_pair()`  
> Not all constants might be available on a given system.

 
- **`STREAM_PF_INET` (`int`)** — Internet Protocol Version 4 (IPv4).
- **`STREAM_PF_INET6` (`int`)** — Internet Protocol Version 6 (IPv6).
- **`STREAM_PF_UNIX` (`int`)** — Unix system internal protocols.

 
- **`STREAM_SOCK_DGRAM` (`int`)** — Provides datagrams, which are connectionless messages. For example: UDP.
- **`STREAM_SOCK_RAW` (`int`)** — Provides a raw socket, which provides access to internal network protocols and interfaces. Usually this type of socket is just available to the root user.
- **`STREAM_SOCK_RDM` (`int`)** — Provides a RDM (Reliably-delivered messages) socket.
- **`STREAM_SOCK_SEQPACKET` (`int`)** — Provides a sequenced packet stream socket.
- **`STREAM_SOCK_STREAM` (`int`)** — Provides sequenced, two-way byte streams with a transmission mechanism for out-of-band data. For example: TCP.

 
- **`STREAM_IPPROTO_ICMP` (`int`)** — Provides a ICMP socket.
- **`STREAM_IPPROTO_IP` (`int`)** — Provides a IP socket.
- **`STREAM_IPPROTO_RAW` (`int`)** — Provides a RAW socket.
- **`STREAM_IPPROTO_TCP` (`int`)** — Provides a TCP socket.
- **`STREAM_IPPROTO_UDP` (`int`)** — Provides a UDP socket.

 

  Constants used with `stream_notification_callback()`  
- **`STREAM_NOTIFY_RESOLVE` (`int`)** — A remote address required for this stream has been resolved, or the resolution failed. — See `$severity` for an indication of which happened.
  > Support for this notification code is not yet implemented.

- **`STREAM_NOTIFY_CONNECT` (`int`)** — A connection with an external resource has been established.
- **`STREAM_NOTIFY_AUTH_REQUIRED` (`int`)** — Additional authorization is required to access the specified resource. — Typical issued with `$severity` level of `STREAM_NOTIFY_SEVERITY_ERR`.
- **`STREAM_NOTIFY_MIME_TYPE_IS` (`int`)** — The `mime-type` of resource has been identified. — Refer to `$message` for a description of the discovered type.
- **`STREAM_NOTIFY_FILE_SIZE_IS` (`int`)** — The `size` of the resource has been discovered.
- **`STREAM_NOTIFY_REDIRECTED` (`int`)** — The external resource has redirected the stream to an alternate location. — Refer to `$message`.
- **`STREAM_NOTIFY_PROGRESS` (`int`)** — Indicates current progress of the stream transfer in `$bytes_transferred` and possibly `$bytes_max` as well.
- **`STREAM_NOTIFY_COMPLETED` (`int`)** — There is no more data available on the stream. (First implemented as of PHP 8.3.0.)
- **`STREAM_NOTIFY_FAILURE` (`int`)** — A generic error occurred on the stream. — Refer to `$message` and `$message_code` for details.
- **`STREAM_NOTIFY_AUTH_RESULT` (`int`)** — Authorization has been completed (with or without success).

 
- **`STREAM_NOTIFY_SEVERITY_INFO` (`int`)** — Normal, non-error related, notification.
- **`STREAM_NOTIFY_SEVERITY_WARN` (`int`)** — Non critical error condition. Processing may continue.
- **`STREAM_NOTIFY_SEVERITY_ERR` (`int`)** — A critical error occurred. Processing cannot continue.

 

 `streamWrapper` related constants 
- **`STREAM_IS_URL` (`int`)** — Indicates that the stream wrapper protocol is a URL protocol.

 
- **`STREAM_CAST_FOR_SELECT` (`int`)** — Indicates that `streamWrapper::stream_cast()` was called by `streamWrapper::stream_select()`.
- **`STREAM_CAST_AS_STREAM` (`int`)** — Indicates that `streamWrapper::stream_cast()` was called by any method other than `streamWrapper::stream_select()`.

 
- **`STREAM_META_TOUCH` (`int`)** — Indicates a call to `touch()`.
- **`STREAM_META_OWNER` (`int`)** — Indicates a call to `chown()`.
- **`STREAM_META_OWNER_NAME` (`int`)** — Indicates a call to `chown()`.
- **`STREAM_META_GROUP` (`int`)** — Indicates a call to `chgrp()`.
- **`STREAM_META_GROUP_NAME` (`int`)** — Indicates a call to `chgrp()`.
- **`STREAM_META_ACCESS` (`int`)** — Indicates a call to `chmod()`.

 
- **`STREAM_MKDIR_RECURSIVE` (`int`)** — Recursive flag for the options parameters of `mkdir()` and `rmdir()`.

 
- **`STREAM_USE_PATH` (`int`)** — Flag indicating that relative paths should use the include path to locate the resource.
- **`STREAM_REPORT_ERRORS` (`int`)** — Flag indicating that the stream wrapper should report errors. If the flag is not set, no errors should be reported. — Errors are usually reported by the use of the `trigger_error()` function.

 
- **`STREAM_OPTION_BLOCKING` (`int`)** — Set blocking/non-blocking mode on a stream.
- **`STREAM_OPTION_READ_BUFFER` (`int`)** — Set read file buffering on a stream.
  - **`STREAM_BUFFER_NONE` (`int`)** — No buffering.
  - **`STREAM_BUFFER_LINE` (`int`)** — Line buffering.
  - **`STREAM_BUFFER_FULL` (`int`)** — Full buffering.

- **`STREAM_OPTION_READ_TIMEOUT` (`int`)** — Set read file buffering on a stream.
- **`STREAM_OPTION_WRITE_BUFFER` (`int`)** — Set write file buffering on a stream. — See `STREAM_OPTION_READ_BUFFER` for valid buffer options.

 
- **`STREAM_URL_STAT_LINK` (`int`)** — Only information about the link itself should be returned, not the resource pointed to by the link.
- **`STREAM_URL_STAT_QUIET` (`int`)** — The wrapper should not raise any errors.

 

 `php_user_filter` related constants 
- **`PSFS_PASS_ON` (`int`)** — Return value indicating that the userspace filter returned buckets in `$out`.
- **`PSFS_FEED_ME` (`int`)** — Return value indicating that the userspace filter did not return buckets in `$out`. (i.e. No data available.)
- **`PSFS_ERR_FATAL` (`int`)** — Return value indicating that the userspace filter encountered an unrecoverable error. (i.e. Invalid data received.)

 
- **`PSFS_FLAG_NORMAL` (`int`)** — Regular read/write.
- **`PSFS_FLAG_FLUSH_INC` (`int`)** — An incremental flush.
- **`PSFS_FLAG_FLUSH_CLOSE` (`int`)** — Final flush prior to closing.
