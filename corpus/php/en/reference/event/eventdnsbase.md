---
id: "en-php-guide-class-eventdnsbase"
language: "php"
lang: "en"
category: "guide"
name: "class.eventdnsbase"
title: "The EventDnsBase class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventdnsbase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventDnsBase class

EventDnsBase

   Introduction  Represents Libevent's DNS base structure. Used to resolve DNS asynchronously, parse configuration files like resolv.conf etc.      Class Synopsis    `EventDnsBase`     `final` `EventDnsBase`      `const` `int` `EventDnsBase::OPTION_SEARCH` 1   `const` `int` `EventDnsBase::OPTION_NAMESERVERS` 2   `const` `int` `EventDnsBase::OPTION_MISC` 4   `const` `int` `EventDnsBase::OPTION_HOSTSFILE` 8   `const` `int` `EventDnsBase::OPTIONS_ALL` 15   `const` `int` `EventDnsBase::DISABLE_WHEN_INACTIVE` 32768   `const` `int` `EventDnsBase::INITIALIZE_NAMESERVERS` 1   `const` `int` `EventDnsBase::NAMESERVERS_NO_DEFAULT` 65536          Predefined Constants 
- **`EventDnsBase::OPTION_SEARCH`** — Tells to read the domain and search fields from the `resolv.conf` file and the `ndots` option, and use them to decide which domains(if any) to search for hostnames that aren’t fully-qualified.
- **`EventDnsBase::OPTION_NAMESERVERS`** — Tells to learn the nameservers from the `resolv.conf` file.
- **`EventDnsBase::OPTION_MISC`**
- **`EventDnsBase::OPTION_HOSTSFILE`** — Tells to read a list of hosts from `/etc/hosts` as part of loading the `resolv.conf` file.
- **`EventDnsBase::OPTIONS_ALL`** — Tells to learn as much as it can from the `resolv.conf` file.
- **`EventDnsBase::DISABLE_WHEN_INACTIVE`** — Do not prevent the libevent event loop from exiting when we have no active DNS requests.
- **`EventDnsBase::INITIALIZE_NAMESERVERS`** — Process the `resolv.conf`.
- **`EventDnsBase::NAMESERVERS_NO_DEFAULT`** — Do not add default nameserver if there are no nameservers in the `resolv.conf`.
