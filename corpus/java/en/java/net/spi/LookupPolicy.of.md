---
id: "java-en-function-lookuppolicy-of"
language: "java"
lang: "en"
category: "function"
name: "LookupPolicy.of"
signature: "public static LookupPolicy of(int characteristics)"
title: "LookupPolicy.of"
directive: "method"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LookupPolicy.of

```java
public static LookupPolicy of(int characteristics)
```

This factory method creates a `LookupPolicy LookupPolicy` instance with
 the given `characteristics` value.

 

 The `characteristics` value is an integer bit mask which defines
 parameters of a forward lookup operation. These parameters define at least:
 
     
- the family type of the returned addresses
     
- the order in which a `InetAddressResolver resolver`
         implementation should return its results
 

 

 To request addresses of specific family types the following bit masks can be combined:
 
     
- `IPV4`: to request IPv4 addresses
     
- `IPV6`: to request IPv6 addresses
 

 
It is an error if neither `IPV4` or `IPV6` are set.

 

 To request a specific ordering of the results:
 
     
- `IPV4_FIRST`: return IPv4 addresses before any IPv6 address
     
- `IPV6_FIRST`: return IPv6 addresses before any IPv4 address
 

 
If neither `IPV4_FIRST` or `IPV6_FIRST` are set it
 implies "system"
 order of addresses.
 It is an error to request both `IPV4_FIRST` and `IPV6_FIRST`.

**参数**

- **characteristics** — a value which represents the set of lookup characteristics

**返回**

- an instance of `InetAddressResolver.LookupPolicy`

**异常**

- **IllegalArgumentException** — if an illegal characteristics bit mask is provided

**参见**

- InetAddressResolver#lookupByName(String, LookupPolicy)
