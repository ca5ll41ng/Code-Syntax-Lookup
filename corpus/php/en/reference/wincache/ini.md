---
id: "en-php-guide-wincache-configuration"
language: "php"
lang: "en"
category: "guide"
name: "wincache.configuration"
title: "Runtime Configuration"
module: "wincache"
source_url: "https://www.php.net/manual/en/wincache.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

The following table lists and explains the configuration settings provided by the WinCache extension:

|  |  | Minimum | Maximum |  |  |
| --- | --- | --- | --- | --- | --- |
| wincache.fcenabled | "1" | "0" | "1" | `INI_ALL` | Available as of WinCache 1.0.0 |
| wincache.fcenabledfilter | "NULL" | "NULL" | "NULL" | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.fcachesize | "24" | "5" | "255" | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.fcndetect | "1" | "0" | "1" | `INI_SYSTEM` | Available as of WinCache 1.1.0 |
| wincache.maxfilesize | "256" | "10" | "2048" | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.ocenabled | "1" | "0" | "1" | `INI_ALL` | Available as of WinCache 1.0.0. Removed as of 2.0.0.0 |
| wincache.ocenabledfilter | "NULL" | "NULL" | "NULL" | `INI_SYSTEM` | Available as of WinCache 1.0.0. Removed as of 2.0.0.0 |
| wincache.ocachesize | "96" | "15" | "255" | `INI_SYSTEM` | Available as of WinCache 1.0.0. Removed as of 2.0.0.0 |
| wincache.filecount | "4096" | "1024" | "16384" | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.chkinterval | "30" | "0" | "300" | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.ttlmax | "1200" | "0" | "7200" | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.enablecli | 0 | 0 | 1 | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.ignorelist | NULL | NULL | NULL | `INI_ALL` | Available as of WinCache 1.0.0 |
| wincache.namesalt | NULL | NULL | NULL | `INI_SYSTEM` | Available as of WinCache 1.0.0 |
| wincache.ucenabled | 1 | 0 | 1 | `INI_SYSTEM` | Available as of WinCache 1.1.0 |
| wincache.ucachesize | 8 | 5 | 85 | `INI_SYSTEM` | Available as of WinCache 1.1.0 |
| wincache.scachesize | 8 | 5 | 85 | `INI_SYSTEM` | Available as of WinCache 1.1.0 |
| wincache.rerouteini | NULL | NULL | NULL | `INI_SYSTEM` | Available as of WinCache 1.2.0. Removed as of 1.3.7 |
| wincache.reroute_enabled | 1 | 0 | 1 | `INI_SYSTEM`\|`INI_PERDIR` | Available as of WinCache 1.3.7 |
| wincache.srwlocks | 1 | 0 | 1 | `INI_SYSTEM` | Available as of WinCache 1.3.6.3. Removed as of 2.0.0.0 |
| wincache.filemapdir | NULL | NULL | NULL | `INI_SYSTEM` | Available as of WinCache 1.3.7.4 |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$wincache.fcenabled` `bool`** — Enables or disables the file cache functionality.
- **`$wincache.fcenabledfilter` `string`** — Defines a comma-separated list of IIS web site identifiers where file cache should be enabled or disabled. This setting works in conjunction with `wincache.fcenabled`: if `wincache.fcenabled` is set to 1, then the sites listed in the `wincache.fcenabledfilter` will have the file cache turned off; if `wincache.fcenabled` is set to 0, then the sites listed in the `wincache.fcenabledfilter` will have the file cache turned on.
- **`$wincache.fcachesize` `int`** — Defines the maximum memory size (in megabytes) that is allocated for the file cache. If the total size of all the cached files exceeds the value specified in this setting, then most stale files will be removed from the file cache.
- **`$wincache.fcndetect` `bool`** — Enables or disables the file change notification detection functionality. If file change notification is supported then it will be used to refresh the opcode and file cache entries as soon as the corresponding files are modified on a file system. If file change notification is not supported, for example when using network file shares, then wincache will poll for file changes at regular time intervals specified by `wincache.chkinterval`.
- **`$wincache.maxfilesize` `int`** — Defines the maximum allowed size (in kilobytes) for a single file to be cached. If a file size exceeds the specified value, the file will not be cached. This setting applies to the file cache only.
- **`$wincache.ocenabled` `bool`**
  > This option has been *REMOVED* as of 2.0.0.0

 — Enables or disables the opcode cache functionality
- **`$wincache.ocenabledfilter` `string`**
  > This option has been *REMOVED* as of 2.0.0.0

 — Defines a comma-separated list of IIS web site identifiers where opcode cache should be enabled or disabled. This setting works in conjunction with `wincache.ocenabled`: if `wincache.ocenabled` is set to 1, then the sites listed in the `wincache.ocenabledfilter` will have the opcode cache turned off; if `wincache.ocenabled` is set to 0, then the sites listed in the `wincache.ocenabledfilter` will have the opcode cache turned on.
- **`$wincache.ocachesize` `int`**
  > This option has been *REMOVED* as of 2.0.0.0

 — Defines the maximum memory size (in megabytes) that is allocated for the opcode cache. If the cached opcode size exceeds the specified value, then most stale opcode will be removed from the cache. Note that the opcode cache size must be at least 3 times bigger than file cache size. If that is not the case the opcode cache size will be automatically increased.
- **`$wincache.filecount` `int`** — Defines how many files are expected to be cached by the extension, so that appropriate memory size is allocated at the startup time. If the number of files exceeds the specified value, the WinCache will re-allocate more memory as needed.
- **`$wincache.chkinterval` `int`** — Defines how often (in seconds) the extension checks for file changes in order to refresh the cache. Setting it to 0 will disable the refreshing of the cache. The file changes will not be reflected in the cache unless the cache entry for that file is removed by scavenger or IIS application pool is recycled or wincache_refresh_if_changed function is called.
- **`$wincache.ttlmax` `int`** — Defines the maximum time to live (in seconds) for a cached entry without being used. Setting it to 0 will disable the cache scavenger, so the cached entries will never be removed from the cache during the lifetime of the IIS worker process.
- **`$wincache.enablecli` `bool`** — Defines if caching is enabled when PHP is running in command line (CLI) mode.
- **`$wincache.ignorelist` `string`** — Defines a list of files that should not be cached by the extension. The files list is specified by using file names only, separated by the pipe symbol - "|". **`wincache.ignorelist` example** ```ini wincache.ignorelist = "index.php|misc.php|admin.php" ```
- **`$wincache.namesalt` `string`** — Defines a string that will be used when naming the extension specific objects that are stored in shared memory. This is used to avoid conflicts that may be caused if other applications within an IIS worker process tries to access shared memory. The length of the namesalt string cannot exceed 8 characters.
- **`$wincache.ucenabled` `bool`** — Enables or disables the user cache functionality.
- **`$wincache.ucachesize` `int`** — Defines the maximum memory size in megabytes that is allocated for the user cache. If the total size of variables stored in the user cache exceeds the specified value, then the most stale variables will be removed from the cache.
- **`$wincache.scachesize` `int`** — Defines the maximum memory size in megabytes that is allocated for the session cache. If the total size of data stored in the session cache exceeds the specified value, then the most stale data will be removed from the cache.
- **`$wincache.rerouteini` `string`**
  > This option has been *REMOVED* as of 1.3.7. See `wincache.reroute_enabled` for similar functionality as of 1.3.7.

 — Specifies an absolute or a relateve path to the reroute.ini file that contains the list of PHP functions whose implementation should be replaced with the WinCache function equivalents. If a relative path is specified then it is assumed to be relative to the location of php-cgi.exe file.
- **`$wincache.reroute_enabled` `bool`** — Enables or disables the rerouting of certain file I/O functions through the file cache.
- **`$wincache.srwlocks` `bool`**
  > This option has been *REMOVED* as of 2.0.0.0

 — Enables or disables the use of shared reader/writer locks. Disabling is useful when troubleshooting deadlock conditions in WinCache.
- **`$wincache.filemapdir` `string`** — Specifies an absolute path to a directory where WinCache will store the temporary files used for shared memory segments. — This directory must be on the local machine and not on a networked file system. — If the directory is not specified, WinCache will use the Windows System Page File for all shared memory segments.
