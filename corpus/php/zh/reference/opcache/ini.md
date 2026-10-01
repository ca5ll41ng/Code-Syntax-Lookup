---
id: "zh-php-guide-opcache-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "opcache.configuration"
title: "运行时配置"
module: "opcache"
source_url: "https://www.php.net/manual/zh/opcache.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| opcache.enable | 1 | `INI_ALL` |  |
| opcache.enable_cli | 0 | `INI_SYSTEM` | 在 PHP 7.1.2 至 7.1.6（含）的版本，默认值是 `1` |
| opcache.memory_consumption | 128 | `INI_SYSTEM` |  |
| opcache.interned_strings_buffer | 8 | `INI_SYSTEM` |  |
| opcache.max_accelerated_files | 10000 | `INI_SYSTEM` |  |
| opcache.max_wasted_percentage | 5 | `INI_SYSTEM` |  |
| opcache.use_cwd | 1 | `INI_SYSTEM` |  |
| opcache.validate_timestamps | 1 | `INI_ALL` |  |
| opcache.revalidate_freq | 2 | `INI_ALL` |  |
| opcache.revalidate_path | 0 | `INI_ALL` |  |
| opcache.save_comments | 1 | `INI_SYSTEM` |  |
| opcache.fast_shutdown | 0 | `INI_SYSTEM` | 从 PHP 7.2.0 开始被移除 |
| opcache.enable_file_override | 0 | `INI_SYSTEM` |  |
| opcache.optimization_level | 0x7FFEBFFF | `INI_SYSTEM` | 从 PHP 7.3.0 起修改为 `0x7FFFBFFF` |
| opcache.inherited_hack | 1 | `INI_SYSTEM` | 自 PHP 7.3.0 被移除 |
| opcache.dups_fix | 0 | `INI_ALL` |  |
| opcache.blacklist_filename | "" | `INI_SYSTEM` |  |
| opcache.max_file_size | 0 | `INI_SYSTEM` |  |
| opcache.consistency_checks | 0 | `INI_ALL` | 自 8.1.18 和 8.2.5 起禁用。从 PHP 8.3.0 起已删除。 |
| opcache.force_restart_timeout | 180 | `INI_SYSTEM` |  |
| opcache.error_log | "" | `INI_SYSTEM` |  |
| opcache.log_verbosity_level | 1 | `INI_SYSTEM` |  |
| opcache.record_warnings | 0 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.preferred_memory_model | "" | `INI_SYSTEM` |  |
| opcache.protect_memory | 0 | `INI_SYSTEM` |  |
| opcache.mmap_base | `null` | `INI_SYSTEM` | 仅限 Windows。 |
| opcache.restrict_api | "" | `INI_SYSTEM` |  |
| opcache.file_update_protection | 2 | `INI_ALL` |  |
| opcache.huge_code_pages | 0 | `INI_SYSTEM` |  |
| opcache.lockfile_path | "/tmp" | `INI_SYSTEM` |  |
| opcache.opt_debug_level | 0 | `INI_SYSTEM` | 自 PHP 7.1.0 起有效 |
| opcache.file_cache | `null` | `INI_SYSTEM` |  |
| opcache.file_cache_only | 0 | `INI_SYSTEM` |  |
| opcache.file_cache_consistency_checks | 1 | `INI_SYSTEM` |  |
| opcache.file_cache_fallback | 1 | `INI_SYSTEM` | 仅适用于 Windows 平台 |
| opcache.validate_permission | 0 | `INI_SYSTEM` | 从 PHP 7.0.14 开始支持 |
| opcache.validate_root | 0 | `INI_SYSTEM` | 从 PHP 7.0.14 开始支持 |
| opcache.preload | "" | `INI_SYSTEM` | 从 PHP 7.4.0 开始支持 |
| opcache.preload_user | "" | `INI_SYSTEM` | 从 PHP 7.4.0 开始支持 |
| opcache.cache_id | "" | `INI_SYSTEM` | 仅支持 Windows。自 PHP 7.4.0 起有效 |
| opcache.jit | "disable" | `INI_ALL` | 自 PHP 8.0.0 起有效，PHP 8.4.0 之前，默认值为“tracing”。 |
| opcache.jit_buffer_size | 64M | `INI_SYSTEM` | 自 PHP 8.0.0 起有效，PHP 8.4.0 之前，默认值为 0。 |
| opcache.jit_debug | 0 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_bisect_limit | 0 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_prof_threshold | 0.005 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_root_traces | 1024 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_side_traces | 128 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_exit_counters | 8192 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_hot_loop | 64 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_hot_func | 127 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_hot_return | 8 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_hot_side_exit | 8 | `INI_SYSTEM` | 自 PHP 8.0.0 起有效 |
| opcache.jit_blacklist_root_trace | 16 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_blacklist_side_trace | 8 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_loop_unrolls | 8 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_recursive_calls | 2 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_recursive_returns | 2 | `INI_ALL` | 自 PHP 8.0.0 起有效 |
| opcache.jit_max_polymorphic_calls | 2 | `INI_ALL` | 自 PHP 8.0.0 起有效 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$opcache.enable` `bool`** — 启用操作码缓存。如果禁用此选项，则不会优化和缓存代码。 在运行期使用 `ini_set()` 函数只能禁用 `opcache.enable` 设置，不可以启用此设置。 如果在脚本中尝试启用此设置项会产生警告。
- **`$opcache.enable_cli` `bool`** — 仅针对 CLI 版本的 PHP 启用操作码缓存。 通常被用来测试和调试。
- **`$opcache.memory_consumption` `int`** — OPcache 的共享内存大小，以兆字节为单位。最小允许值为 `"8"`。如果设置的值小于最小值，则强制设置为允许的最小值。
- **`$opcache.interned_strings_buffer` `int`** — 用来存储预留字符串的内存大小，以 MB 为单位。最大值在 64 位架构上为 32767，在 32 位架构上为 4095。
  > PHP 8.4.0 之前，所有架构上的最大值都是 4095 MB。


- **`$opcache.max_accelerated_files` `int`** — OPcache 哈希表中可存储的脚本文件数量上限。真实的取值是在质数集合`{ 223, 463, 983, 1979, 3907, 7963, 16229, 32531, 65407, 130987, 262237, 524521, 1048793 }` 中找到的第一个大于等于设置值的质数。设置值取值范围最小值是 200，最大值是 1000000。超出范围的值将限制为允许的值。
- **`$opcache.max_wasted_percentage` `int`** — 如果可用内存不足，在计划重新启动之前，允许浪费的最大内存百分比。最大允许值是 `"50"`，如果设置了更大的值，则强制设置为允许的最大值。
- **`$opcache.use_cwd` `bool`** — 如果启用，OPcache 将在哈希表的脚本键之后附加改脚本的工作目录， 以避免同名脚本冲突的问题。 禁用此选项可以提高性能，但是可能会导致应用崩溃。
- **`$opcache.validate_timestamps` `bool`** — 如果启用，那么 OPcache 会每隔 opcache.revalidate_freq 设定的秒数 检查脚本是否更新。 如果禁用此选项，你必须使用 `opcache_reset()` 或者 `opcache_invalidate()` 函数来手动重置 OPcache，也可以 通过重启 Web 服务器来使文件系统更改生效。 > 如果将 opcache.file_update_protection 或 opcache.max_file_size 选项设置为非零值，OPcache 仍可能在编译时验证文件的时间戳。
- **`$opcache.revalidate_freq` `int`** — 检查脚本时间戳是否有更新的周期，以秒为单位。 设置为 `0` 会导致针对每个请求， OPcache 都会检查脚本更新。 — 如果 opcache.validate_timestamps 配置指令设置为禁用，那么此设置项将会被忽略。
- **`$opcache.revalidate_path` `bool`** — 如果禁用此选项，在同一个 include_path 已存在的缓存文件会被重用。 因此，将无法找到不在包含路径下的同名文件。
- **`$opcache.save_comments` `bool`** — 如果禁用，脚本文件中的注释内容将不会被包含到操作码缓存文件， 这样可以有效减小优化后的文件体积。 禁用此配置指令可能会导致一些依赖注释或注解的 应用或框架无法正常工作， 比如： Doctrine， Zend Framework 2 以及 PHPUnit。
- **`$opcache.fast_shutdown` `bool`** — 如果启用，则会使用快速停止续发事件。 所谓快速停止续发事件是指依赖 Zend 引擎的内存管理模块 一次释放全部请求变量的内存，而不是依次释放每一个已分配的内存块。 — 从 PHP 7.2.0 开始，此配置指令被移除。 快速停止的续发事件的处理已经集成到 PHP 中， 只要有可能，PHP 会自动处理这些续发事件。
- **`$opcache.enable_file_override` `bool`** — 如果启用，则在调用函数 `file_exists()`， `is_file()` 以及 `is_readable()` 的时候， 都会检查操作码缓存，无论文件是否已经被缓存。 如果应用中包含检查 PHP 脚本存在性和可读性的功能，这样可以提升性能。 但是如果禁用了 opcache.validate_timestamps 选项， 可能存在返回过时数据的风险。
- **`$opcache.optimization_level` `int`** — 控制执行哪些优化的二进制位掩码。默认是应用所有安全优化。更改默认值对于调试/开发优化器非常有用（参见 opcache.opt_debug_level）。
- **`$opcache.inherited_hack` `bool`** — 该配置指令已被忽略。
- **`$opcache.dups_fix` `bool`** — 仅作为针对 “不可重定义类”错误的一种解决方案。
- **`$opcache.blacklist_filename` `string`** — OPcache 黑名单文件位置。 黑名单文件为文本文件，包含了不进行预编译优化的文件名，每行一个文件名。 黑名单中的文件名可以使用通配符，也可以使用前缀。 此文件中以分号（;）开头的行将被视为注释。 — 简单的黑名单文件可能如下所示：
   
  ```text

  ; 将特定文件加入到黑名单
  /var/www/broken.php
  ; 以字符 x 文件打头的文件
  /var/www/x
  ; 通配符匹配
  /var/www/*-broken.php

       
  ```

   


- **`$opcache.max_file_size` `int`** — 以字节为单位的缓存的文件大小上限。设置为 `0` 表示缓存全部文件。
- **`$opcache.consistency_checks` `int`** — 如果是非 0 值，OPcache 将会每隔 N 次请求检查缓存校验和。 N 即为此配置指令的设置值。 由于此选项对于性能有较大影响，请尽在调试环境使用。
  > 自 8.1.18 和 8.2.5 起禁用。从 PHP 8.3.0 起已删除。


- **`$opcache.force_restart_timeout` `int`** — 如果缓存处于非激活状态，等待多少秒之后计划重启。 如果超出了设定时间，则 OPcache 模块将杀除持有缓存锁的进程， 并进行重启。 — 如果选项 opcache.log_verbosity_level 设置为 2 或者 2 以上的数值，当发生重启时将在日志中记录一条警告信息。 — Windows 不支持该指令。
- **`$opcache.error_log` `string`** — OPcache 模块的错误日志文件。 如果留空，则视为 `stderr`， 错误日志将被送往标准错误输出 （通常情况下是 Web 服务器的错误日志文件）。
- **`$opcache.log_verbosity_level` `int`** — OPcache 模块的日志级别。 默认情况下，仅有致命级别（0）及错误级别（1）的日志会被记录。 其他可用的级别有：警告（2），信息（3）和调试（4）。
- **`$opcache.record_warnings` `bool`** — 如果启用，OPcache 将记录编译时警告并在下次对其重播，即使是从缓存中提供的。
- **`$opcache.preferred_memory_model` `string`** — OPcache 首选的内存模块。 如果留空，OPcache 会选择适用的模块， 通常情况下，自动选择就可以满足需求。 — 可选值包括： `mmap`，`shm`, `posix` 以及 `win32`。
- **`$opcache.protect_memory` `bool`** — 保护共享内存，以避免执行脚本时发生非预期的写入。 仅用于内部调试。
- **`$opcache.mmap_base` `string`** — 在 Windows 平台上共享内存段的基地址。 所有的 PHP 进程都将共享内存映射到同样的地址空间。 使用此配置指令避免“无法重新附加到基地址”的错误。
- **`$opcache.restrict_api` `string`** — 仅允许路径是以指定字符串开始的 PHP 脚本调用 OPcache API 函数。 默认值为空字符串 `""`，表示不做限制。
- **`$opcache.file_update_protection` `string`** — 如果文件的最后修改时间距现在不足此项配置指令所设定的秒数，那么这个文件不会进入到缓存中。 这是为了防止尚未完全修改完毕的文件进入到缓存。如果所有文件更新都是原子的，则可以通过将其设置为 `0` 来提高性能。这将允许文件立即缓存。
- **`$opcache.huge_code_pages` `bool`** — 启用或者禁用将 PHP 代码（文本段）拷贝到 HUGE PAGES 中。这应该会提高性能，但是需要适当的 OS 配置。自 PHP 7.0.0 起可在 Linux 上使用，自 PHP 7.4.0 上可在 FreeBSD 上使用。
- **`$opcache.lockfile_path` `string`** — 用来存储共享锁文件的绝对路径（仅适用于 *nix 操作系统）。
- **`$opcache.opt_debug_level` `string`** — 出于对不同阶段的优化情况进行调试的目的，生成操作码转储。 设置为 0x10000 会在进行优化之前输出编译器编译后的操作码， 设置为 0x20000 会输出优化后的操作码。
- **`$opcache.file_cache` `string`** — 配置二级缓存目录并启用二级缓存。 启用二级缓存可以在 SHM 内存满了、服务器重启或者重置 SHM 的时候提高性能。 默认值为空字符串 `""`，表示禁用基于文件的缓存。
- **`$opcache.file_cache_only` `bool`** — 启用或禁用在共享内存中的 opcode 缓存。
  > 在 PHP 8.1.0 之前，已经存在文件缓存时禁用此指令需要手动清除文件缓存。


- **`$opcache.file_cache_consistency_checks` `bool`** — 当从文件缓存中加载脚本的时候，是否对文件的校验和进行验证。
- **`$opcache.file_cache_fallback` `bool`** — 在 Windows 平台上，当一个进程无法附加到共享内存的时候， 使用基于文件的缓存，也即：opcache.file_cache_only=1。 需要显示的启用文件缓存。
  > 不鼓励禁用此配置项， 禁用它可能会导致进程无法启动。


- **`$opcache.validate_permission` `bool`** — 针对当前用户，验证缓存文件的访问权限。
- **`$opcache.validate_root` `bool`** — 在 chroot 的环境中避免命名冲突。 为了防止进程访问到 chroot 环境之外的文件，应该在 chroot 的情况下启用这个选项。
- **`$opcache.preload` `string`** — 指定要在服务器启动时期进行编译和缓存的 PHP 脚本文件， 这些文件也可能通过 `include()` 或者 `opcache_compile_file()` 函数 来预加载其他文件。 所有这些文件中包含的实体，包括函数、类等，在服务器启动的时候就被加载和缓存， 对于用户代码来讲是“开箱可用”的。
  > Windows 不支持预加载。


- **`$opcache.preload_user` `string`** — 预加载以指定系统用户身份运行。这对于切换到非特权系统用户之前以 root 身份启动的服务器很有用。考虑到安全因素，默认禁止以 root 身份预加载代码，除非该指令明确设置为 `root`。自 PHP 8.3.0 起，当使用  或 phpdbg SAPI 以 root 身份运行时，无需设置此指令即可允许预加载。
- **`$opcache.cache_id` `string`** — 在 Windwos 上，运行在相同 PHP SAPI 且相同的用户账户使用相同缓存 ID 上的所有进程，会共享单个 OPcache 实例。缓存 ID 的值可以自由选择。
  > 对于 IIS，使用环境变量 APP_POOL_ID 作为 `$opcache.cache_id`，可以让不同的应用池拥有自己的 OPcache 实例。


- **`$opcache.jit` `string|int`** — 针对经典用法，此选项接受以下四个字符串值之一：
   `disable`：完全禁用，无法在运行时启用。 `off`：禁用，但可以在运行时启用。  `tracing`/`on`：使用追踪 JIT。默认启用并推荐给大部分用户。  `function`：使用函数 JIT。 

 — 针对高级用法，此选项接受 4 位整数 `CRTO`，其中的位分别是： - **`C`（特定 CPU 优化 flag）** `0`：禁用特定 CPU 优化。 `1`：如果 CPU 支持则启用 AVX。 - **`R`（寄存器分配）** `0`：不执行寄存器分配。 `1`：执行局部域寄存器分配。 `2`：执行全局寄存器分配。 - **`T`（触发）** `0`: 在脚本加载时编译所有函数。 `1`: 在第一次执行时编译函数。 `2`：第一次请求时分析函数，然后编译最热门函数。 `3`：动态分析和编译热门函数。 `4`：目前未使用。 `5`：使用追踪 JIT。动态分析和为热门代码段编译追踪。 - **`O`（优化级别）** `0`：不 JIT。 `1`：最小 JIT（调用标准 VM 处理程序）。 `2`：内联 VM 处理程序。 `3`：使用类型推断。 `4`：使用调用图。 `5`：优化整个脚本。 `"tracing"` 模式对应 CRTO = 1254，`"function"` 模式对应 CRTO = 1205。
- **`$opcache.jit_buffer_size` `int`** — 为编译 JIT 代码保留的共享内存量。值 0 表示禁用 JIT。 — 当使用 `int` 时, 其值以字节来衡量。还可以使用在 FAQ 中描述的速记符。
- **`$opcache.jit_debug` `int`** — 指定位掩码，用于启动哪个 JIT 调试输出。参阅 [zend_jit.h](ext/opcache/jit/zend_jit.h) （搜索以 ZEND_JIT_DEBUG 开头的宏定义）。
- **`$opcache.jit_bisect_limit` `int`** — 调试选项，在编译一定数量的函数之后禁用 JIT 编译。这对于定位 JIT 错误编译的源代码可能很有帮助。注意：此选项仅在 JIT 触发设置为 0（在脚本加载时编译）或1（第一次执行时编译）时起作用，例如 opcache.jit=1215。更多详细信息请参阅 opcache.jit 选项。
- **`$opcache.jit_prof_threshold` `float`** — 当使用“首次请求时分析”触发模式时，此阈值确定是否视函数为热点。对该函数的调用次数除以所有函数的调用次数必须高于该阈值。例如，阈值为 0.005 表示占所有调用次数超过 0.5% 的函数将被进行 JIT 编译。
- **`$opcache.jit_max_root_traces` `int`** — Maximum number of root traces. The root trace is an execution flow taking one path through the code firstly, which is a unit of JIT compilation. JIT will not compile new code if it reaches this limit.
- **`$opcache.jit_max_side_traces` `int`** — Maximum number of side traces a root trace may have. The side trace is another execution flow that does not follow the path of compiled root trace. Side traces belonging to the same root trace will not be compiled if it reaches this limit.
- **`$opcache.jit_max_exit_counters` `int`** — Maximum number of side trace exit counters. This limits the total number of side traces there may be, across all root traces.
- **`$opcache.jit_hot_loop` `int`** — After how many iterations a loop is considered hot. Valid value range is [0,255]; for any setting out of this range, e.g. `-1` or `256`, default value will be used instead. `0` will disable JIT to trace and compile any loops.
- **`$opcache.jit_hot_func` `int`** — After how many calls a function is considered hot. Valid value range is [0,255]; for any setting out of this range, e.g. `-1` or `256`, default value will be used instead. `0` will disable JIT to trace and compile any functions.
- **`$opcache.jit_hot_return` `int`** — After how many returns a return is considered hot. Valid value range is [0,255]; for any setting out of this range, e.g. `-1` or `256`, default value will be used instead. `0` will disable JIT to trace and compile any returns.
- **`$opcache.jit_hot_side_exit` `int`** — After how many exits a side exit is considered hot. Valid value range is [0,255]; for any setting out of this range, e.g. `-1` or `256`, default value will be used instead. `0` will disable JIT to trace and compile any side exits.
- **`$opcache.jit_blacklist_root_trace` `int`** — 在将 root trace 列入黑名单之前，尝试编译 side trace 的最大次数。
- **`$opcache.jit_blacklist_side_trace` `int`** — 在将 side trace 列入黑名单之前，尝试编译 side trace 的最大次数。
- **`$opcache.jit_max_loop_unrolls` `int`** — 在 side trace 中展开循环的最大尝试次数，试图到达 root trace 并关闭外循环。
- **`$opcache.jit_max_recursive_calls` `int`** — 递归调用循环的最大展开次数。
- **`$opcache.jit_max_recursive_returns` `int`** — 递归返回循环的最大展开次数。
- **`$opcache.jit_max_polymorphic_calls` `int`** — 内联 polymorphic（动态或方法）调用的最大尝试次数。超过此限制的调用被视为 megamorphic，不会进行内联处理。
