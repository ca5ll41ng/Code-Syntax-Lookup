---
id: "java-en-function-java-net-inet6address"
language: "java"
lang: "en"
category: "function"
name: "java.net.Inet6Address"
title: "Inet6Address"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet6Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet6Address

This class represents an Internet Protocol version 6 (IPv6) address.
 Defined by 
 RFC&nbsp;2373: IP Version 6 Addressing Architecture.

  Textual representation of IPv6 addresses 

 Textual representation of IPv6 address used as input to methods
 takes one of the following forms:

 
   
- 

 The preferred form is x:x:x:x:x:x:x:x,
   where the 'x's are
   the hexadecimal values of the eight 16-bit pieces of the
   address. This is the full form.  For example,

   
   
- `1080:0:0:0:8:800:200C:417A`
   

   

 Note that it is not necessary to write the leading zeros in
   an individual field. However, there must be at least one numeral
   in every field, except as described below.

   
- 

 Due to some methods of allocating certain styles of IPv6
   addresses, it will be common for addresses to contain long
   strings of zero bits. In order to make writing addresses
   containing zero bits easier, a special syntax is available to
   compress the zeros. The use of "::" indicates multiple groups
   of 16-bits of zeros. The "::" can only appear once in an address.
   The "::" can also be used to compress the leading and/or trailing
   zeros in an address. For example,

   
   
- `1080::8:800:200C:417A`
   

   
- 

 An alternative form that is sometimes more convenient
   when dealing with a mixed environment of IPv4 and IPv6 nodes is
   x:x:x:x:x:x:d.d.d.d, where the 'x's are the hexadecimal values
   of the six high-order 16-bit pieces of the address, and the 'd's
   are the decimal values of the four low-order 8-bit pieces of the
   standard IPv4 representation address, for example,

   
   
- `::FFFF:129.144.52.38`
   
- `::129.144.52.38`
   

   

 where "::FFFF:d.d.d.d" and "::d.d.d.d" are, respectively, the
   general forms of an IPv4-mapped IPv6 address and an
   IPv4-compatible IPv6 address. Note that the IPv4 portion must be
   in the "d.d.d.d" form. The following forms are invalid:

   
   
- `::FFFF:d.d.d`
   
- `::FFFF:d.d`
   
- `::d.d.d`
   
- `::d.d`
   

   

 The following form:

   
   
- `::FFFF:d`
   

   

 is valid, however it is an unconventional representation of
   the IPv4-compatible IPv6 address,

   
   
- `::255.255.0.d`
   

   

 while "::d" corresponds to the general IPv6 address
   "0:0:0:0:0:0:0:d".
 

 

 For methods that return a textual representation as output
 value, the full form is used. Inet6Address will return the full
 form because it is unambiguous when used in combination with other
 textual data.

 Special IPv6 address

 
 
   IPv4-mapped address
         Of the form ::ffff:w.x.y.z, this IPv6 address is used to
         represent an IPv4 address. It allows the native program to
         use the same address data structure and also the same
         socket when communicating with both IPv4 and IPv6 nodes.

         

In InetAddress and Inet6Address, it is used for internal
         representation; it has no functional role. Java will never
         return an IPv4-mapped address.  These classes can take an
         IPv4-mapped address as input, both in byte array and text
         representation. However, it will be converted into an IPv4
         address.
 
 

 Textual representation of IPv6 scoped addresses

 

The textual representation of IPv6 addresses as described above can be
 extended to specify IPv6 scoped addresses. This extension to the basic
 addressing architecture is described in 
 RFC&nbsp;4007: IPv6 Scoped Address Architecture.

 

 Because link-local and site-local addresses are non-global, it is possible
 that different hosts may have the same destination address and may be
 reachable through different interfaces on the same originating system. In
 this case, the originating system is said to be connected to multiple zones
 of the same scope. In order to disambiguate which is the intended destination
 zone, it is possible to append a zone identifier (or scope_id) to an
 IPv6 address.

 

 The general format for specifying the scope_id is the following:

 IPv6-address%scope_id
 

 The IPv6-address is a literal IPv6 address as described above.
 The scope_id refers to an interface on the local system, and it can be
 specified in two ways.
 
- As a numeric identifier. This must be a positive integer
 that identifies the particular interface and scope as understood by the
 system. Usually, the numeric values can be determined through administration
 tools on the system. Each interface may have multiple values, one for each
 scope. If the scope is unspecified, then the default value used is zero.
 
- As a string. This must be the exact string that is returned by
 `getName` for the particular interface in
 question. When an Inet6Address is created in this way, the numeric scope-id
 is determined at the time the object is created by querying the relevant
 NetworkInterface.

 

 Note also, that the numeric scope_id can be retrieved from
 Inet6Address instances returned from the NetworkInterface class. This can be
 used to find out the current scope ids configured on the system.

 Textual representation of IPv6 addresses as method inputs

 

 Methods of `InetAddress` and `Inet6Address` that accept a
 textual representation of an IPv6 address allow for that representation
 to be enclosed in square brackets. For example,
 {@snippet :
  // The full IPv6 form
  InetAddress.getByName("1080:0:0:0:8:800:200C:417A");   // ==> /1080:0:0:0:8:800:200c:417a
  InetAddress.getByName("[1080:0:0:0:8:800:200C:417A]"); // ==> /1080:0:0:0:8:800:200c:417a

  // IPv6 scoped address with scope-id as string
  Inet6Address.ofLiteral("fe80::1%en0");   // ==> /fe80:0:0:0:0:0:0:1%en0
  Inet6Address.ofLiteral("[fe80::1%en0]"); // ==> /fe80:0:0:0:0:0:0:1%en0
 }
      RFC 2373: IP Version 6 Addressing Architecture
      RFC 4007: IPv6 Scoped Address Architecture

> *Since 1.4*
