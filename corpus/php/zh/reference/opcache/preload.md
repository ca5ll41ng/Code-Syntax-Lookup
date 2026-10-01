---
id: "zh-php-guide-opcache-preloading"
language: "php"
lang: "zh"
category: "guide"
name: "opcache.preloading"
title: "预加载"
module: "opcache"
source_url: "https://www.php.net/manual/zh/opcache.preloading.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预加载

从 PHP 7.4.0 起，PHP 可以被配置为在引擎启动时将一些脚本预加载进 opcache 中。在那些文件中的任何函数、类、 接口或者 trait （但不包括常量）将在接下来的所有请求中变为全局可用，不再需要显示地包含它们。这牺牲了基准的 内存占用率但换来了方便和性能（因为这些代码将始终可用）。它还需要通过重启 PHP 进程来清除预加载的脚本， 这意味着这个功能仅在生产环境中有实用价值，而非开发环境。

需要注意的是，性能和内存之间的最佳平衡因应用而异。 “预加载一切” 可能是最简单的策略，但不一定是最好的策略。 此外，只有当不同的请求间有持久化的进程时，预加载才有用。这意味着，虽然在启用了 opcache 的命令行脚本中可以使用预加载， 但这通常是没有意义的。例外情况是在使用预加载时的 FFI 库。

> Windows 上不支持预加载。

配置预加载需要两步，并且要求开启 opcache。首先，在php.ini 中设置 opcache.preload 的值：

 
```ini

opcache.preload=preload.php

  
```

 

`preload.php` 是一个在服务器启动时会运行一次（PHP-FPM、mod_php 等）的任意文件， 它的代码会加载到持久化内存中。在以 root 用户启动后切换到非特权系统用户的服务器上，又或者是以 root 用户身份运行 PHP 的情况（不建议这样做），可以通过opcache.preload_user 来指定进行预加载的系统用户。 默认情况下，不允许以 root 用户身份进行预加载。通过设置 `opcache.preload_user=root` 来显示地允许它。

在 `preload.php` 脚本中， 任何被 `include()`、 `include_once()`、`require()`、`require_once()`或 `opcache_compile_file()` 引用的文件将被解析到持久化内存中。 在下面的这个例子中， 所有在 `src` 目录下的 `.php` 文件将被预加载，除非那是一个 `Test` 文件。

 
```php

<?php
$directory = new RecursiveDirectoryIterator(__DIR__ . '/src');
$fullTree = new RecursiveIteratorIterator($directory);
$phpFiles = new RegexIterator($fullTree, '/.+((?<!Test)+\.php$)/i', RecursiveRegexIterator::GET_MATCH);

foreach ($phpFiles as $key => $file) {
    require_once $file[0];
}
?>

  
```

 

`include()` 和 `opcache_compile_file()` 都会生效，但对代码处理方式有不同的影响。 Both `include()` and `opcache_compile_file()` will work, but have different implications for how code gets handled.

- `include()` 将执行文件中的代码，而 `opcache_compile_file()` 不会执行代码。这意味着只有前者支持条件声明（在 if 块中声明函数）。
- 由于 `include()` 会执行代码，因此所有被 `include()` 的文件也将被解析， 其中的定义也将被预加载。
- `opcache_compile_file()` 可以按任何顺序加载文件。也就是说，如果 `a.php` 定义了类 `A`，而 `b.php` 定义了一个继承类 `A` 的类 `B`， 则 `opcache_compile_file()` 可以按任何顺序来加载这两个文件。然而，当使用 `include()` 时， `a.php` *必须* 先被包含。
- 不管在哪种情况下，如果一个脚本包含了一个已经被预加载的文件，那么这个已经被预加载的文件里的内容仍将被执行， 但其中定义的任何符号将不会被重新定义。使用 `include_once()` 不会阻止文件被二次包含。有时候可能仍需要重新加载文件 来包含其中定义的全局常量，因为这些常量预加载并不会处理。

因此，哪种方式更好取决于所需的行为。对于本来会使用自动加载器的代码，`opcache_compile_file()` 有更高的灵活性。而对于本来会需要手动加载的代码，`include()` 会更健壮。
