---
id: "en-php-guide-apcu-configuration"
language: "php"
lang: "en"
category: "guide"
name: "apcu.configuration"
title: "Runtime Configuration"
module: "apcu"
source_url: "https://www.php.net/manual/en/apcu.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

Although the default APCu settings are fine for many installations, serious users should consider tuning the following parameters.

There is one decision to be made configuring APCu. How much memory is going to be allocated to APCu. The ini directive that controls this is `apc.shm_size` Read the sections on this carefully below.

Once the server is running, the `apc.php` script that is bundled with the extension should be copied somewhere into the docroot and viewed with a browser as it provides a detailed analysis of the internal workings of APCu. If GD is enabled in PHP, it will even display some interesting graphs.

If APCu is working, the `Cache full count` number (on the left) will display the number of times the cache has reached maximum capacity and has had to evict entries to free up memory. During eviction, if `apc.ttl` was specified, APCu will first attempt to remove expired entries, i.e. entries whose TTL has either expired, or entries that have no TTL set and haven't been accessed in the last `apc.ttl` seconds. If `apc.ttl` was not set, or removing expired entries did not free up enough space, APCu will clear the entire cache.

The number of evictions should be minimal in a well-configured cache. If the cache is constantly being filled, and thusly forcefully freed, the resulting churning will have disparaging effects on script performance. The easiest way to minimize this number is to allocate more memory for APCu.

When APCu is compiled with mmap support (Memory Mapping), it will use only one memory segment, unlike when APCu is built with SHM (SysV Shared Memory) support that uses multiple memory segments. MMAP does not have a maximum limit like SHM does in `/proc/sys/kernel/shmmax`. In general MMAP support is recommended because it will reclaim the memory faster when the webserver is restarted and all in all reduces memory allocation impact at startup.

|  |  |  |  |
| --- | --- | --- | --- |
| apc.enabled | 1 | `INI_SYSTEM` |  |
| apc.shm_segments | 1 | `INI_SYSTEM` |  |
| apc.shm_size | "32M" | `INI_SYSTEM` |  |
| apc.entries_hint | 512 * apc.shm_size | `INI_SYSTEM` | Prior to APCu 5.1.25, the default was 4096 |
| apc.ttl | 0 | `INI_SYSTEM` |  |
| apc.gc_ttl | 3600 | `INI_SYSTEM` |  |
| apc.mmap_file_mask | NULL | `INI_SYSTEM` |  |
| apc.slam_defense | 0 | `INI_SYSTEM` |  |
| apc.enable_cli | 0 | `INI_SYSTEM` |  |
| apc.use_request_time | 0 | `INI_ALL` | Prior to APCu 5.1.19, the default was `1`. |
| apc.serializer | "php" | `INI_SYSTEM` | Prior to APCu 5.1.15, the default was `"default"`. |
| apc.coredump_unmap | 0 | `INI_SYSTEM` |  |
| apc.preload_path | NULL | `INI_SYSTEM` |  |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$apc.enabled` `bool`** — `apc.enabled` can be set to 0 to disable APC. This is primarily useful when APC is statically compiled into PHP, since there is no other way to disable it (when compiled as a DSO, the `extension` line in `php.ini` can just be commented-out).
- **`$apc.shm_segments` `int`** — The number of shared memory segments to allocate for the compiler cache. If APC is running out of shared memory but `apc.shm_size` is set as high as the system allows, raising this value might prevent APC from exhausting its memory.
- **`$apc.shm_size` `string`** — The size of each shared memory segment given by a shorthand notation as described in this FAQ. By default, some systems (including most BSD variants) have very low limits on the size of a shared memory segment.
- **`$apc.entries_hint` `int`** — A "hint" about the number of distinct variables that might be stored. Set to zero or omit if not sure.
- **`$apc.ttl` `int`** — Consider cache entries without an explicit TTL to be expired if they have not been accessed in this many seconds. Effectively, this allows such entries to be removed opportunistically during a cache insert, or prior to a full expunge. Note that because removal is opportunistic, entries can still be readable even if they are older than `apc.ttl` seconds. This setting has no effect on cache entries that have an explicit TTL specified.
- **`$apc.gc_ttl` `int`** — The number of seconds that a cache entry may remain on the garbage-collection list after being removed or invalidated. Entries are eligible for removal if their reference count is zero, or they exceed this time limit. If set to `0`, time-based cleanup is disabled, and entries are only removed when their reference count drops to zero.
- **`$apc.mmap_file_mask` `string`** — If compiled with MMAP support by using `--enable-mmap` this is the mktemp-style file_mask to pass to the mmap module for determining whether your mmap'ed memory region is going to be file-backed or shared memory backed. For straight file-backed mmap, set it to something like `/tmp/apc.XXXXXX` (exactly 6 `X`s). To use POSIX-style shm_open/mmap put a `.shm` somewhere in your mask. e.g. `/apc.shm.XXXXXX` You can also set it to `/dev/zero` to use your kernel's `/dev/zero` interface to anonymous mmap'ed memory. Leaving it undefined will force an anonymous mmap.
- **`$apc.slam_defense` `bool`** — On very busy servers whenever you start the server or modify files you can create a race of many processes all trying to cache the same file at the same time. Setting `apc.slam_defense` to `1` can help prevent multiple processes from caching the same file simultaneously by introducing a probability mechanism. If the same key is attempted to be cached within a short period by different processes, it skips the caching for the current process to mitigate potential cache slams.
- **`$apc.enable_cli` `int`** — Mostly for testing and debugging. Setting this enables APC for the CLI version of PHP. Under normal circumstances, it is not ideal to create, populate and destroy the APC cache on every CLI request, but for various test scenarios it is useful to be able to enable APC for the CLI version of PHP easily.
- **`$apc.serializer` `string`** — Used to configure APC to use a third party serializer.
- **`$apc.coredump_unmap` `bool`** — Enables APC handling of signals, such as SIGSEGV, that write core files when signaled. When these signals are received, APC will attempt to unmap the shared memory segment in order to exclude it from the core file. This setting may improve system stability when fatal signals are received and a large APC shared memory segment is configured.
  > This feature is potentially dangerous. Unmapping the shared memory segment in a fatal signal handler may cause undefined behaviour if a fatal error occurs.


  > Although some kernels may provide a facility to ignore various types of shared memory when generating a core dump file, these implementations may also ignore important shared memory segments such as the Apache scoreboard.


- **`$apc.preload_path` `string`** — Optionally, set a path to the directory that APC will load cache data at startup.
- **`$apc.use_request_time` `bool`** — Use the SAPI request start time for TTL.
