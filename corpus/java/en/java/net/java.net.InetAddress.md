---
id: "java-en-function-java-net-inetaddress"
language: "java"
lang: "en"
category: "function"
name: "java.net.InetAddress"
title: "InetAddress"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress

This class represents an Internet Protocol (IP) address.

 

 An IP address is either a 32-bit or 128-bit unsigned number
 used by IP, a lower-level protocol on which protocols like UDP and
 TCP are built. The IP address architecture is defined by RFC&nbsp;790:
 Assigned Numbers,  RFC&nbsp;1918:
 Address Allocation for Private Internets, RFC&nbsp;2365:
 Administratively Scoped IP Multicast, and RFC&nbsp;2373: IP
 Version 6 Addressing Architecture. An instance of an
 InetAddress consists of an IP address and possibly its
 corresponding host name (depending on whether it is constructed
 with a host name or whether it has already done reverse host name
 resolution).

  Address types 

 
   Description of unicast and multicast address types
   
   Address TypeDescription
   
   
   unicast
       An identifier for a single interface. A packet sent to
         a unicast address is delivered to the interface identified by
         that address.

         

 The Unspecified Address -- Also called anylocal or wildcard
         address. It must never be assigned to any node. It indicates the
         absence of an address. One example of its use is as the target of
         bind, which allows a server to accept a client connection on any
         interface, in case the server host has multiple interfaces.

         

 The unspecified address must not be used as
         the destination address of an IP packet.

         

 The Loopback Addresses -- This is the address
         assigned to the loopback interface. Anything sent to this
         IP address loops around and becomes IP input on the local
         host. This address is often used when testing a
         client.
   multicast
       An identifier for a set of interfaces (typically belonging
         to different nodes). A packet sent to a multicast address is
         delivered to all interfaces identified by that address.
 
 

  IP address scope 

 

 Link-local addresses are designed to be used for addressing
 on a single link for purposes such as auto-address configuration,
 neighbor discovery, or when no routers are present.

 

 Site-local addresses are designed to be used for addressing
 inside of a site without the need for a global prefix.

 

 Global addresses are unique across the internet.

  Textual representation of IP addresses 

 The textual representation of an IP address is address family specific.

 

 For IPv4 address format, please refer to the supported
 `#format IPv4 address textual representations`;
 For IPv6 address format, please refer to the supported
 `#format IPv6 address textual representations`.

 

 There are a couple of
 System Properties affecting how IPv4 and IPv6 addresses are used.

  Host Name Resolution 

 

 The InetAddress class provides methods to resolve host names to
 their IP addresses and vice versa. The actual resolution is delegated to an
 `InetAddressResolver InetAddress resolver`.

 

 Host name-to-IP address resolution maps a host name to an IP address.
 For any host name, its corresponding IP address is returned.

 

 Reverse name resolution means that for any IP address,
 the host associated with the IP address is returned.

  The built-in InetAddress resolver implementation does
 host name-to-IP address resolution and vice versa through the use of
 a combination of local machine configuration information and network
 naming services such as the Domain Name System (DNS) and the Lightweight Directory
 Access Protocol (LDAP).
 The particular naming services that the built-in resolver uses by default
 depends on the configuration of the local machine.

 

 `InetAddress` has a service provider mechanism for InetAddress resolvers
 that allows a custom InetAddress resolver to be used instead of the built-in implementation.
 `InetAddressResolverProvider` is the service provider class. Its API docs provide all the
 details on this mechanism.

  InetAddress Caching 

 The InetAddress class has a cache to store successful as well as
 unsuccessful host name resolutions.

 

 The default behavior is to cache entries for a finite (implementation
 dependent) period of time. The result of unsuccessful host
 name resolution is cached for a very short period of time (10
 seconds) to improve performance.

 

 If the default behavior is not desired, then a Java security property
 can be set to a different Time-to-live (TTL) value for positive
 caching. Likewise, a system admin can configure a different
 negative caching TTL value when needed or extend the usage of the stale data.

 

 Three Java `java.security.Security security` properties control
 the TTL values used for positive and negative host name resolution caching:

 
 **networkaddress.cache.ttl**
 Indicates the caching policy for successful name lookups from
 the name service. The value is specified as an integer to indicate
 the number of seconds to cache the successful lookup. The default
 setting is to cache for an implementation specific period of time.
 

 A value of -1 indicates "cache forever".
 
 **networkaddress.cache.stale.ttl**
 Indicates the caching policy for stale names. The value is specified as
 an integer to indicate the number of seconds that stale names will be kept in
 the cache. A name is considered stale if the TTL has expired and an attempt
 to lookup the host name again was not successful. This property is useful if
 it is preferable to use a stale name rather than fail due to an unsuccessful
 lookup. The default setting is to cache for an implementation specific period
 of time.
 

 If the value of this property is larger than "networkaddress.cache.ttl" then
 "networkaddress.cache.ttl" will be used as a refresh interval of the name in
 the cache. For example, if this property is set to 1 day and
 "networkaddress.cache.ttl" is set to 30 seconds, then the positive response
 will be cached for 1 day but an attempt to refresh it will be done every
 30 seconds.
 

 A value of 0 (zero) or if the property is not set means do not use stale
 names. Negative values are ignored.
 
 **networkaddress.cache.negative.ttl** (default: 10)
 Indicates the caching policy for un-successful name lookups
 from the name service. The value is specified as an integer to
 indicate the number of seconds to cache the failure for
 un-successful lookups.
 

 A value of 0 indicates "never cache".
 A value of -1 indicates "cache forever".
 
 

      RFC 1918: Address Allocation for Private Internets
      RFC 2365: Administratively Scoped IP Multicast
      RFC 2373: IP Version 6 Addressing Architecture
      RFC 790: Assigned numbers

**参见**

- java.net.InetAddress#getByAddress(byte[])
- java.net.InetAddress#getByAddress(java.lang.String, byte[])
- java.net.InetAddress#getAllByName(java.lang.String)
- java.net.InetAddress#getByName(java.lang.String)
- java.net.InetAddress#getLocalHost()

> *Since 1.0*
