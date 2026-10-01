---
id: "en-php-guide-network-constants"
language: "php"
lang: "en"
category: "guide"
name: "network.constants"
title: "Predefined Constants"
module: "network"
source_url: "https://www.php.net/manual/en/network.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are always available as part of the PHP core.

- **`LOG_CONS` (`int`)** — If there is an error while sending data to the system logger, write directly to the system console.
- **`LOG_NDELAY` (`int`)** — Open the connection to the logger immediately.
- **`LOG_ODELAY` (`int`)** — Delay opening the connection until the first message is logged. This is the default behaviour.
- **`LOG_NOWAIT` (`int`)**
- **`LOG_PERROR` (`int`)** — Additionally log messages to `STDERR`.
- **`LOG_PID` (`int`)** — Include the PID with each log message.

- **`LOG_AUTH` (`int`)** — For security/authorization messages.
  > Use `LOG_AUTHPRIV` instead when available.


- **`LOG_AUTHPRIV` (`int`)** — For private security/authorization messages.
- **`LOG_CRON` (`int`)** — For clock daemon messages. For example cron or at.
- **`LOG_DAEMON` (`int`)** — For system daemon messages.
- **`LOG_KERN` (`int`)** — For kernel messages.
- **`LOG_LOCAL0` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL1` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL2` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL3` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL4` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL5` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL6` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LOCAL7` (`int`)** — Reserved for local use.
  > Not available on Windows.


- **`LOG_LPR` (`int`)** — For messages from the line printer subsystem.
- **`LOG_MAIL` (`int`)** — For messages from the mail subsystem.
- **`LOG_NEWS` (`int`)** — For messages from the USENET news subsystem.
- **`LOG_SYSLOG` (`int`)** — For messages generated internally by syslogd.
- **`LOG_USER` (`int`)** — For generic user-level messages.
- **`LOG_UUCP` (`int`)** — For messages from the UUCP subsystem.

- **`LOG_EMERG` (`int`)** — Emergency, the system is unusable. This corresponds to a panic condition. Usually broadcast to all processes.
- **`LOG_ALERT` (`int`)** — Alert, immediate action is required. For example, a corrupted system database.
- **`LOG_CRIT` (`int`)** — Critical, action is required. For example, a hard device errors.
- **`LOG_ERR` (`int`)** — Errors messages.
- **`LOG_WARNING` (`int`)** — Warning messages.
- **`LOG_NOTICE` (`int`)** — Notice messages, corresponds to conditions that are not error conditions, but that may require special handling.
- **`LOG_INFO` (`int`)** — Informational messages.
- **`LOG_DEBUG` (`int`)** — Debugging messages that contain information normally of use only when debugging a program.

- **`DNS_ANY` (`int`)** — Any Resource Record. On most systems this returns all resource records, however due to eccentricities in the performance of `libresolv` between platforms this is not guaranteed. — The slower `DNS_ALL` will collect all records more reliably.
- **`DNS_ALL` (`int`)** — Iteratively query the name server for each available record type.
- **`DNS_A` (`int`)** — IPv4 Address Resource.
- **`DNS_AAAA` (`int`)** — IPv6 Address Resource.
- **`DNS_A6` (`int`)** — Defined as part of early IPv6, but downgraded to historic by [RFC 6563](6563).
- **`DNS_CAA` (`int`)** — Certification Authority Authorization Resource. Available as of PHP 7.0.16 and 7.1.2.
  > Not available on Windows.


- **`DNS_CNAME` (`int`)** — Alias (Canonical Name) Resource.
- **`DNS_HINFO` (`int`)** — Host Info Resource. For more explanations and meanings of these values, visit IANA's page on [Operating System Names]().
- **`DNS_MX` (`int`)** — Mail Exchanger Resource.
- **`DNS_NAPTR` (`int`)** — Naming Authority Pointer.
- **`DNS_NS` (`int`)** — Authoritative Name Server Resource.
- **`DNS_PTR` (`int`)** — Pointer Resource.
- **`DNS_SOA` (`int`)** — Start of Authority Resource.
- **`DNS_SRV` (`int`)** — Service locator.
- **`DNS_TXT` (`int`)** — Text Resource.
