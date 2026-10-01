---
id: "java-en-function-socketoptions-setoption"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.setOption"
signature: "public void setOption(int optID, Object value) throws SocketException"
title: "SocketOptions.setOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.setOption

```java
public void setOption(int optID, Object value) throws SocketException
```

Enable/disable the option specified by `optID`. If the option
 is to be enabled, and it takes an option-specific "value", this is passed in `value`.
 The actual type of `value` is option-specific, and it is an error to pass something
 that isn't of the expected type:
 {@snippet lang=java :
 SocketImpl s;
 ...
 s.setOption(SO_LINGER, Integer.valueOf(10));
    // OK - set SO_LINGER w/ timeout of 10 sec.
 s.setOption(SO_LINGER, Double.valueOf(10));
    // ERROR - expects java.lang.Integer
}
 If the requested option is binary, it can be set using this method by a `Boolean`:
 {@snippet lang=java :
 s.setOption(TCP_NODELAY, Boolean.TRUE);
    // OK - enables TCP_NODELAY, a binary option
 }
 Any option can be disabled using this method with a `FALSE`:
 {@snippet lang=java :
 s.setOption(TCP_NODELAY, Boolean.FALSE);
    // OK - disables TCP_NODELAY
 s.setOption(SO_LINGER, Boolean.FALSE);
    // OK - disables SO_LINGER
 }
 For an option that has a notion of on and off, and requires a non-boolean parameter, setting
 its value to anything other than `FALSE` implicitly enables it.

**参数**

- **optID** — identifies the option
- **value** — the parameter of the socket option

**异常**

- **SocketException** — if the option is unrecognized, the socket is closed, or some low-level error occurred

**参见**

- #getOption(int)
