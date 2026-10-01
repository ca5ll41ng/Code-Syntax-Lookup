---
id: "en-php-guide-class-snmpexception"
language: "php"
lang: "en"
category: "guide"
name: "class.snmpexception"
title: "The SNMPException class"
module: "snmp"
source_url: "https://www.php.net/manual/en/class.snmpexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SNMPException class

SNMPException

  Introduction  Represents an error raised by SNMP. You should not throw a `SNMPException` from your own code. See Exceptions for more information about Exceptions in PHP.     Class Synopsis   SNMPException   `extends` `RuntimeException`          Properties 
- **`code`** — `SNMP` library error code. Use `Exception::getCode()` to access it.
