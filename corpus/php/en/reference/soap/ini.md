---
id: "en-php-guide-soap-configuration"
language: "php"
lang: "en"
category: "guide"
name: "soap.configuration"
title: "Runtime Configuration"
module: "soap"
source_url: "https://www.php.net/manual/en/soap.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| soap.wsdl_cache_enabled | 1 | `INI_ALL` |  |
| soap.wsdl_cache_dir | /tmp | `INI_ALL` |  |
| soap.wsdl_cache_ttl | 86400 | `INI_ALL` |  |
| soap.wsdl_cache | 1 | `INI_ALL` |  |
| soap.wsdl_cache_limit | 5 | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$soap.wsdl_cache_enabled` `int`** — Enables or disables the WSDL caching feature.
- **`$soap.wsdl_cache_dir` `string`** — Sets the directory name where the SOAP extension will put cache files.
- **`$soap.wsdl_cache_ttl` `int`** — Sets the number of seconds (time to live) that cached files will be used instead of the originals.
- **`$soap.wsdl_cache` `int`** — If `$soap.wsdl_cache_enabled` is on, this setting determines the type of caching. It can be any of: `WSDL_CACHE_NONE` (`0`), `WSDL_CACHE_DISK` (`1`), `WSDL_CACHE_MEMORY` (`2`) or `WSDL_CACHE_BOTH` (`3`). This can also be set via the `$options` array in the `SoapClient` or `SoapServer` constructor.
- **`$soap.wsdl_cache_limit` `int`** — Maximum number of in-memory cached WSDL files. Adding further files into a full memory cache will delete the oldest files from it.
