---
id: "java-en-function-java-net-inet4address"
language: "java"
lang: "en"
category: "function"
name: "java.net.Inet4Address"
title: "Inet4Address"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet4Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet4Address

This class represents an Internet Protocol version 4 (IPv4) address.
 Defined by 
 RFC&nbsp;790: Assigned Numbers,
 
 RFC&nbsp;1918: Address Allocation for Private Internets,
 and RFC&nbsp;2365:
 Administratively Scoped IP Multicast

  Textual representation of IPv4 addresses 

 Textual representation of IPv4 address used as input to methods
 takes one of the following forms:

 
 
- `d.d.d.d`
 
- `d.d.d`
 
- `d.d`
 
- `d`
 

 

 When four parts are specified, each is interpreted as a byte of
 data and assigned, from left to right, to the four bytes of an IPv4
 address.

 

 When a three part address is specified, the last part is
 interpreted as a 16-bit quantity and placed in the right most two
 bytes of the network address. This makes the three part address
 format convenient for specifying Class B network addresses as
 128.net.host.

 

 When a two part address is supplied, the last part is
 interpreted as a 24-bit quantity and placed in the right most three
 bytes of the network address. This makes the two part address
 format convenient for specifying Class A network addresses as
 net.host.

 

 When only one part is given, the value is stored directly in
 the network address without any byte rearrangement.

 

 For example, the following (decimal) forms are supported by the methods
 `ofLiteral` and `getByName`
 which are capable of parsing textual representations of IPv4 addresses:
 {@snippet :
  // Dotted-decimal 'd.d.d.d' form with four part address literal
  InetAddress.getByName("007.008.009.010"); // ==> /7.8.9.10
  InetAddress.getByName("127.0.1.1");       // ==> /127.0.1.1

  // Dotted-decimal 'd.d.d' form with three part address literal,
  // the last part is placed in the right most two bytes
  // of the constructed address
  InetAddress.getByName("127.0.257"); // ==> /127.0.1.1

  // Dotted-decimal 'd.d' form with two part address literal,
  // the last part is placed in the right most three bytes
  // of the constructed address
  Inet4Address.ofLiteral("127.257"); // ==> /127.0.1.1

  // 'd' form with one decimal value that is stored directly in
  // the constructed address bytes without any rearrangement
  Inet4Address.ofLiteral("02130706689"); // ==> /127.0.1.1
 }

 

 The above forms adhere to "strict" decimal-only syntax.
 Additionally, the `ofPosixLiteral`
 method implements a POSIX `inet_addr` compatible "loose"
 parsing algorithm, allowing octal and hexadecimal address segments.
 Please refer to 
 RFC&nbsp;6943: Issues in Identifier Comparison for Security
 Purposes. Aside from `Inet4Address.ofPosixLiteral(String)`, all methods only
 support strict decimal parsing.
 

 For methods that return a textual representation as output
 value, the first form, i.e. a dotted-quad string in strict decimal notation, is used.

  The Scope of a Multicast Address 

 Historically the IPv4 TTL field in the IP header has doubled as a
 multicast scope field: a TTL of 0 means node-local, 1 means
 link-local, up through 32 means site-local, up through 64 means
 region-local, up through 128 means continent-local, and up through
 255 are global. However, the administrative scoping is preferred.
 Please refer to 
 RFC&nbsp;2365: Administratively Scoped IP Multicast

      RFC 1918: Address Allocation for Private Internets
      RFC 2365: Administratively Scoped IP Multicast
      RFC 790: Assigned numbers
      RFC 6943: Issues in Identifier Comparison for Security Purposes

> *Since 1.4*
